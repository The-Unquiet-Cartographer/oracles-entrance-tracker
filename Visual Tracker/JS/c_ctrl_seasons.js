//MAP ELEMENTS
	const
		elem_map_holodrum = document.getElementById('map-holodrum-ctnr'),
		elem_map_subrosia = document.getElementById('map-subrosia-ctnr')
	;

//HOLODRUM LOCATIONS
	const locations_holodrum = Locations_ConcatGroups(
		locs_ancientRuins,
		locs_easternSuburbs,
		locs_eyeglassLake,
		locs_goronMountain,
		locs_graveyard,
		locs_greatMoblinsKeep,
		locs_holodrumPlain,
		locs_horonVillage,
		locs_mtCucco,
		locs_natzuRegion,
		locs_northernPeak,
		locs_northHoron,
		locs_samasaDesert,
		locs_spoolSwamp,
		locs_sunkenCity,
		locs_tarmRuins,
		locs_templeRemains,
		locs_westernCoast,
		locs_woodsOfWinter,
	);
	Locations_RemoveExemptions(locations_holodrum, exemptions_holodrum);

//SUBROSIA LOCATIONS
	const locations_subrosia = Locations_ConcatGroups(
		locs_easternSubrosia,
		locs_subrosianVillage,
		locs_subrosianVolcanoes,
		locs_subrosianWilds,
		locs_templeOfSeasons
	);
	Locations_RemoveExemptions(locations_subrosia, exemptions_subrosia);

//LOCATION MARKERS
	MapElement_AddLocationMarkers(elem_map_holodrum, locations_holodrum);
	MapElement_AddLocationMarkers(elem_map_subrosia, locations_subrosia);

//SEARCH TERMS
	AddSearchTerms(locs_generic);
	AddSearchTerms(locations_holodrum);
	AddSearchTerms(locations_subrosia);