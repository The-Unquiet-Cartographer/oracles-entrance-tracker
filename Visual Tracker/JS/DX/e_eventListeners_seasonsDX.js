function AddEventListener_ChangeSeasons (mapElement) {
	mapElement.querySelectorAll('.gridElement-ctnr').forEach(_gridElem => {
		_gridElem.addEventListener('click', () => {
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

/*
function ChangeNorthernPeak
function ChangeNatzuRegion
funciton ChangeMoblinsKeep

//Change the AddEventListener_ChangeSeasons function to accept a callback, and rename it.
*/

AddEventListener_ChangeSeasons(elem_map_ancientRuins);
//AddEventListener_ChangeSeasons(elem_map_northernPeak);
AddEventListener_ChangeSeasons(elem_map_templeRemains);
//AddEventListener_ChangeSeasons(elem_map_goronMountain);
AddEventListener_ChangeSeasons(elem_map_mtCucco);
AddEventListener_ChangeSeasons(elem_map_tarmRuins);
//AddEventListener_ChangeSeasons(elem_map_northernPeakFoothills);
AddEventListener_ChangeSeasons(elem_map_holodrumPlain);
//AddEventListener_ChangeSeasons(elem_map_natzuRegion);
//AddEventListener_ChangeSeasons(elem_map_greatMoblinsKeep);
AddEventListener_ChangeSeasons(elem_map_sunkenCity);
AddEventListener_ChangeSeasons(elem_map_spoolSwamp);
AddEventListener_ChangeSeasons(elem_map_northHoron);
AddEventListener_ChangeSeasons(elem_map_easternSuburbs);
AddEventListener_ChangeSeasons(elem_map_woodsOfWinter);
AddEventListener_ChangeSeasons(elem_map_graveyard);
AddEventListener_ChangeSeasons(elem_map_westernCoast);
AddEventListener_ChangeSeasons(elem_map_horonVillage);
//AddEventListener_ChangeSeasons(elem_map_makuTree);
//AddEventListener_ChangeSeasons(elem_map_easternCoast);
//AddEventListener_ChangeSeasons(elem_map_samasaDesert);