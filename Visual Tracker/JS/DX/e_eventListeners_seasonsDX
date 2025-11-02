function AddEventListener_ChangeSeasons (mapElement) {
	mapElement.querySelectorAll('.gridElement-ctnr').forEach(_gridElem => {
		_gridElem.addEventListener('click', () => {
			console.log("clicked");
			ChangeSeasons(mapElement);
		});
	});
}

function ChangeSeasons (mapElement) {
	const imgElement = mapElement.querySelector('img');
	const ind1 = imgElement.src.lastIndexOf('_');
	const ind2 = imgElement.src.lastIndexOf('.');
	const season = imgElement.src.slice(ind1+1, ind2);
	switch (season) {
		case "spring":
			imgElement.src = imgElement.src.slice(0, ind1)+"_summer.png";
			break;
		case "summer":
			imgElement.src = imgElement.src.slice(0, ind1)+"_fall.png";
			break;
		case "fall":
			imgElement.src = imgElement.src.slice(0, ind1)+"_winter.png";
			break;
		case "winter":
			imgElement.src = imgElement.src.slice(0, ind1)+"_spring.png";
			break;
	}
}

AddEventListener_ChangeSeasons(elem_map_ancientRuins);

/*
elem_map_northernPeak

elem_map_templeRemains

elem_map_goronMountain

elem_map_mtCucco

elem_map_tarmRuins

elem_map_northernPeakFoothills

elem_map_holodrumPlain

elem_map_natzuRegion

elem_map_greatMoblinsKeep

elem_map_sunkenCity

elem_map_spoolSwamp

elem_map_northHoron

elem_map_easternSuburbs

elem_map_woodOfWinter

elem_map_graveyard

elem_map_westernCoast

elem_map_horonVillage

elem_map_makuTree

elem_map_easternCoast

elem_map_samasaDesert
*/