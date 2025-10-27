////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  SELECT / DESELECT MARKERS
//	DISPLAY / HIDE ELEMENTS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*	We've managed to write this whole script without referring back to the Location arrays constructed earlier, ensuring modularity.
*/

	const elems_searchOverlays = document.querySelectorAll('.map-searchOverlay');			//Will be displayed when a marker is selected.
	const elem_search_ctnr = document.getElementById('search');								//Will be displayed when a marker is selected.
	const elem_search_input = elem_search_ctnr.querySelector('input');						//Will be displayed when a marker is selected and have its own event listener so the user can input a search.
	const elem_search_list = elem_search_ctnr.querySelector('ul');							//Will be displayed when a marker is selected and modified by the search input. 
																							//Actually nearly all the references to this call .childNodes so I can probably replace it with elems_listItems.
	const elems_listItems = elem_search_list.querySelectorAll('li');						//Will be displayed when a marker is selected (filtered by search input), and each have its own event listener so the user can assign a marker with a label.
	const searchTerms = Array.from(elems_listItems, _li => _li.textContent.toLowerCase());	//A case-insensitive list of applicable terms to be matched by the search input.

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
		static Init_All () {																		//Call this after the map haas been populated.
			const elems_markers = Array.from(document.querySelectorAll('.marker-hl'));
			Annotation.all = elems_markers.map(m => new Annotation(m));
		}
		static SELECTED_;																			//The currently selected Annotation.

	//Select/Deselect the current Annotation.
		static Select (_markerElem) {
			Annotation.SELECTED_ = Annotation.all.find(_a => _a.marker === _markerElem);
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
		static Assign (_searchListItem, _index) {
			Annotation.SELECTED_.BreakConnections();
		//Remove pre-existing instances of the label (unless generic)
			if (!_searchListItem.textContent.startsWith("Generic - ")) {
				Annotation.all.forEach(_a => {
					if (_a.dupeIndex == _index) _a.Unassign();
				});
			}
		//Display a truncated name from the search list, and display the label
			const _text = _searchListItem.textContent;
			const displayText = _text.slice(_text.indexOf("-")+2, _text.length);
			Annotation.SELECTED_.label.textContent = displayText;
			Annotation.SELECTED_.label.classList.add('label-shown');
			Annotation.SELECTED_.dupeIndex = _index;
			Annotation.SELECTED_.MakeConnections();
		}

	//UNASSIGN A LABEL
		Unassign () {
			this.label.textContent = "";
			this.label.classList.remove('label-shown');
			this.dupeIndex = undefined;
			this.BreakConnections();
		}

	//MAKE/BREAK CONNECTIONS
		RetrieveFullLocationName () {
			return elems_listItems[this.dupeIndex].textContent;
		}
		RetrieveSplitLocationName () {
			if (this.dupeIndex == undefined) return undefined;
			return elems_listItems[this.dupeIndex].textContent.split(" - ");
		}
		MakeConnections () {
		//Get location name and connector type from search list entry
		//If name length is < 3 then there is no connector
			const splitName = this.RetrieveSplitLocationName();
			if (splitName.length == 3) {
				const thisIndex = Annotation.all.indexOf(this);
			//If location name matches and connector type is different, create a connection
				Annotation.all.forEach((_a, _aIndex) => {
					const otherName = _a.RetrieveSplitLocationName();
					if (otherName == undefined) return;										//<== Yes, return (not continue) because it's a function inside a loop.
					if (splitName[1] == otherName[1] && splitName[2] != otherName[2]) {
						this.connections.push(_aIndex);
						_a.connections.push(thisIndex);
					//Create connector element
						elems_connectors.push([this.marker, _a.marker, CreateLine(_a.marker, this.marker)]);
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



	const elems_connectors = [];



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	EVENT LISTENERS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function DisplaySearchOverlay(_x, _y) {
		elems_searchOverlays.forEach(_elem => {
			_elem.style.display = "block";
		});
		elem_search_ctnr.style.display = "block";
		elem_search_ctnr.style.left = `${_x}px`;
		elem_search_ctnr.style.top = `${_y}px`
		elem_search_input.focus();
	}
	function HideSearchOverlay() {
		elems_searchOverlays.forEach(_elem => {
			_elem.style.display = "none";
		});
		elem_search_ctnr.style.display = "none";
		elem_search_input.value = "";
		for (let i = 0; i < elem_search_list.childNodes.length; i++) {
			elem_search_list.childNodes[i].style.display = "block";
		}
	}


//
//	Click Marker: Select marker and display search overlay
//
	document.querySelectorAll('.marker-hl').forEach(_markerElem => {
		_markerElem.addEventListener('click', ()=> {
			Annotation.Deselect();
		//Since the marker offset is relative, add the grid element position to get the true position
			let x = StringToInt(_markerElem.style.left) + StringToInt(_markerElem.parentElement.style.left);
			let y = StringToInt(_markerElem.style.top) + StringToInt(_markerElem.parentElement.style.top);
			Annotation.Select(_markerElem);
			DisplaySearchOverlay(x,y);
		});
	});


//
//	Click off Marker: Deselect marker and hide search overlay
//
	elems_searchOverlays.forEach(_elem => {
		_elem.addEventListener('click', ()=>{
			Annotation.Deselect();
			HideSearchOverlay();
		});
	});
	document.querySelectorAll('.gridElement-border').forEach(_gridElem => {
		_gridElem.addEventListener('click', ()=>{
			Annotation.Deselect();
			HideSearchOverlay();
		});
	});


//
//	Keypress in Input field : Narrow down search
//
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


//
//	Click on List Item : Assign content to Label
//

//Iterate list items with index, add event listeners
	elems_listItems.forEach((_li, i) => {
		_li.addEventListener('click', ()=>{
			Annotation.Assign(_li, i);
			Annotation.Deselect();
			HideSearchOverlay();
		});
	});



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	UTILITY FUNCTIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
	function CreateLine(_from, _to) {
		let pt1 = ReturnGlobalOffsets(_from);
		let pt2 = ReturnGlobalOffsets(_to);
		//console.log(pt1);
		//console.log(pt2);

	//Draw right-angled triangle between two markers
		let a = pt2[0]-pt1[0], b = pt2[1]-pt1[1];
		let c = Math.sqrt(a*a + b*b);				//<== Hypotenuse
		//let C = 90;								//<== Right-angle
		let B = Math.asin(b/c);						//<== Desired angle
		B *= 180/Math.PI;							//<== Convert to degrees
		//console.log(B);

	//Somehow convert it into rotation
		let dir = [Math.sign(a), Math.sign(b)];
		//console.log(dir);
		let rotation = (
			(dir[0]*-90)							//<== Clockwise/anti-clockwise 90deg according to x-direction
			+(dir[0]*B)
		);
		//console.log(rotation);

	//Create line element and transform it
		let line = NewElement("div", ["line"]);
		line.style.top = `${pt1[1]}px`;
		line.style.left = `${pt1[0]}px`;
		line.style.height = `${c}px`;
		line.style.transform = `rotate(${rotation}deg)`;
		line.style.transformOrigin = "50% 0";
		line.style.backgroundColor = `rgb(${DieRoll(0,192)},${DieRoll(192,255)},${DieRoll(160,224)})`;
		document.querySelector('body').appendChild(line);
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

	function ReturnGlobalOffsets(_elem) {
		let globalOffsetX = 0;
		let globalOffsetY = 0;
		while(_elem != document.querySelector('body')) {
			let x = StringToInt(`${_elem.style.left}`);					//<== For this to work fully requires that the map elements (ALL elements) have inline top and left styles.
			let y = StringToInt(`${_elem.style.top}`);
			//console.log(x);
			//console.log(y);
			if (!isNaN(x)) globalOffsetX += x;
			if (!isNaN(y)) globalOffsetY += y;
			_elem = _elem.parentNode;
		}
		return [globalOffsetX, globalOffsetY];
	}