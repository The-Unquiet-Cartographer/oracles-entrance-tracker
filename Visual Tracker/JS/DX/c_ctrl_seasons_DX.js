//MAP ELEMENTS
	const
		elem_map_ancientRuins = document.getElementById('map-ancientRuins-ctnr'),
		elem_map_northernPeak = document.getElementById('map-northernPeak-ctnr'),
		elem_map_templeRemains = document.getElementById('map-templeRemains-ctnr'),
		elem_map_goronMountain = document.getElementById('map-goronMountain-ctnr'),
		elem_map_mtCucco = document.getElementById('map-mtCucco-ctnr'),

		elem_map_tarmRuins = document.getElementById('map-tarmRuins-ctnr'),
		elem_map_northernPeakFoothills = document.getElementById('map-northernPeakFoothills-ctnr'),
		elem_map_holodrumPlain = document.getElementById('map-holodrumPlain-ctnr'),
		elem_map_natzuRegion = document.getElementById('map-natzuRegion-ctnr'),
		elem_map_greatMoblinsKeep = document.getElementById('map-greatMoblinsKeep-ctnr'),
		elem_map_moblinsKeepRoof = document.getElementById('map-moblinsKeepRoof-ctnr'),
		elem_map_sunkenCity = document.getElementById('map-sunkenCity-ctnr'),

		elem_map_spoolSwamp = document.getElementById('map-spoolSwamp-ctnr'),
		elem_map_northHoron = document.getElementById('map-northHoron-ctnr'),
		elem_map_easternSuburbs = document.getElementById('map-easternSuburbs-ctnr'),
		elem_map_woodsOfWinter = document.getElementById('map-woodsOfWinter-ctnr'),

		elem_map_graveyard = document.getElementById('map-graveyard-ctnr'),
		elem_map_westernCoast = document.getElementById('map-westernCoast-ctnr'),
		elem_map_horonVillage = document.getElementById('map-horonVillage-ctnr'),
		elem_map_makuTree = document.getElementById('map-makuTree-ctnr'),
		elem_map_easternCoast = document.getElementById('map-easternCoast-ctnr'),
		elem_map_samasaDesert = document.getElementById('map-samasaDesert-ctnr')

//		elem_map_subrosia = document.getElementById('map-subrosia-ctnr')
	;

//HOLODRUM LOCATIONS
	const locations_ancientRuins = Locations_ConcatGroups_DX(
		elem_map_ancientRuins,
		locs_ancientRuins
	);
	const locations_northernPeak = Locations_ConcatGroups_DX(
		elem_map_northernPeak,
		locs_northernPeak
	);
	const locations_templeRemains = Locations_ConcatGroups_DX(
		elem_map_templeRemains,
		locs_templeRemains
	);
	const locations_goronMountain = Locations_ConcatGroups_DX(
		elem_map_goronMountain,
		locs_goronMountain
	);
	const locations_mtCucco = Locations_ConcatGroups_DX(
		elem_map_mtCucco,
		locs_mtCucco
	);

	const locations_tarmRuins = Locations_ConcatGroups_DX(
		elem_map_tarmRuins,
		locs_tarmRuins
	);
	const locations_holodrumPlain = Locations_ConcatGroups_DX(
		elem_map_holodrumPlain,
		locs_holodrumPlain
	);
		const locations_natzuRegion = Locations_ConcatGroups_DX(
		elem_map_natzuRegion,
		locs_natzuRegion
	);
		const locations_greatMoblinsKeep = Locations_ConcatGroups_DX(
		elem_map_greatMoblinsKeep,
		locs_greatMoblinsKeep
	);
	const locations_sunkenCity = Locations_ConcatGroups_DX(
		elem_map_sunkenCity,
		locs_sunkenCity
	);

	const locations_spoolSwamp = Locations_ConcatGroups_DX(
		elem_map_spoolSwamp,
		locs_spoolSwamp
	);
	const locations_northHoron = Locations_ConcatGroups_DX(
		elem_map_northHoron,
		locs_northHoron
	);
	const locations_easternSuburbs = Locations_ConcatGroups_DX(
		elem_map_easternSuburbs,
		locs_easternSuburbs
	);
	const locations_woodsOfWinter = Locations_ConcatGroups_DX(
		elem_map_woodsOfWinter,
		locs_woodsOfWinter
	);

	const locations_graveyard = Locations_ConcatGroups_DX(
		elem_map_graveyard,
		locs_graveyard
	);
	const locations_westernCoast = Locations_ConcatGroups_DX(
		elem_map_westernCoast,
		locs_westernCoast
	);
	const locations_horonVillage = Locations_ConcatGroups_DX(
		elem_map_horonVillage,
		locs_horonVillage
	);
	const locations_makuTree = Locations_ConcatGroups_DX(
		elem_map_makuTree,
		locs_makuTree
	);
	const locations_samasaDesert = Locations_ConcatGroups_DX(
		elem_map_samasaDesert,
		locs_samasaDesert
	);

//	Locations_RemoveExemptions(locations_holodrum, exemptions_holodrum);

//SUBROSIA LOCATIONS
/*
	const locations_subrosia = Locations_ConcatGroups(
		elem_map_subrosia,
		locs_easternSubrosia,
		locs_subrosianVillage,
		locs_subrosianVolcanoes,
		locs_subrosianWilds,
		locs_templeOfSeasons
	);
	Locations_RemoveExemptions(locations_subrosia, exemptions_subrosia);
*/

//MAP ELEMENTS
	MapElement_AddLocationMarkers(elem_map_ancientRuins, locations_ancientRuins);
	MapElement_AddLocationMarkers(elem_map_northernPeak, locations_northernPeak);
	MapElement_AddLocationMarkers(elem_map_templeRemains, locations_templeRemains);
	MapElement_AddLocationMarkers(elem_map_goronMountain, locations_goronMountain);
	MapElement_AddLocationMarkers(elem_map_mtCucco, locations_mtCucco);

	MapElement_AddLocationMarkers(elem_map_tarmRuins, locations_tarmRuins);
	MapElement_AddLocationMarkers(elem_map_holodrumPlain, locations_holodrumPlain);
	MapElement_AddLocationMarkers(elem_map_natzuRegion, locations_natzuRegion);
	MapElement_AddLocationMarkers(elem_map_greatMoblinsKeep, locations_greatMoblinsKeep);
	MapElement_AddLocationMarkers(elem_map_sunkenCity, locations_sunkenCity);

	MapElement_AddLocationMarkers(elem_map_spoolSwamp, locations_spoolSwamp);
	MapElement_AddLocationMarkers(elem_map_northHoron, locations_northHoron);
	MapElement_AddLocationMarkers(elem_map_easternSuburbs, locations_easternSuburbs);
	MapElement_AddLocationMarkers(elem_map_woodsOfWinter, locations_woodsOfWinter);

	MapElement_AddLocationMarkers(elem_map_graveyard, locations_graveyard);
	MapElement_AddLocationMarkers(elem_map_westernCoast, locations_westernCoast);
	MapElement_AddLocationMarkers(elem_map_horonVillage, locations_horonVillage);
	MapElement_AddLocationMarkers(elem_map_makuTree, locations_makuTree);
	MapElement_AddLocationMarkers(elem_map_samasaDesert, locations_samasaDesert);

//	MapElement_AddLocationMarkers(elem_map_subrosia, locations_subrosia);

//SEARCH TERMS
	AddSearchTerms(locs_generic);

	AddSearchTerms(locations_ancientRuins);
	AddSearchTerms(locations_northernPeak);
	AddSearchTerms(locations_templeRemains);
	AddSearchTerms(locations_goronMountain);
	AddSearchTerms(locations_mtCucco);

	AddSearchTerms(locations_tarmRuins);
	AddSearchTerms(locations_holodrumPlain);
	AddSearchTerms(locations_natzuRegion);
	AddSearchTerms(locations_greatMoblinsKeep);
	AddSearchTerms(locations_sunkenCity);

	AddSearchTerms(locations_spoolSwamp);
	AddSearchTerms(locations_northHoron);
	AddSearchTerms(locations_easternSuburbs);
	AddSearchTerms(locations_woodsOfWinter);

	AddSearchTerms(locations_graveyard);
	AddSearchTerms(locations_westernCoast);
	AddSearchTerms(locations_horonVillage);
	AddSearchTerms(locations_makuTree);
	AddSearchTerms(locations_samasaDesert);

//	AddSearchTerms(locations_subrosia);