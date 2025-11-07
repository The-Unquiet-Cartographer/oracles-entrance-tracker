function AddRegionChangeEventListener (mapElement, _Callback) {
	if (_Callback.length > 0) {
		mapElement.querySelectorAll('.gridElement-ctnr').forEach(_gridElem => {
			_gridElem.addEventListener('click', ()=>{_Callback(mapElement)});
		});
	}
	else {
		mapElement.querySelectorAll('.gridElement-ctnr').forEach(_gridElem => {
			_gridElem.addEventListener('click', ()=>{_Callback()});
		});
	}
}

function ChangeSeasons (_mapElement) {
	const imgData = GetImgSrcData(_mapElement);
	switch (imgData.state) {
		case "spring": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_summer.png"; break;
		case "summer": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_fall.png"; break;
		case "fall": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_winter.png"; break;
		case "winter": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_spring.png"; break;
		case "default": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_spring.png"; break;
	}
}

function ChangeNatzuRegion () {
	function FindGridElement (loc) {
		return (
			[...elem_map_natzuRegion.querySelectorAll('.gridElement-ctnr')].find(grid => {
				const actualGridRef = GetModdedGridReference(loc, elem_map_natzuRegion, {x:0, y:0});
				return (
					grid.style.left == `${actualGridRef.x*gridElement_width_pixels}px`
					&& grid.style.top == `${actualGridRef.y*gridElement_height_pixels}px`
				);
			})
		);
	}
	function FindMarkerElement (loc, _gridElement) {
		return (
			[..._gridElement.querySelectorAll('.marker-hl')].find(marker => {
				return (
					loc.tilePos_x == Math.floor((parseInt(marker.style.left)-markerOffset_pixels) / tile_size_pixels)
					&& loc.tilePos_y == Math.floor((parseInt(marker.style.top)-markerOffset_pixels) / tile_size_pixels)
				);
			})
		);
	}
	function MoveMarkerElement (_thisLocationSet, locationName, _nextLocationSet) {
		const locInThisSet = _thisLocationSet.find(loc => loc.name == locationName);
		const markerElem = FindMarkerElement(locInThisSet, FindGridElement(locInThisSet));
		const labelElem = markerElem.nextSibling;
		const locInNextSet = _nextLocationSet.find(loc => loc.name == locationName);
		const nextGridElement = FindGridElement(locInNextSet);
		nextGridElement.appendChild(markerElem);
		nextGridElement.appendChild(labelElem);
		SetMarkerPosition(locInNextSet, markerElem);
		SetLabelPosition(locInNextSet, labelElem);
		Annotation.connections.forEach(_a => {
			if (_a.source == markerElem || _a.destination == markerElem) {
				_a.lineElement.remove();
				_a.lineElement = CreateLine(_a.source, _a.destination);
			}
		});
	}
	const imgData = GetImgSrcData(elem_map_natzuRegion);
	switch (imgData.state) {
		case "praire":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_river.png";
			MoveMarkerElement(locs_natzuRegion_ricky, "Great Fairy", locs_natzuRegion_dimitri);
			MoveMarkerElement(locs_natzuRegion_ricky, "Seed-Loving Scrub", locs_natzuRegion_dimitri);
			break;
		case "river":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_wasteland.png";
			MoveMarkerElement(locs_natzuRegion_dimitri, "Great Fairy", locs_natzuRegion_moosh);
			MoveMarkerElement(locs_natzuRegion_dimitri, "Seed-Loving Scrub", locs_natzuRegion_moosh);
			break;
		case "wasteland":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_praire.png";
			MoveMarkerElement(locs_natzuRegion_moosh, "Great Fairy", locs_natzuRegion_ricky);
			MoveMarkerElement(locs_natzuRegion_moosh, "Seed-Loving Scrub", locs_natzuRegion_ricky);
			break;
	}
}

function ChangeMoblinsKeep () {
	const imgData = GetImgSrcData(elem_map_greatMoblinsKeep);
	const imgElem_roof = elem_map_moblinsKeepRoof.querySelector('img');
	switch (imgData.state) {
		case "default":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_ruined.png";
			imgElem_roof.src = "/Visual Tracker/Images/Seasons/moblinsKeep_noRoof.png";
			break;
		case "ruined":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_default.png";
			imgElem_roof.src = "/Visual Tracker/Images/Seasons/moblinsKeep_roof.png";
			break;
	}
}

function ChangeTempleRemains () {
	const imgElement = elem_map_templeRemains.querySelector('img');
	const isDestroyed = imgElement.src.includes("destroyed") ? true : false;
	if (isDestroyed) imgElement.src = imgElement.src.replace("_destroyed", "");
	else imgElement.src = imgElement.src.replace("_", "_destroyed_");
}
function ChangeTempleRemains_8Way () {
	const imgData = GetImgSrcData(elem_map_templeRemains);
	switch (imgData.state) {
		case "spring": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_summer.png"; break;
		case "summer": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_fall.png"; break;
		case "fall": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_winter.png"; break;
		case "winter":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_spring.png";
			const isDestroyed = imgData.img.src.includes("destroyed") ? true : false;
			if (isDestroyed) imgData.img.src = imgData.img.src.replace("_destroyed", "");
			else imgData.img.src = imgData.img.src.replace("_", "_destroyed_");
		break;
	}
}

function ChangeNorthernPeak () {
	const imgData = GetImgSrcData(elem_map_northernPeak);
	switch (imgData.state) {
		case "default": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_ending.png"; break;
		case "ending": imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_default.png"; break;
	}
}

function GetImgSrcData (_mapElement) {
	const imgElement = _mapElement.querySelector('img');
	const src_stateStart = imgElement.src.lastIndexOf('_');
	const src_stateEnd = imgElement.src.lastIndexOf('.');
	return {
		img: imgElement,
		src_stateStart: src_stateStart,
		src_stateEnd: src_stateEnd,
		state: imgElement.src.slice(src_stateStart+1, src_stateEnd)
	};
}



AddRegionChangeEventListener(elem_map_ancientRuins, ChangeSeasons);
//AddRegionChangeEventListener(elem_map_templeRemains, ChangeSeasons);
AddRegionChangeEventListener(elem_map_mtCucco, ChangeSeasons);
AddRegionChangeEventListener(elem_map_tarmRuins, ChangeSeasons);
AddRegionChangeEventListener(elem_map_holodrumPlain, ChangeSeasons);
AddRegionChangeEventListener(elem_map_sunkenCity, ChangeSeasons);
AddRegionChangeEventListener(elem_map_spoolSwamp, ChangeSeasons);
AddRegionChangeEventListener(elem_map_northHoron, ChangeSeasons);
AddRegionChangeEventListener(elem_map_easternSuburbs, ChangeSeasons);
AddRegionChangeEventListener(elem_map_woodsOfWinter, ChangeSeasons);
AddRegionChangeEventListener(elem_map_graveyard, ChangeSeasons);
AddRegionChangeEventListener(elem_map_westernCoast, ChangeSeasons);
AddRegionChangeEventListener(elem_map_horonVillage, ChangeSeasons);

AddRegionChangeEventListener(elem_map_natzuRegion, ChangeNatzuRegion);
AddRegionChangeEventListener(elem_map_greatMoblinsKeep, ChangeMoblinsKeep);
AddRegionChangeEventListener(elem_map_templeRemains, ChangeTempleRemains_8Way);

/*
*	Northern Peak, Goron Mountain, Natzu Region, Great Moblin's Keep, Eastern Coast, & Samasa Desert have their seasons fixed by default.
*/