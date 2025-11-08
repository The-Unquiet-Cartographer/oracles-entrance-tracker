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
	const imgData = GetImgSrcData(elem_map_natzuRegion);
	switch (imgData.state) {
		case "praire":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_river.png";
			MoveMarkerElement(locs_natzuRegion_ricky, "Great Fairy", locs_natzuRegion_dimitri, elem_map_natzuRegion, commonOrigin_holodrum);
			MoveMarkerElement(locs_natzuRegion_ricky, "Seed-Loving Scrub", locs_natzuRegion_dimitri, elem_map_natzuRegion, commonOrigin_holodrum);
			break;
		case "river":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_wasteland.png";
			MoveMarkerElement(locs_natzuRegion_dimitri, "Great Fairy", locs_natzuRegion_moosh, elem_map_natzuRegion, commonOrigin_holodrum);
			MoveMarkerElement(locs_natzuRegion_dimitri, "Seed-Loving Scrub", locs_natzuRegion_moosh, elem_map_natzuRegion, commonOrigin_holodrum);
			break;
		case "wasteland":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_praire.png";
			MoveMarkerElement(locs_natzuRegion_moosh, "Great Fairy", locs_natzuRegion_ricky, elem_map_natzuRegion, commonOrigin_holodrum);
			MoveMarkerElement(locs_natzuRegion_moosh, "Seed-Loving Scrub", locs_natzuRegion_ricky, elem_map_natzuRegion, commonOrigin_holodrum);
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