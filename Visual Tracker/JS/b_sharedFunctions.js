////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	GROUP LOCATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*	In our databases we are grouping locations by area.
*	However, we want to group these into a single collection so they can be utilised by the program.

*	The DX version of this function takes the offset of the map element and adjusts the locations grid reference,
	so even if we've portioned up the map, the grid reference will be relative to the size of that map element.

*	This function is designed to take the global grid reference assigned to the location and transform it to the local position of the map element.
	The common origin is the top-left corner of the world map, i.e. the cluster of map elements, that the locations are assigned to.
*/

	function Locations_ConcatGroups (...locationGroups) {
		return locationGroups.flat();
	}

	function Locations_ConcatGroups_DX (mapElement, commonOrigin, ...locationGroups) {
		if (mapElement == null) {
			AppLog("MapElement is null, so either the querySelector has been mis-spelled or the map element is missing.");
			return [];
		}
		else AppLog("Concatenating location groups for map element:", mapElement);
		const concatenatedLocations = [];
		for (const g of locationGroups) {
			for (const l of g) {
				const actualGridRef = GetModdedGridReference(l, mapElement, commonOrigin);
				concatenatedLocations.push(new Location (
					l.area, l.name, l.type_,
					actualGridRef.x, actualGridRef.y,
					l.tilePos_x, l.tilePos_y,
					l.labelPos
				));
			}
		}
		return concatenatedLocations;
	}

/*
*	Not all locations will be included (such as those that are always-vanilla in the shuffle).
*	Exemptions should be written as strings and match the address of the location, i.e. "area - name".
	If the exemption is a connector, you will have to pass a copy for each entrance.
*/
	function Locations_RemoveExemptions (_locations, ...exemptions) {
	//Internal function
		function RemoveFromLocations (exemption) {
			for (let i = 0; i < _locations.length; i++) {
				if (_locations[i].address == exemption) {
					_locations.splice(i,1);
					break;
				}
			}
		}
	//Iterate exemptions
		for (const entry of exemptions) {
		//If exemption is array, iterate though that.
			if (Array.isArray(entry)) {
				for (const ex of entry) {
					RemoveFromLocations(ex);
				}
				continue;
			}
		//Else if exemption is singular, just sort it out.
			RemoveFromLocations(entry);
		}
	}



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	POPULATE MAP WITH LOCATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	const
		gridElement_width_pixels = 160,
		gridElement_height_pixels = 128
	;
	const
		gridElement_width_tiles = 10,
		gridElement_height_tiles = 8
	;
	const
		tile_size_pixels = 16,
		markerOffset_pixels = 8
	;
	const
		label_offsetIncrement_pixels_x = 32,
		label_offsetIncrement_pixels_y = 40
	;


//
//	ADD MARKERS AND GRID ELEMENTS TO MAP ELEMENT
//
	let idCount = 0;
	function MapElement_AddLocationMarkers(mapElement, _locations) {
		if (mapElement == null) {
			AppLog("MapElement is null, so the querySelector has probably been mis-spelled...");
			return [];
		}
		const imgElement = mapElement.querySelector('img');
		if (imgElement == null) {
			AppLog(`DOM element ${mapElement} does not contain a valid image.`);
			return;
		}
		else {
			LogElement(imgElement);
		}
				
		const gridElements_x = Math.floor(imgElement.naturalWidth / gridElement_width_pixels);
		const gridElements_y = Math.floor(imgElement.naturalHeight / gridElement_height_pixels);
		const gridElements = new Array(gridElements_x * gridElements_y).fill();

	//(OPTIONAL) ADD GRID ELEMENTS
	/*
	*	While not all grid references have entrances in them, giving each a grid element will serve as a visual aid while scrolling over the map.
	*	The DX version of this function checks for whether the part of the image is transparent, as the map will be made up of various regions which will necessarily contain transparent parts so as to overlap.
	*/

	//Prepare Canvas (required to check map elements for alpha transparency)
		const canvas = document.createElement('canvas');
		canvas.width = imgElement.naturalWidth;
		canvas.height = imgElement.naturalHeight;
		const context = canvas.getContext('2d', { willReadFrequently: true });
		context.drawImage(imgElement, 0, 0);
	//Create a gridElement for each filled-in grid reference of the map element
		for (let i = 0; i < gridElements.length; i++) {
			const x = Math.floor(i % gridElements_x);
			const y = Math.floor(i / gridElements_x);
			const alpha = context.getImageData(x * gridElement_width_pixels, y * gridElement_height_pixels, 1, 1).data[3];
			const logAlpha = `Inspecting pixel @ (${x * gridElement_width_pixels}, ${y * gridElement_height_pixels}); alpha = ${alpha}`;
			if (alpha === 0) {
				gridElements[i] = null;
				AppLog(`${logAlpha}; %cSkipping (${x}, ${y})`, "color: red;");
			}
			else {
				gridElements[i] = CreateElement_Grid(x, y);
				mapElement.appendChild(gridElements[i]);
				AppLog(`${logAlpha}; %cCreating grid element @ (${x}, ${y})`, "color: green;");
			}
		}

	//ITERATE LOCATIONS
		for (const loc of _locations) {
			const gridIndex = loc.gridRef_y * gridElements_x + loc.gridRef_x;
		//Catch locations whose positions are out-of-bounds
			if (gridIndex >= gridElements.length || gridIndex < 0) {
				AppLog(`%c${loc.address}%c is out-of-bounds - check grid reference.`, "color: yellow;", "color:red");
				continue;
			}
			else if (gridElements[gridIndex] === null) {
				AppLog(`%c${loc.address} is located on a grid that has been intentionally skipped - grid reference (${loc.gridRef_x}, ${loc.gridRef_y})`, "color: red;");
				continue;
			}
		//Add a marker element corresponding to the location
			const markerElement = CreateElement_Marker(gridElements[gridIndex], loc);
			markerElement.id = "loc"+idCount;
			idCount++;
		//Add a label element that will display when the location is assigned
			CreateElement_Label(gridElements[gridIndex], loc);
		//Log
			AppLog(`%c#${markerElement.id} ${loc.address} @ gridReference (${loc.gridRef_x}, ${loc.gridRef_y})`, "color: yellow;");
		}
	}


//
//	CREATE ELEMENTS
//
	function CreateElement_Grid (_gridRef_x, _gridRef_y) {
		const gridElement = NewElement("div", "", ["gridElement-ctnr"]);
		gridElement.appendChild(NewElement("div", "", ["gridElement-border"]));
		gridElement.style.left = `${_gridRef_x * gridElement_width_pixels}px`;
		gridElement.style.top = `${_gridRef_y * gridElement_height_pixels}px`;
		return gridElement;
	}

	function CreateElement_Marker(_gridElement, _location) {
		const marker = NewElement("div", "", ["marker-hl"]);
		marker.appendChild(NewElement("div", "", ["marker-ping"]));
		SetMarkerPosition(_location, marker);
		_gridElement.appendChild(marker);
		return marker;
	}

	function CreateElement_Label(_gridElement, _location) {
		const label = NewElement("div", "", ["marker-label"]);
		SetLabelPosition(_location, label);
		_gridElement.appendChild(label);
		return label;
	}



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	CREATE SEARCH CONTROLS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function AddSearchTerms (_locations) {
		const location_menu = document.getElementById('location-menu');
		for (const _loc of _locations) {

		//If location is of type Generic, don't add to search terms
			if (_loc.isGeneric) continue;

		//Generate relevant element ID, textContent
			let area_h3_textContent;
			let area_ID;
			let listItem_textContent;
			if (typeof _loc === 'string') {
				const splitString = _loc.split(" - ");
				area_h3_textContent = splitString[0];
				listItem_textContent = splitString[1];
			}
			else {
				area_h3_textContent = _loc.area;
				listItem_textContent = _loc.displayName;
			}
			area_ID = area_h3_textContent		
				.replace(/[\s\/]+/g, "-")				//Spaces & forward slashes => hyphens	
				.replace(/[^a-zA-Z0-9\-\_\:]/g, "")		//Everything else => nothing
				.toLowerCase()
			;
		//Create new element for area location list
			if (!location_menu.querySelector(`#${area_ID}`)) {
				location_menu.appendChild(NewElement('div', area_ID, ['location-list'], (_elmt)=>{
					_elmt.appendChild(NewElement('h3', '', [], (_subElmt)=>{
						_subElmt.textContent = area_h3_textContent;
					}));
					_elmt.appendChild(NewElement('ul', '', []));
				}));
			}
		//Append list item to area location list
			location_menu
				.querySelector(`#${area_ID}`)
				.querySelector('ul')
				.appendChild(NewElement('li', "", [], (_elmt)=>{
					_elmt.textContent = listItem_textContent;
				}
			));
		};

	}



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	UTILITY FUNCTIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function NewElement(elemType, id, Arr_classes, _Func_appendStyles = (_elmt)=>{return;}) {		//<== With Func_appendStyles you can add a function to the constructor like (_newElem)=>{DOSTUFF}). Useful for including extra paramaters.
		const newElem = document.createElement(elemType);
		if (id !='') newElem.id = id;
		for (cl in Arr_classes) {
			newElem.classList.add(Arr_classes[cl]);
		}
		_Func_appendStyles(newElem);
		return newElem;
	}

	function GenerateMarkerPosition (_location) {
		return {
			x: _location.tilePos_x * tile_size_pixels + markerOffset_pixels,
			y: _location.tilePos_y * tile_size_pixels + markerOffset_pixels
		};
	}

	function SetMarkerPosition (_location, _markerElement) {
		const markerPosition = GenerateMarkerPosition(_location);
		_markerElement.style.left = `${markerPosition.x}px`;
		_markerElement.style.top = `${markerPosition.y}px`;
	}

	function SetLabelPosition (_location, _labelElement) {
		let labelPosition = GenerateMarkerPosition(_location);
		for (const c of _location.labelPos) {
			if (c == "T") {labelPosition.y -= label_offsetIncrement_pixels_y; continue}
			if (c == "B") {labelPosition.y += label_offsetIncrement_pixels_y; continue}
			if (c == "L") {labelPosition.x -= label_offsetIncrement_pixels_x; continue}
			if (c == "R") {labelPosition.x += label_offsetIncrement_pixels_x; continue}
		}
		_labelElement.style.left = `${labelPosition.x}px`;
		_labelElement.style.top = `${labelPosition.y}px`;
	}

//Take the global grid reference assigned to the location and transform it to the local position of the map element.
//The common origin is the top-left corner of the world map, i.e. the cluster of map elements, that the locations are assigned to.
	function GetModdedGridReference (_location, _mapElement, commonOrigin) {
		return {
			x: _location.gridRef_x - Math.floor((parseInt(_mapElement.style.left)-commonOrigin.x) / gridElement_width_pixels),
			y: _location.gridRef_y - Math.floor((parseInt(_mapElement.style.top)-commonOrigin.y) / gridElement_height_pixels)
		};
	}
	