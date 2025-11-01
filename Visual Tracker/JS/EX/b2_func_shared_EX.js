////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	GROUP LOCATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*	In our databases we are grouping locations by area.
*	However, we want to group these into a single collection so they can be utilised by the program.
*/
	Locations_ConcatGroups = function (mapElement, ...locationGroups) {
		if (mapElement == null) {
			console.log("MapElement is null, so the querySelector has probably been mis-spelled...");
			return [];
		}
		else console.log("Concatenating location groups for map element:", mapElement);
		const concatenatedLocations = [];
		const mapElement_gridOffset_x = Math.floor(parseInt(mapElement.style.left) / gridElement_width_pixels);
		const mapElement_gridOffset_y = Math.floor(parseInt(mapElement.style.top) / gridElement_height_pixels);
		for (const g of locationGroups) {
			for (const l of g) {
				concatenatedLocations.push(new Location (
					l.area, l.name, l.type,
					l.gridRef_x - mapElement_gridOffset_x,
					l.gridRef_y - mapElement_gridOffset_y,
					l.tilePos_x, l.tilePos_y,
					l.labelPos
				));
			}
		}
		return concatenatedLocations;
	}


