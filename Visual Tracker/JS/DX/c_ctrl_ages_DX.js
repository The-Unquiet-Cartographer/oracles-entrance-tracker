//MAP ELEMENTS
	const
		elem_map_labrynna_past = document.getElementById('map-labrynna-past-ctnr'),
    	elem_map_labrynna_present = document.getElementById('map-labrynna-present-ctnr'),
		elem_map_greatMoblinsKeep = document.getElementById('map-greatMoblinsKeep-ctnr'),
		elem_map_nuunHighlands = document.getElementById('map-nuunHighlands-ctnr'),
		elem_map_underwater_past = document.getElementById('map-zoraseas-past-ctnr'),
    	elem_map_underwater_present = document.getElementById('map-zoraseas-present-ctnr')
	;


//LABRYNNA PAST LOCATIONS
	const locations_labrynna_past = Locations_ConcatGroups(
		locs_ambisPalace,
		locs_blackTower_past,
		locs_coastOfNoReturn,
		locs_crescentIsland_past,
		locs_dekuForest,
		locs_eyeglassIsland_past,
		locs_lynnaVillage,
		locs_restorationWall,
		locs_rollingRidge_past,
		locs_rollingRidgeBase_past,
		locs_seaOfNoReturn,
		locs_southShore_past,
		locs_symmetryVillage,
		locs_talusPeaks_past,
		locs_zoraSeas_past
	);
	Locations_RemoveExemptions (locations_labrynna_past, exemptions_labrynna_past);


//LABRYNNA PRESENT LOCATIONS
	const commonOrigin_labrynna_present = {x:2240, y:0};

	const locations_labrynna_present = Locations_ConcatGroups_DX(
		elem_map_labrynna_present,
		commonOrigin_labrynna_present,
		locs_blackTower_present,
		locs_crescentIsland_present,
		locs_eyeglassIsland_present,
		locs_fairiesWoods,
		locs_forestOfTime,
		locs_lynnaCity,
		locs_rollingRidge_present,
		locs_rollingRidgeBase_present,
		locs_symmetryCity,
		locs_talusPeaks_present,
		locs_yollGraveyard,
		locs_zoraSeas_present,
		locs_zoraVillage_present
	);
	const locations_greatMoblinsKeep = Locations_ConcatGroups_DX(
		elem_map_greatMoblinsKeep,
		commonOrigin_labrynna_present,	
		locs_greatMoblinsKeep,
	);
	const locations_greatMoblinsKeep_destroyed = Locations_ConcatGroups_DX(
		elem_map_greatMoblinsKeep,
		commonOrigin_labrynna_present,	
		locs_greatMoblinsKeep_destroyed,
	);
	const locations_nuunHighlands = Locations_ConcatGroups_DX(
		elem_map_nuunHighlands,
		commonOrigin_labrynna_present,
		locs_nuunHighlands,
		locs_nuunHighlands_dimitri
	);
	Locations_RemoveExemptions (locations_labrynna_present, exemptions_labrynna_present);


//UNDERWATER PAST LOCATIONS 
	const commonOrigin_underwater_past = {x:0, y:1792}
	
	const locations_underwater_past = Locations_ConcatGroups_DX(
		elem_map_underwater_past,
		commonOrigin_underwater_past,
		locs_seaOfNoReturn_underwater,
		locs_seaOfStorms_underwater_past,
		locs_zoraSeas_underwater_past,
		locs_zoraVillage_underwater_past,
	);


//UNDERWATER PRESENT LOCATIONS 
	const locations_underwater_present = Locations_ConcatGroups(
		locs_crescentStrait_underwater_present,
		locs_seaOfStorms_underwater_present,
		locs_zoraSeas_underwater_present,
		locs_zoraVillage_underwater_present,
	);
	Locations_RemoveExemptions (locations_underwater_present, exemptions_underwater_present);


//LOCATION MARKERS
	MapElement_AddLocationMarkers(elem_map_labrynna_past, locations_labrynna_past);
	MapElement_AddLocationMarkers(elem_map_labrynna_present, locations_labrynna_present);
	MapElement_AddLocationMarkers(elem_map_greatMoblinsKeep, locations_greatMoblinsKeep);
	MapElement_AddLocationMarkers(elem_map_nuunHighlands, locations_nuunHighlands);
	MapElement_AddLocationMarkers(elem_map_labrynna_present, locations_labrynna_present);
	MapElement_AddLocationMarkers(elem_map_underwater_past, locations_underwater_past);
	MapElement_AddLocationMarkers(elem_map_underwater_present, locations_underwater_present);

	
//SEARCH TERMS
	AddSearchTerms(locs_generic);
	AddSearchTerms(locations_labrynna_past);
	AddSearchTerms(locations_labrynna_present);
	AddSearchTerms(locations_greatMoblinsKeep);
	AddSearchTerms(locations_greatMoblinsKeep_destroyed);
	AddSearchTerms(locations_nuunHighlands);
	AddSearchTerms(locations_underwater_past);
	AddSearchTerms(locations_underwater_present);