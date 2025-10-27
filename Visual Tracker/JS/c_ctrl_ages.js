//LABRYNNA PAST LOCATIONS
	const locations_labrynna_past = Locations_ConcatGroups(
		locs_ambisPalace,
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
	const locations_labrynna_present = Locations_ConcatGroups(
		locs_crescentIsland_present,
		locs_eyeglassIsland_present,
		locs_fairiesWoods,
		locs_forestOfTime,
		locs_lynnaCity,
		locs_nuunHighlands,
		locs_rollingRidge_present,
		locs_rollingRidgeBase_present,
		locs_symmetryCity,
		locs_talusPeaks_present,
		locs_yollGraveyard,
		locs_zoraSeas_present,
		locs_zoraVillage_present,

		locs_nuunHighlands_dimitri,
		locs_nuunHighlands_moosh,
		locs_nuunHighlands_ricky,
	);
	Locations_RemoveExemptions (locations_labrynna_present, exemptions_labrynna_present);

//UNDERWATER PAST LOCATIONS 
	const locations_underwater_past1 = Locations_ConcatGroups(
		locs_seaOfNoReturn_underwater,
	);
	//Locations_RemoveExemptions (locations_zoraSeas_past1, []);
	const locations_underwater_past2 = Locations_ConcatGroups(
		locs_seaOfStorms_underwater_past,
		locs_zoraSeas_underwater_past,
		locs_zoraVillage_underwater_past,
	);
	//Locations_RemoveExemptions (locations_zoraSeas_past2, []);

//UNDERWATER PRESENT LOCATIONS 
	const locations_underwater_present = Locations_ConcatGroups(
		locs_crescentStrait_underwater_present,
		locs_seaOfStorms_underwater_present,
		locs_zoraSeas_underwater_present,
		locs_zoraVillage_underwater_present,
	);
	Locations_RemoveExemptions (locations_underwater_present, exemptions_underwater_present);



//MAP ELEMENTS
	const
		elem_map_labrynna_past = document.getElementById('map-labrynna-past-ctnr'),
    	elem_map_labrynna_present = document.getElementById('map-labrynna-present-ctnr'),
		elem_map_underwater_past1 = document.getElementById('map-zoraseas-past1-ctnr'),
		elem_map_underwater_past2 = document.getElementById('map-zoraseas-past2-ctnr'),
    	elem_map_underwater_present = document.getElementById('map-zoraseas-present-ctnr')
	;
	const
		gridElements_labrynna_x = 14, gridElements_labrynna_y = 14,
		gridElements_underwater_x = 14, gridElements_underwater_y = 5
	;
	MapElement_AddLocationMarkers(
		elem_map_labrynna_past,
		gridElements_labrynna_x,
		gridElements_labrynna_y,
		locations_labrynna_past
	);
	MapElement_AddLocationMarkers(
		elem_map_labrynna_present,
		gridElements_labrynna_x,
		gridElements_labrynna_y,
		locations_labrynna_present
	);
	MapElement_AddLocationMarkers(
		elem_map_underwater_past1,
		6,
		1,
		locations_underwater_past1
	);
	MapElement_AddLocationMarkers(
		elem_map_underwater_past2,
		gridElements_underwater_x,
		gridElements_underwater_y,
		locations_underwater_past2
	);
	MapElement_AddLocationMarkers(
		elem_map_underwater_present,
		gridElements_underwater_x,
		gridElements_underwater_y,
		locations_underwater_present
	);

//SEARCH TERMS
	AddSearchTerms(locs_generic);
	AddSearchTerms(locations_labrynna_past);
	AddSearchTerms(locations_underwater_past1);
	AddSearchTerms(locations_underwater_past2);
	AddSearchTerms(locations_labrynna_present);
	AddSearchTerms(locations_underwater_present);
