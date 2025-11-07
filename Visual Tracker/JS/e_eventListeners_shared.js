////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  SEARCH MENU ELEMENTS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	const elem_search_ctnr_outer = document.getElementById('search-ctnr-outer');		//Will be displayed when a marker is selected.
	const elem_search_ctnr_inner = document.getElementById('search-ctnr-outer');		//Will be displayed when a marker is selected.
	const elem_btn_clear = elem_search_ctnr_inner.querySelector('#btn-clear');			//Will allow the user to clear the annotation assigned to the selected marker.
	const elem_search_input = elem_search_ctnr_inner.querySelector('#search-input');	//Will allow the user to input search terms and narrow down the list of locations.

//LIST ITEMS
	const elems_listItems = [];															//Each list element will be given an event listener so we can label the entrances.
	const searchTerms = [];
//Record each list element and create a corresponding search term.
//Search terms will be case-insensitive and include the full {Area - Name - Connector type} for each location.
	for (const l of elem_search_ctnr_outer.querySelectorAll('.location-list')) {
		for (const li of l.querySelectorAll('li')) {
			elems_listItems.push(li);
		//Create search term
			const areaName = l.querySelector('h3').textContent;
			searchTerms.push((`${areaName} - ${li.textContent}`).toLowerCase());
		}
	}
	function RetrieveLabelText (_locationMenuIndex) {
		return (
			Capitalise(searchTerms[_locationMenuIndex].split(" - ")[0])
			+" - "
			+elems_listItems[_locationMenuIndex].textContent
		);
	}



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
			this.connectedAnnotationIndices = [];			//Contains the Annotation.all index of any Annotations this one is connected to.
		}

	//Static class components
		static all = [];																	//All marker/label elements on the map.
		static Init_All () {																//Call this after the map has been populated.
			const elems_markers = Array.from(document.querySelectorAll('.marker-hl'));
			Annotation.all = elems_markers.map(m => new Annotation(m));
		}
		static SELECTED_;																	//The currently selected Annotation.
		static connections = [];															//Will contain an array of objects formatted as {source, destination, lineElement}

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
			const labelText = RetrieveLabelText(_locationMenuIndex);
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
			return RetrieveLabelText(this.dupeIndex);
		}
		RetrieveSplitLocationName () {
			return RetrieveLabelText(this.dupeIndex).split(" - ");
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
						this.connectedAnnotationIndices.push(_aIndex);
						_a.connectedAnnotationIndices.push(thisIndex);
					//Create connector element
						Annotation.connections.push({
							source: this.marker,
							destination: _a.marker,
							lineElement: CreateLine(this.marker, _a.marker)
						});
					}
				});
			}
		}
		BreakConnections () {
			if (this.connectedAnnotationIndices.length == 0) return;
			const thisIndex = Annotation.all.indexOf(this);
		//Find the other Annotation using the index stored in this.connectedAnnotationIndices
			this.connectedAnnotationIndices.forEach(_ci => {
				const other = Annotation.all[_ci];
				const otherCon = other.connectedAnnotationIndices;
				otherCon.splice(otherCon.indexOf(thisIndex), 1);
			//Destroy connector element
				for (let j = Annotation.connections.length-1; j > -1; j--) {
					if (
						(Annotation.connections[j].source == this.marker && Annotation.connections[j].destination == other.marker)
						|| (Annotation.connections[j].source == other.marker && Annotation.connections[j].destination == this.marker)
					) {
						Annotation.connections[j].lineElement.remove();
						Annotation.connections.splice(j, 1);
					}
				}
			});
		//Wipe this.connectedAnnotationIndices
			this.connectedAnnotationIndices.length = 0;
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
		elem_search_input.focus();
	}
	function HideMenu() {
		elem_search_ctnr_outer.style.display = "none";
		elem_search_input.value = "";
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
		if (e.target != e.currentTarget) return;				//<== This is necessary because for whatever dratted reason clicking on the inner element fires this event and there's no explanation for it that makes sense.
		Annotation.Deselect();
		HideMenu();
		e.stopPropagation();
	});
	

//
//	Keypress in Input field : Narrow down search
//
	elem_search_input.addEventListener('input', () => {
	//Restore everything is search is empty
		if (elem_search_input.value.length === 0) {
			for (const l of elem_search_ctnr_outer.querySelectorAll('.location-list')) {
				l.style.display = "block";
				for (const li of l.querySelectorAll('li')) {
					li.style.display = "block";
				}
			}
			return;
		}
	//Scan for matches
		let thisSearch = elem_search_input.value.toLowerCase().split(" ");
		for (let i = 0; i < searchTerms.length; i++) {
			let terms_found = 0;
			for (let j = 0; j < thisSearch.length; j++) {
				if (searchTerms[i].includes(thisSearch[j])) {
					terms_found++;
				}
			//Cull non-matches from display
				if (terms_found == thisSearch.length) {
					elems_listItems[i].style.display = "block";
				} else {
					elems_listItems[i].style.display = "none";
				}
			}
		}
	//Hide section headers (actually just hides entire section because might as well)
		for (const l of elem_search_ctnr_outer.querySelectorAll('.location-list')) {
			let hideHeader = true;
			for (const li of l.querySelectorAll('li')) {
				if (li.style.display == "block") {
					hideHeader = false;
					break;
				}
			}
			if (hideHeader) l.style.display = "none";
			else l.style.display = "block";
		}
	});


//
//	Click on List Item : Assign content to Label
//
//Iterate list items with index, add event listeners
	elems_listItems.forEach((_li, i) => {
		_li.addEventListener('click', e => {
			Annotation.Assign(i);
			Annotation.Deselect();
			HideMenu();
			e.stopPropagation();
		});
	});
	elem_btn_clear.addEventListener('click', e => {
		Annotation.SELECTED_.Unassign();
		Annotation.Deselect();
		HideMenu();
		EventLog("Cleared.");
		e.stopPropagation();
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

	function Capitalise(str) {
		return str.split(' ').map(word => {
			const match = word.match(/[a-zA-Z]/);
			if (!match) return word;
			const index = match.index;
			return (
				word.slice(0, index) +
				word.charAt(index).toUpperCase() +
				word.slice(index + 1)
			);
		}).join(' ');
	}
