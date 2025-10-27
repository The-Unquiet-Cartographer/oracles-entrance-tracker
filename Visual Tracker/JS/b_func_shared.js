let Portals = [];			//<== Will store all portal markers by their location name. This will help to automate drawing connections between portals later.
let Connectors = [];		//<== Will contain generated line elements denoting connectors.



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	GROUP LOCATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*	In our databases we are grouping locations by area.
*	However, we want to group these into a single collection so they can be utilised by the program.
*/
	function Locations_ConcatGroups (...locationGroups) {
		return locationGroups.flat();
		//const concatenatedLocations = [];
		//for (const l of locationGroups) {
		//	concatenatedLocations = concatenatedLocations.concat(l);
		//}
		//return concatenatedLocations;
	}

/*
*	Not all locations will be included (such as those that are always-vanilla in the shuffle).
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
		//Else if exemption is singular, just sort it out
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


//
//	ADD MARKERS AND GRID ELEMENTS TO MAP ELEMENT
//
	let idCount = 0;
	function MapElement_AddLocationMarkers (
		mapElement,
		gridElements_x,
		gridElements_y,
		_locations,
	) {
		const gridElements = new Array(gridElements_x * gridElements_y).fill();

	//(OPTIONAL) ADD GRID ELEMENTS
	/*
	*	While not all grid references have entrances in them, giving each a grid element will serve as a visual aid while scrolling over the map.
	*/
		for (let i = 0; i < gridElements.length; i++) {
			const x = Math.floor(i % gridElements_x);
			const y = Math.floor(i / gridElements_x);
			gridElements[i] = CreateElement_Grid(x, y);
			mapElement.appendChild(gridElements[i]);
		}

	//ITERATE LOCATIONS
		for (const loc of _locations) {
			const gridIndex = loc.gridRef_y * gridElements_x + loc.gridRef_x;

		//Add a grid element if none exists already
		/*
		*	Not required as we are adding grid elements for ALL grids regardless.
		*/
		//	if (gridElements[gridIndex] == undefined) {
		//		gridElements[gridIndex] = CreateElement_Grid(loc.gridRef_x, loc.gridRef_y);
		//		mapElement.appendChild(gridElements[gridIndex]);
		//	}

		//Instead, catch elements whose position is out-of-bounds
			if (gridIndex >= gridElements.length) {
				console.log(loc.address+" is out-of-bounds - check grid reference.");
				return;
			}

		//Add a marker element corresponding to the location
			const markerPos_x = (loc.tilePos_x * tile_size_pixels) + markerOffset_pixels;
			const markerPos_y = (loc.tilePos_y * tile_size_pixels) + markerOffset_pixels;
			const markerElement = CreateElement_Marker(gridElements[gridIndex], markerPos_x, markerPos_y);
			markerElement.id = "loc"+idCount;
			idCount++;

            if (loc.type == "portal") {
                markerElement.classList.add("portal");
                Portals.push([loc.label, markerElement]);
            }
		//Add a label element that will display when the location is assigned
			CreateElement_Label(gridElements[gridIndex], loc, markerPos_x, markerPos_y);
		//Log
			console.log(`#${markerElement.id} ${loc.address} @ gridReference (${loc.tilePos_x}, ${loc.tilePos_y})`);
			//console.log(`${loc.gridReference}:\t${loc.label}`);
		}
	}


//
//	CREATE ELEMENTS
//
	function CreateElement_Grid (_gridRef_x, _gridRef_y) {
		const gridElement = NewElement("div", ["gridElement-ctnr"]);
		gridElement.appendChild(NewElement("div", ["gridElement-border"]));
		gridElement.style.left = `${_gridRef_x * gridElement_width_pixels}px`;
		gridElement.style.top = `${_gridRef_y * gridElement_height_pixels}px`;
		return gridElement;
	}

	function CreateElement_Marker(_gridElement, _markerPos_x, _markerPos_y) {
		const marker = NewElement("div", ["marker-hl"]);
		marker.appendChild(NewElement("div", ["marker-ping"]));
		marker.style.left = `${_markerPos_x}px`;
		marker.style.top = `${_markerPos_y}px`;
		_gridElement.appendChild(marker);
		return marker;
	}

	function CreateElement_Label(_gridElement, _location, _markerPos_x, _markerPos_y) {
		const label_offset_px_x = 32, label_offset_px_y = 40;
		const label = NewElement("div", ["marker-label"]);
		let x = _markerPos_x;
		let y = _markerPos_y;

		if (typeof _location.labelPos !== 'string') {
			console.log("Nope @ "+_location.name+" "+_markerPos_x+" "+_markerPos_y);
		}

		for (const c of _location.labelPos) {
			if (c == "T") {y -= label_offset_px_y; continue}
			if (c == "B") {y += label_offset_px_y; continue}
			if (c == "L") {x -= label_offset_px_x; continue}
			if (c == "R") {x += label_offset_px_x; continue}
		}
		label.style.top = `${y}px`;
		label.style.left = `${x}px`;
		_gridElement.appendChild(label);
		return label;
	}



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	CREATE SEARCH CONTROLS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function AddSearchTerms (_locations) {
		const elem_search_list = document.getElementById('search').querySelector('ul');
		for (const loc of _locations) {
			const listElement = NewElement("li", []);
		//If is defined location...
			if (loc instanceof Location) {
				listElement.textContent = loc.fullAddress;
			//Hide locations with type "generic" (a generic alternative will be made available)
				if (loc.type == "generic") {
					listElement.style.display = "none";
				}
			}
		//Else assumes a string:
			else {
				listElement.textContent = loc;
			}
    	    elem_search_list.appendChild(listElement);
		}
	}



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	UTILITY FUNCTIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function NewElement(elemType, arr_classes/*, Func_appendStyles*/) {			//<== With Func_appendStyles you can add a function to the constructor like (_newElem)=>{DOSTUFF}). Useful for including extra paramaters.
		const newElem = document.createElement(elemType);
		for (const cl of arr_classes) {
			newElem.classList.add(cl);
		}
		/*Func_appendStyles(newElem);*/
		return newElem;
    }