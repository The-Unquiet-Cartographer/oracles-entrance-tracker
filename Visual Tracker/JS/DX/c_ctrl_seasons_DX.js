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
		elem_map_samasaDesert = document.getElementById('map-samasaDesert-ctnr'),

		elem_map_subrosia = document.getElementById('map-subrosia-ctnr')
	;


//HOLODRUM LOCATIONS
	const commonOrigin_holodrum = {x:0, y:0};

	const locations_ancientRuins = Locations_ConcatGroups_DX(
		elem_map_ancientRuins,
		commonOrigin_holodrum,
		locs_ancientRuins
	);
	const locations_northernPeak = Locations_ConcatGroups_DX(
		elem_map_northernPeak,
		commonOrigin_holodrum,
		locs_northernPeak
	);
	const locations_templeRemains = Locations_ConcatGroups_DX(
		elem_map_templeRemains,
		commonOrigin_holodrum,
		locs_templeRemains
	);
	const locations_goronMountain = Locations_ConcatGroups_DX(
		elem_map_goronMountain,
		commonOrigin_holodrum,
		locs_goronMountain
	);
	const locations_mtCucco = Locations_ConcatGroups_DX(
		elem_map_mtCucco,
		commonOrigin_holodrum,
		locs_mtCucco
	);

	const locations_tarmRuins = Locations_ConcatGroups_DX(
		elem_map_tarmRuins,
		commonOrigin_holodrum,
		locs_tarmRuins
	);
	const locations_holodrumPlain = Locations_ConcatGroups_DX(
		elem_map_holodrumPlain,
		commonOrigin_holodrum,
		locs_holodrumPlain
	);
	const locations_natzuRegion = Locations_ConcatGroups_DX(
		elem_map_natzuRegion,
		commonOrigin_holodrum,
		locs_natzuRegion,
		locs_natzuRegion_ricky
	);
	const locations_greatMoblinsKeep = Locations_ConcatGroups_DX(
		elem_map_greatMoblinsKeep,
		commonOrigin_holodrum,
		locs_greatMoblinsKeep
	);
	const locations_sunkenCity = Locations_ConcatGroups_DX(
		elem_map_sunkenCity,
		commonOrigin_holodrum,
		locs_sunkenCity
	);

	const locations_spoolSwamp = Locations_ConcatGroups_DX(
		elem_map_spoolSwamp,
		commonOrigin_holodrum,
		locs_spoolSwamp
	);
	const locations_northHoron = Locations_ConcatGroups_DX(
		elem_map_northHoron,
		commonOrigin_holodrum,
		locs_northHoron,
		locs_eyeglassLake
	);
	const locations_easternSuburbs = Locations_ConcatGroups_DX(
		elem_map_easternSuburbs,
		commonOrigin_holodrum,
		locs_easternSuburbs
	);
	const locations_woodsOfWinter = Locations_ConcatGroups_DX(
		elem_map_woodsOfWinter,
		commonOrigin_holodrum,
		locs_woodsOfWinter
	);

	const locations_graveyard = Locations_ConcatGroups_DX(
		elem_map_graveyard,
		commonOrigin_holodrum,
		locs_graveyard
	);
	const locations_westernCoast = Locations_ConcatGroups_DX(
		elem_map_westernCoast,
		commonOrigin_holodrum,
		locs_westernCoast
	);
	const locations_horonVillage = Locations_ConcatGroups_DX(
		elem_map_horonVillage,
		commonOrigin_holodrum,
		locs_horonVillage
	);
	const locations_makuTree = Locations_ConcatGroups_DX(
		elem_map_makuTree,
		commonOrigin_holodrum,
		locs_makuTree
	);
	const locations_samasaDesert = Locations_ConcatGroups_DX(
		elem_map_samasaDesert,
		commonOrigin_holodrum,
		locs_samasaDesert
	);

	Locations_RemoveExemptions(locations_northernPeak, "Northern Peak - General Onox's Castle");
	Locations_RemoveExemptions(locations_mtCucco, "Sunken Falls - Master Diver's Cave", "Sunken Falls - Master Diver's Test");
	Locations_RemoveExemptions(locations_makuTree, "Horon Village - Maku Tree");
	Locations_RemoveExemptions(locations_westernCoast, "Western Coast - Pirate Ship (Docked)");
	Locations_RemoveExemptions(locations_samasaDesert, "Samasa Desert - Desert Cave", "Samasa Desert - Pirate Ship (Beached)");


//SUBROSIA LOCATIONS
	const commonOrigin_subrosia = {x:parseInt(elem_map_subrosia.style.left), y:parseInt(elem_map_subrosia.style.top)};

	const locations_subrosia = Locations_ConcatGroups_DX(
		elem_map_subrosia,
		commonOrigin_subrosia,
		locs_easternSubrosia,
		locs_subrosianVillage,
		locs_subrosianVolcanoes,
		locs_subrosianWilds,
		locs_templeOfSeasons
	);
	Locations_RemoveExemptions(locations_subrosia, exemptions_subrosia);


//LOCATION MARKERS
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

	MapElement_AddLocationMarkers(elem_map_subrosia, locations_subrosia);


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

	AddSearchTerms(locations_subrosia);