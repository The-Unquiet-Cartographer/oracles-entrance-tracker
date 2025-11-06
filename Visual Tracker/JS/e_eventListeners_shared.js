/*
*	We've managed to write this whole script without referring back to the Location arrays constructed earlier, ensuring modularity.
*/
	const elem_search_ctnr_outer = document.getElementById('search-ctnr-outer');	//Will be displayed when a marker is selected.
	const elem_btn_clear = elem_search_ctnr_outer.querySelector('#btn-clear');
	const menu_sections = [];														//Will let us track which list items belong to which menu_sections (mainly used for writing labels).
	const elems_listItems = [];														//Each list item will be given an event listener so we can label the entrances.
	for (const l of elem_search_ctnr_outer.querySelectorAll('.location-list')) {
		const oldLength = elems_listItems.length;
		elems_listItems.push(...l.querySelectorAll('li'));
		menu_sections.push({
			area: l.querySelector('h3').textContent,
			locationCount: elems_listItems.length - oldLength
		});
	}
	function LocationMenu_FullLabel (_locationMenuIndex) {
		let labelText = "";
		let _i = _locationMenuIndex;
		for (const s of menu_sections) {
			if (_i < s.locationCount) {
				labelText = s.area;
				break;
			}
			_i -= s.locationCount;
		}
		return labelText+" - "+elems_listItems[_locationMenuIndex].textContent;
	}



	//const elem_search_input = elem_search_ctnr.querySelector('input');						//Will be displayed when a marker is selected and have its own event listener so the user can input a search.
	//const elem_search_list = elem_search_ctnr.querySelector('ul');							//Will be displayed when a marker is selected and modified by the search input. 
																							//Actually nearly all the references to this call .childNodes so I can probably replace it with elems_listItems.
	//const searchTerms = Array.from(elems_listItems, _li => _li.textContent.toLowerCase());	//A case-insensitive list of applicable terms to be matched by the search input.


	const elems_connectors = [];	//Tracks all connector elements - actually tracks the source marker, destination marker, and line element, as an array.
									//Feasibly I could make this sstatic inside the Annotation class if it's not needed elsewhere.



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  SELECT / DESELECT MARKERS
//	DISPLAY / HIDE ELEMENTS
//
////////////////////////////////////////////////////////////////////////////////////////////////////

	class Annotation {
		constructor (
			markerElement,
		) {
			this.marker = markerElement;
			this.label = markerElement.nextSibling;
			this.dupeIndex = undefined;						//The index of the search term used to generate the label.textContent. Ensures markers are assigned unique labels.
			this.connections = [];							//Contains the Annotation.all index of any Annotations this one is connected to.
		}
		static all = [];																			//All marker/label elements on the map.
		static Init_All () {																		//Call this after the map has been populated.
			const elems_markers = Array.from(document.querySelectorAll('.marker-hl'));
			Annotation.all = elems_markers.map(m => new Annotation(m));
		}
		static SELECTED_;																			//The currently selected Annotation.

	//Select/Deselect the current Annotation.
		static Select (_markerElem) {
			Annotation.all.forEach((_a, _aIndex) => {
				if (_a.marker === _markerElem) {
					Annotation.SELECTED_ = _a;
					EventLog(`Selected marker ${_aIndex}.`);
					return;
				}
			});
			if (Annotation.SELECTED_ != undefined) {
				Annotation.SELECTED_.marker.classList.add("marker-hold-display");
				Annotation.SELECTED_.marker.parentNode.classList.add("screen-hold-display");
			}
		}
		static Deselect () {
			if (Annotation.SELECTED_ != undefined) {
				Annotation.SELECTED_.marker.classList.remove("marker-hold-display");
				Annotation.SELECTED_.marker.parentNode.classList.remove("screen-hold-display");
				Annotation.SELECTED_ = undefined;
			}
		}

	//ASSIGN SELECTED WITH A LABEL, A DUPEINDEX, AND CONNECTIONS
		static Assign (_locationMenuIndex) {
			Annotation.SELECTED_.BreakConnections();
			const labelText = LocationMenu_FullLabel(_locationMenuIndex);
		//Remove pre-existing instances of the label (unless generic)
			if (!labelText.startsWith("Generic - ")) {
				Annotation.all.forEach(_a => {
					if (_a.dupeIndex == _locationMenuIndex) _a.Unassign();
					elems_listItems[_locationMenuIndex].style.color = "grey";
				});
			}
		//Set label
			Annotation.SELECTED_.label.textContent = labelText;
			Annotation.SELECTED_.label.classList.add('label-shown');
			Annotation.SELECTED_.dupeIndex = _locationMenuIndex;
			Annotation.SELECTED_.MakeConnections();
			EventLog(`Assigning menuIndex ${_locationMenuIndex} [${labelText}] to selected marker.`);
		}

	//UNASSIGN A LABEL
		Unassign () {
			if (this.dupeIndex != undefined) {
				this.label.textContent = "";
				this.label.classList.remove('label-shown');
				elems_listItems[this.dupeIndex].style.color = "";
				this.dupeIndex = undefined;
				this.BreakConnections();
			}
		}

	//MAKE/BREAK CONNECTIONS
		RetrieveFullLocationName () {
			return LocationMenu_FullLabel(this.dupeIndex);
		}
		RetrieveSplitLocationName () {
			return LocationMenu_FullLabel(this.dupeIndex).split(" - ");
		}
		MakeConnections () {
		//Get location name and connector type from search list entry
		//If split name has 3 parts then it is a connector
			const splitName = this.RetrieveSplitLocationName();
			if (splitName.length == 3) {
				const thisIndex = Annotation.all.indexOf(this);
			//If location name matches and connector type is different, create a connection
				Annotation.all.forEach((_a, _aIndex) => {
					if (_a.dupeIndex == undefined) return;					//<== The dupeIndex is the index of the location menu list element that is assigned to the marker. If the marker has no label, it has no dupeIndex.
					const otherName = _a.RetrieveSplitLocationName();
					if (splitName[1] == otherName[1] && splitName[2] != otherName[2]) {
						this.connections.push(_aIndex);
						_a.connections.push(thisIndex);
					//Create connector element
						elems_connectors.push([this.marker, _a.marker, CreateLine(this.marker, _a.marker)]);
					}
				});
			}
		}
		BreakConnections () {
			if (this.connections.length == 0) return;
			const thisIndex = Annotation.all.indexOf(this);
		//Find the other Annotation using the index stored in this.connections
			this.connections.forEach(_c => {
				const other = Annotation.all[_c];
				const otherCon = other.connections;
				otherCon.splice(otherCon.indexOf(thisIndex), 1);
			//Destroy connector element
				for (let i = elems_connectors.length-1; i > -1; i--) {
					if (
						(elems_connectors[i][0] == this.marker && elems_connectors[i][1] == other.marker)
						|| (elems_connectors[i][0] == other.marker && elems_connectors[i][1] == this.marker)
					) {
						elems_connectors[i][2].remove();
						elems_connectors.splice(i, 1);
					}
				}
			});
		//Wipe this.connections
			this.connections.length = 0;
		}
	}
//
//	!!! DON'T FORGET TO INITIALIZE ANNOTATION.ALL !!!
//
	Annotation.Init_All();



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	EVENT LISTENERS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function ShowMenu() {
		elem_search_ctnr_outer.style.display = "block";
//		elem_search_input.focus();
	}
	function HideMenu() {
		elem_search_ctnr_outer.style.display = "none";
//		elem_search_input.value = "";
	}


//
//	Click Marker: Select marker and display search overlay
//
	document.querySelectorAll('.marker-hl').forEach(_markerElem => {
		_markerElem.addEventListener('click', e => {
			Annotation.Deselect();
			Annotation.Select(_markerElem);
			ShowMenu();
			e.stopPropagation();
		});
	});


//
//	Click off Marker: Deselect marker and hide search overlay
//
	elem_search_ctnr_outer.addEventListener('click', e => {
		Annotation.Deselect();
		HideMenu();
		e.stopPropagation();
	});


//
//	Keypress in Input field : Narrow down search
//
/*
	elem_search_input.addEventListener('keydown', () => {
		let thisSearch = elem_search_input.value.toLowerCase().split(" ");
	//Scan for matches
		for (let i = 0; i < searchTerms.length; i++) {
			let terms_found = 0;
			for (let j = 0; j < thisSearch.length; j++) {
				if (searchTerms[i].includes(thisSearch[j])) {
					terms_found++;
				}
			//Cull non-matches from display
				if (terms_found == thisSearch.length) {
					elem_search_list.childNodes[i].style.display = "block";
				} else {
					elem_search_list.childNodes[i].style.display = "none";
				}
			}
		}
	});
*/


//
//	Click on List Item : Assign content to Label
//
//Iterate list items with index, add event listeners
	elems_listItems.forEach((_li, i) => {
		_li.addEventListener('click', ()=>{
			_li
			Annotation.Assign(i);
			Annotation.Deselect();
			HideMenu();
		});
	});
	elem_btn_clear.addEventListener('click', ()=>{
		Annotation.SELECTED_.Unassign();
		Annotation.Deselect();
		HideMenu();
		EventLog("Cleared.");
	});



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	UTILITY FUNCTIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function CreateLine(_from, _to) {
		const pt1 = [
			StringToInt(_from.parentElement.style.left) + StringToInt(_from.style.left),
			StringToInt(_from.parentElement.style.top) + StringToInt(_from.style.top)
		];
		const global_from = ReturnGlobalOffsets(_from);
		const global_to = ReturnGlobalOffsets(_to);
		const diff = [global_to[0] - global_from[0], global_to[1] - global_from[1]];
		const pt2 = [
			pt1[0] + diff[0],
			pt1[1] + diff[1]
		];
		//AppLog(pt1, pt2);

	//Draw right-angled triangle between two markers
		let a = pt2[0]-pt1[0], b = pt2[1]-pt1[1];
		let c = Math.sqrt(a*a + b*b);				//<== Hypotenuse
		//let C = 90;								//<== Right-angle
		let B = Math.asin(b/c);						//<== Desired angle
		B *= 180/Math.PI;							//<== Convert to degrees
		//AppLog(B);

	//Somehow convert it into rotation
		let dir = [Math.sign(a), Math.sign(b)];
		//AppLog(dir);
		let rotation = (
			(dir[0]*-90)							//<== Clockwise/anti-clockwise 90deg according to x-direction
			+(dir[0]*B)
		);
		//AppLog(rotation);

	//Create line element and transform it
		let line = NewElement("div", "", ["line"]);
		line.style.top = `${pt1[1]}px`;
		line.style.left = `${pt1[0]}px`;
		line.style.height = `${c}px`;
		line.style.transform = `rotate(${rotation}deg)`;
		line.style.transformOrigin = "50% 0";
		//line.style.backgroundColor = `rgb(${DieRoll(0,192)},${DieRoll(192,255)},${DieRoll(160,224)})`;
		_from.parentElement.parentElement.appendChild(line);			//<== Should append to the map element; required so that the zIndex is within the same context stacking as the labels and markers.
		return line;
	}

	function DieRoll (d_min, d_max) {
		d_max = Math.floor(d_max) + 1;									//<== Add 1 to max because (Math.random()*max) will always return < max.
		d_min = Math.floor(d_min);										//	This is because the upper bound of Math.random is =EX=clusive.
		return (Math.floor(Math.random() * (d_max - d_min)) + d_min);	//I.e. if Math.floor(Math.random()*range) === 0 function returns min. 
	}

	function StringToInt (_str) {
		_str.replace(/\D/g,'');
		return parseInt(_str);
	}

	function ReturnOffsets(_elem) {
		return [
			StringToInt(`${_elem.style.left}`),						//<== For this to work fully requires that the map elements (ALL elements) have inline top and left styles.
			StringToInt(`${_elem.style.top}`)
		];
	}

	function ReturnGlobalOffsets(_elem) {
		let globalOffsetX = 0;
		let globalOffsetY = 0;
		while(_elem != document.querySelector('body')) {
			let x = StringToInt(_elem.style.left);					//<== For this to work fully requires that the map elements (ALL elements) have inline top and left styles.
			let y = StringToInt(_elem.style.top);
			//AppLog(`(${x}, ${y})`);
			if (!isNaN(x)) globalOffsetX += x;
			if (!isNaN(y)) globalOffsetY += y;
			_elem = _elem.parentNode;
		}
		return [globalOffsetX, globalOffsetY];
	}
