function ChangeNuunHighlands () {
	const imgData = GetImgSrcData(elem_map_nuunHighlands);
	switch (imgData.state) {
		case "ricky":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_dimitri.png";
			MoveMarkerElement(locs_nuunHighlands_ricky, "Chest Cave", locs_nuunHighlands_dimitri, elem_map_nuunHighlands, commonOrigin_labrynna_present);
			break;
		case "dimitri":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_moosh.png";
			MoveMarkerElement(locs_nuunHighlands_dimitri, "Chest Cave", locs_nuunHighlands_moosh, elem_map_nuunHighlands, commonOrigin_labrynna_present);
			break;
		case "moosh":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_ricky.png";
			MoveMarkerElement(locs_nuunHighlands_moosh, "Chest Cave", locs_nuunHighlands_ricky, elem_map_nuunHighlands, commonOrigin_labrynna_present);
			break;
	}
}

function ChangeMoblinsKeep () {
	const imgData = GetImgSrcData(elem_map_greatMoblinsKeep);
	switch (imgData.state) {
		case "default":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_ruined.png";
			MapElement_ReplaceMarkers(elem_map_greatMoblinsKeep, commonOrigin_labrynna_present, locations_greatMoblinsKeep_destroyed, true);
			break;
		case "ruined":
			imgData.img.src = imgData.img.src.slice(0, imgData.src_stateStart)+"_default.png";
			MapElement_ReplaceMarkers(elem_map_greatMoblinsKeep, commonOrigin_labrynna_present, locations_greatMoblinsKeep, true);
			break;
	}
}



AddRegionChangeEventListener(elem_map_greatMoblinsKeep, ChangeMoblinsKeep);
AddRegionChangeEventListener(elem_map_nuunHighlands, ChangeNuunHighlands);