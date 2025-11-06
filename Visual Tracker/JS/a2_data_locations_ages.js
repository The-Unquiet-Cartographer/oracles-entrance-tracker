//////////////////////////////
//  LABRYNNA PAST LOCATIONS	// 
//////////////////////////////

const locs_ambisPalace = [
	new Location("Ambi's Palace", "Ambi's Palace",		"East", 5,0, 3,1, "B"),
	new Location("Ambi's Palace", "Ambi's Palace",		"Main Entrance", 6,0, 4.5,1, "B"),
	new Location("Ambi's Palace", "Ambi's Palace",		"Secret Passage", 7,2, 7,4, "B"),
	new Location("Ambi's Palace", "Ambi's Palace",		"West", 7,0, 6,1, "B"),
];

const locs_blackTower_past = [
	new Location("Black Tower (Past)", "Black Tower (Past)",	Location.Type.Single, 6,7, 4.5,4, "B")
];

const locs_coastOfNoReturn = [
	new Location("Coast of No Return", "Old Zora's Cave",	Location.Type.Single, 10,5, 1,3, "B")
];

//const locs_coastOfNoReturn_underwater = [
//];

const locs_crescentIsland_past = [
	new Location("Crescent Island (Past)", "Bluff Ascent",				Location.Type.Con_Lower, 11,12, 8,0, "B"),
	new Location("Crescent Island (Past)", "Bluff Ascent",				Location.Type.Con_Upper, 12,11, 1,4, "B"),
	new Location("Crescent Island (Past)", "Crystal Rock Cave",			Location.Type.Single, 11,11, 1,0, "B"),
	new Location("Crescent Island (Past)", "Cuccos' Coop",				Location.Type.Con_Left, 13,12, 1,1, "B"),
	new Location("Crescent Island (Past)", "Cuccos' Coop",				Location.Type.Con_Right, 13,12, 4,3, "B"),
	new Location("Crescent Island (Past)", "Sea Cave",					Location.Type.Single, 9,13, 8,4, "B"),			//Tokay with an Iron Shield
	new Location("Crescent Island (Past)", "Switch Hook Cave",			Location.Type.Single, 13,13, 1,3, "B"),
	new Location("Crescent Island (Past)", "Tokay Cave",				Location.Type.Con_Entrance, 10,11, 5,5, "B"),	//Passage to ancient tomb, so technically a connector
	new Location("Crescent Island (Past)", "Tokay Traders",				Location.Type.Single, 13,10, 5,1, "B"),
	new Location("Crescent Island (Past)", "Water Cavern with Pots",	Location.Type.Con_Left, 10,13, 6,0, "B"),
	new Location("Crescent Island (Past)", "Water Cavern with Pots",	Location.Type.Con_Right, 11,13, 1,0, "B"),
	new Location("Crescent Island (Past)", "Wild Tokay Game",			Location.Type.Single, 13,11, 1,1, "B"),
	new Location("Crescent Island (Past)", "Portal (Clifftop)",			Location.Type.Portal, 9,13, 8,1, "B"),
	new Location("Crescent Island (Past)", "Portal (Tokay Village)",	Location.Type.Portal, 13,12, 5,4, "B"),
];

//const locs_crescentStrait_past = [
//];

//const locs_crescentStrait_underwater_past = [
//];

const locs_dekuForest = [
	new Location("Deku Forest", "Dungeon 2: Wing Dungeon",		Location.Type.Single, 3,8, 5,2, "B"),
	new Location("Deku Forest", "Mystery Tree Cave",			Location.Type.Con_Left, 0,7, 2,2, "B"),
	new Location("Deku Forest", "Mystery Tree Cave",			Location.Type.Con_Middle, 0,7, 7,2, "B"),
	new Location("Deku Forest", "Mystery Tree Cave",			Location.Type.Con_Right, 1,7, 2,2, "B"),
	new Location("Deku Forest", "Shortcut",						Location.Type.Con_Left, 1,9, 1,1, "B"),		//Can only go from left-right in this cave
	new Location("Deku Forest", "Shortcut",						Location.Type.Con_Right, 4,7, 7,3, "B"),	//
	new Location("Deku Forest", "Tortoise(???) rock Cave",		Location.Type.Generic, 2,7, 4,1, "B")
];

const locs_eyeglassIsland_past = [
	new Location("Eyeglass Island (Past)", "Library",			Location.Type.Single, 5,10, 2.5, 2, "B")
];

const locs_lynnaVillage = [
	new Location("Lynna Village", "Advance Shop",			Location.Type.Single, 8,5, 5,3, "B"),
	new Location("Lynna Village", "Ancient Adler's House",	Location.Type.Single, 6,6, 4,5, "B"),	//The character is also known as Adlar.
	new Location("Lynna Village", "Dekadin's House",		Location.Type.Single, 6,5, 7,2, "B"),
	new Location("Lynna Village", "Maku Road (Past)",		Location.Type.Con_Lower, 8,4, 1,2, "B"),
	new Location("Lynna Village", "Maku Road (Past)",		Location.Type.Con_Upper, 8,3, 2,5, "B"),
	new Location("Lynna Village", "Pippin's House",			Location.Type.Single, 5,4, 2,5, "B"),
	new Location("Lynna Village", "Post Office",			Location.Type.Single, 7,5, 6,3, "B"),
	new Location("Lynna Village", "Shooting Gallery",		Location.Type.Single, 8,5, 2,3, "B"),
	new Location("Lynna Village", "Toilet",					Location.Type.Single, 5,5, 1,4, "B"),
	new Location("Lynna Village", "Portal (Maku Tree)",		Location.Type.Portal, 8,4, 5,4, "B"),
];

//const locs_northeastLynna = [
//];

const locs_restorationWall = [
	new Location("Restoration Wall", "Patch's Cave",		Location.Type.Single, 3,2, 4.5,0, "B"),
];

const locs_rollingRidge_past = [
	new Location("Rolling Ridge (Past)", "Cave with holes",							Location.Type.Generic, 9,0, 5,3, "B"),		//West side, behind where Moblin's Fortress will be.
	new Location("Rolling Ridge (Past)", "Chest Cave",								Location.Type.Generic, 13,0, 2,5, "B"),		//Behind bombable wall
	new Location("Rolling Ridge (Past)", "Digging Goron's Cave",					Location.Type.Generic, 11,0, 7,2, "B"),
	new Location("Rolling Ridge (Past)", "Central Ascent (Past)",					Location.Type.Con_Upper, 12,0, 4,5, "B"),
	new Location("Rolling Ridge (Past)", "Goron Dance Hall (Past)",					Location.Type.Con_Middle, 12,1, 3,4, "B"),	//i.e. East Ascent. Access Vine sapling.
	new Location("Rolling Ridge (Past)", "Goron Shooting Gallery",					Location.Type.Con_Single, 13,1, 3,1, "B"),
	new Location("Rolling Ridge (Past)", "Great Fairy",								Location.Type.Generic, 13,2, 7,0, "B"),
	new Location("Rolling Ridge (Past)", "Unfinished West/Crown Dungeon Access",	Location.Type.Generic, 11,0, 1,4, "B"),
	new Location("Rolling Ridge (Past)", "West Ascent (Past)", 						Location.Type.Con_Middle, 8,1, 4,0, "B"),
];

const locs_rollingRidgeBase_past = [
	new Location("Rolling Ridge Base (Past)", "Dungeon 6: Mermaid's Cave (Past)",	Location.Type.Single, 12,3, 4,3, "B"),
	new Location("Rolling Ridge Base (Past)", "Central Ascent (Past)",				Location.Type.Con_Lower, 11,2, 3,2, "B"),
	new Location("Rolling Ridge Base (Past)", "Goron Dance Hall (Past)",			Location.Type.Con_Lower, 13,3, 7,2, "B"),	//i.e. East Ascent. Access Vine sapling.
	new Location("Rolling Ridge Base (Past)", "Old Man (Give)",						Location.Type.Generic, 13,4, 8,3, "B"),
	new Location("Rolling Ridge Base (Past)", "West Ascent (Past)",					Location.Type.Con_Lower, 8,2, 6,2, "B"),
];

//List of activities in Goron Dance Hall (Past):
//	Get Brother Emblem (Dancing Game, also available in Present).
//	Give Goron Vase (1F), get Goronade.
//	Give Lava Juice (3F), get Letter of Introduction.
//	Give Letter of Introduction (Dancing Game), get Mermaid Key.

//List of activities in Goron Shooting Gallery:
//	Get Lava Juice (first game).
//	Get Boomerang (second game, also available from Target Carts (Present)).


const locs_seaOfNoReturn = [
	new Location("Sea of no Return", "Dungeon 8: Ancient Tomb",	Location.Type.Single, 12,5, 4.5,1, "B")
];

const locs_seaOfNoReturn_underwater = [
	new Location ("Sea of no Return", "Tokay Cave",		Location.Type.Con_Exit, 4,0, 5,4, "B")
];

//const locs_seaOfStorms_past = [
//];

const locs_seaOfStorms_underwater_past = [
	new Location("Sea of Storms (Past)", "Underwater Chest Cave",	Location.Type.Generic, 7,3, 6,4, "B")
];

const locs_southShore_past = [
	new Location("South Shore", "Cheval's House",		Location.Type.Single, 9,7, 7,1, "B"),
	new Location("South Shore", "Rafton's House",		Location.Type.Con_Left, 7,10, 4,2, "B"),
	new Location("South Shore", "Rafton's House",		Location.Type.Con_Right, 7,10, 6,2, "B"),
];

//const locs_southShore_underwater_past = [
//];

const locs_symmetryVillage = [
	new Location("Symmetry Village", "North-East House",	Location.Type.Generic, 4,0, 7,2, "B"),
	new Location("Symmetry Village", "North-West House",	Location.Type.Single, 2,0, 2,2, "B"),	//Tuni Nut holder
	new Location("Symmetry Village", "South-East House",	Location.Type.Generic, 4,1, 4,3, "B"),
	new Location("Symmetry Village", "South-West House",	Location.Type.Generic, 2,1, 5,3, "B"),
	new Location("Symmetry Village", "Middle House",		Location.Type.Single, 3,1, 4.5,5, "B"),
];

const locs_talusPeaks_past = [
	new Location("Talus Peaks (Past)", "Dam Switch Access", Location.Type.Con_Left, 1,4, 1,5, "B"), 
	new Location("Talus Peaks (Past)", "Dam Switch Access", Location.Type.Con_Right, 1,4, 7,5, "B"), 
	new Location("Talus Peaks (Past)", "Dam Switch Access", Location.Type.Con_Lower, 1,5, 4.5,1, "B"), 
	new Location("Talus Peaks (Past)", "Piece of Heart Cave", Location.Type.Single, 3,4, 8,4, "B"), 
	new Location("Talus Peaks (Past)", "Tokkey's Cave", Location.Type.Single, 1,0, 8,1, "B"), 
	new Location("Talus Peaks (Past)", "Portal (Top of the Dam)", Location.Type.Portal, 1,4, 7,2, "B"), 
	new Location("Talus Peaks (Past)", "Portal (Symmetry Village)", Location.Type.Portal, 0,2, 1,2, "B"), 
];

const locs_zoraSeas_past = [
	new Location("Zora Seas (Past)", "Fisherman's Hut",			Location.Type.Generic, 5,12, 8,3, "B"),
	new Location("Zora Seas (Past)", "Queen Fairy's Cave",		Location.Type.Single, 3,10, 6,3, "B"),
];

const locs_zoraSeas_underwater_past = [
	new Location("Zora Seas (Past)", "Switch Hook Cave",		Location.Type.Generic, 5,3, 5,5, "B"),
];

//const locs_zoraVillage_past = [
//];

const locs_zoraVillage_underwater_past = [
	new Location("Zora Village (Past)", "King Zora's Palace (Past)",		Location.Type.Single, 1,1, 4.5,2, "B"),
	new Location("Zora Village (Past)", "Zora's House",						Location.Type.Generic, 1,3, 6,4, "B"),
	new Location("Zora Village (Past)", "Zora's Long House (Past)",			Location.Type.Con_Left, 0,4, 2,2, "B"),
	new Location("Zora Village (Past)", "Zora's Long House (Past)",			Location.Type.Con_Right, 0,4, 5,2, "B"),
];



//////////////////////////////////
//  LABRYNNA PRESENT LOCATIONS	// 
//////////////////////////////////

const locs_blackTower_present = [
	new Location("Black Tower (Present)", "Black Tower (Present)",	Location.Type.Single, 6,7, 4.5,4, "B")
];

const locs_crescentIsland_present = [
	new Location("Crescent Island (Present)", "Cuccos' Coop",				Location.Type.Single, 13,12, 2,5, "B"),
	new Location("Crescent Island (Present)", "Dungeon 3: Moonlit Grotto",	Location.Type.Single, 10,11, 5,5, "B"),
	new Location("Crescent Island (Present)", "Great Fairy",				Location.Type.Generic, 10,13, 6,0, "B"),
	new Location("Crescent Island (Present)", "Stuffed-up Tokay's House",	Location.Type.Single, 13,13, 5,2, "B"),		//A.K.A. Tokay Cafe
	new Location("Crescent Island (Present)", "Wild Tokay Museum",			Location.Type.Single, 13,11, 1,1, "B"),
	new Location("Crescent Island (Present)", "Portal (Crescent Strait)",	Location.Type.Portal, 9,10, 7,5, "B"),
	new Location("Crescent Island (Present)", "Portal (Tokay Village)",		Location.Type.Portal, 13,12, 6,2, "B"),
];

//const locs_crescentStrait_present = [
//];

const locs_crescentStrait_underwater_present = [
	new Location("Crescent Strait (Present)", "Underwater Chest Cave",	Location.Type.Generic, 10,2, 2,1, "B"),		//Inaccessable
];

const locs_eyeglassIsland_present = [
	new Location("Eyeglass Island (Present)", "Library",	Location.Type.Single, 5,10, 2.5,2, "B")
];

const locs_fairiesWoods = [
	new Location("Fairies' Woods", "Dungeon 2: Wing Dungeon",	Location.Type.Single, 3,8, 5,2, "B"),	//This location is destroyed upon attempting to enter; it is never functional in-game.
];

const locs_forestOfTime = [
	new Location("Forest of Time", "Nayru's House",				Location.Type.Single, 10,3, 3,2, "B"),
	new Location("Forest of Time", "Rolling Ridge West Ascent",	Location.Type.Con_Lower, 8,2, 6,2, "B"),
	new Location("Forest of Time", "Tingle's Ascent",			Location.Type.Con_Upper, 9,7, 1,1, "B"),
	new Location("Forest of Time", "Tingle's Ascent",			Location.Type.Con_Lower, 9,8, 5,4, "B"),
	new Location("Forest of Time", "Portal (Maku Tree)",		Location.Type.Portal, 9,3, 2,2, "B"),
	new Location("Forest of Time", "Portal (Nayru's House)",	Location.Type.Portal, 10,3, 1,2, "B"),
];

const locs_lynnaCity = [
	new Location("Lynna City", "Bipin & Blossom's House",	Location.Type.Con_Left, 7,4, 5,2, "B"),
	new Location("Lynna City", "Bipin & Blossom's House",	Location.Type.Con_Right, 7,4, 7,2, "B"),
	new Location("Lynna City", "Gramma's House",			Location.Type.Generic, 6,5, 8,2, "B"),
	new Location("Lynna City", "Know-It-All Birds' Hut",	Location.Type.Single, 5,5, 2,4, "B"),
	new Location("Lynna City", "Maku Road (Present)",		Location.Type.Con_Lower, 8,4, 1,2, "B"),
	new Location("Lynna City", "Maku Road (Present)",		Location.Type.Con_Upper, 8,3, 2,5, "B"),
	new Location("Lynna City", "Maku Tree",					Location.Type.Single, 8,3, 5.5,2, "B"),
	new Location("Lynna City", "Mamamu Yan's House",		Location.Type.Single, 6,6, 4,5, "B"),
	new Location("Lynna City", "Mayor Plen's House",		Location.Type.Single, 7,5, 5,2, "B"),
	new Location("Lynna City", "Members Shop",				Location.Type.Single, 8,6, 5,2, "B"),
	new Location("Lynna City", "Shop",						Location.Type.Single, 8,6, 7,2, "B"),
	new Location("Lynna City", "Dr. Troy's House",			Location.Type.Secret, 5,4, 2,5, "B"),
	new Location("Lynna City", "Vasu Jewellers",			Location.Type.Single, 8,5, 5,4, "B"),
	new Location("Lynna City", "Portal (Members Shop)",		Location.Type.Portal, 8,6, 3,1, "B"),
];

const locs_nuunHighlands = [
	new Location("Nuun Highlands", "Mask Shop",			Location.Type.Single, 3,5, 1.5,5, "B"),
	new Location("Nuun Highlands", "Great Fairy",		Location.Type.Generic, 6,0, 8,4, "B"),
];

const locs_nuunHighlands_dimitri = [
	new Location("Nuun Highlands", "Chest Cave",		Location.Type.Generic, 7,3, 1.5,1, "B"),
];

const locs_nuunHighlands_moosh = [
	new Location("Nuun Highlands", "Chest Cave",		Location.Type.Generic, 7,3, 3,3, "B"),
];

const locs_nuunHighlands_ricky = [
	new Location("Nuun Highlands", "Chest Cave",		Location.Type.Generic, 7,2, 5,5, "B"),
];

const locs_rollingRidge_present = [
	new Location("Rolling Ridge (Present)", "Empty Cave",						Location.Type.Generic, 13,1, 7,2, "B"),		//Secret (Learn) - Bombchus
	new Location("Rolling Ridge (Present)", "Dug-out Cave",						Location.Type.Generic, 11,0, 7,2, "B"),
	new Location("Rolling Ridge (Present)", "Dungeon 5: Crown Dungeon",			Location.Type.Single, 10,0, 7,1, "B"),
	new Location("Rolling Ridge (Present)", "Central Ascent (Present)",			Location.Type.Con_Upper, 12,0, 4,5, "B"),
	new Location("Rolling Ridge (Present)", "East/Crown Dungeon Access",		Location.Type.Con_Left, 11,0, 3,4, "B"),
	new Location("Rolling Ridge (Present)", "East/Crown Dungeon Access",		Location.Type.Con_Right, 11,1, 8,0, "B"),
	new Location("Rolling Ridge (Present)", "Fortress Basement",				Location.Type.Con_Entrance, 9,0, 3,4, "B"),
	new Location("Rolling Ridge (Present)", "Fortress Basement",				Location.Type.Con_Exit, 10,0, 2,1, "B"),
	new Location("Rolling Ridge (Present)", "Great Fairy",						Location.Type.Generic, 11,1, 6,3, "B"),
	new Location("Rolling Ridge (Present)", "Great Moblin's Fortress",			Location.Type.Con_Left, 9,0, 4,4, "B"),
	new Location("Rolling Ridge (Present)", "Great Moblin's Fortress",			Location.Type.Con_Right, 9,0, 6,4, "B"),
	new Location("Rolling Ridge (Present)", "Goron Dance Hall (Present)",		Location.Type.Con_Middle, 12,1, 3,4, "B"),	//i.e. East Ascent. Access Target Carts (vine).
	new Location("Rolling Ridge (Present)", "Goron Dance Hall (Present)",		"Upper-Right", 13,0, 5,4, "B"),
	new Location("Rolling Ridge (Present)", "Goron Dance Hall (Present)",		"Upper-Left", 13,0, 2,4, "B"),
	new Location("Rolling Ridge (Present)", "Target Carts",						Location.Type.Single, 13,1, 3,1, "B"),
	new Location("Rolling Ridge (Present)", "Target Carts Grandchild's Cave",	Location.Type.Generic, 12,1, 7,3, "B"),
	new Location("Rolling Ridge (Present)", "West Ascent (Present)",			Location.Type.Con_Middle, 8,1, 4,0, "B"),
	new Location("Rolling Ridge (Present)", "West Ascent (Present)",			Location.Type.Con_Upper, 8,1, 1,2, "B"),
	new Location("Rolling Ridge (Present)", "West/Crown Dungeon Access",		Location.Type.Con_Left, 9,0, 7,3, "B"),
	new Location("Rolling Ridge (Present)", "West/Crown Dungeon Access",		Location.Type.Con_Right, 11,0, 1,4, "B"),
	new Location("Rolling Ridge (Present)", "Portal (Peak)",					Location.Type.Portal, 11,0, 7,4, "B"),
	new Location("Rolling Ridge (Present)", "Portal (Target Carts)",			Location.Type.Portal, 13,1, 4,2, "B"),		//Access Goron Shooting Gallery.
	new Location("Rolling Ridge (Present)", "Portal (West)",					Location.Type.Portal, 11,1, 4,2, "B"),
];

const locs_rollingRidgeBase_present = [
	new Location("Rolling Ridge Base (Present)", "Dungeon 6: Mermaid's Cave (Present)",	Location.Type.Single, 12,3, 4,3, "B"),
	new Location("Rolling Ridge Base (Present)", "Central Ascent (Present)",			Location.Type.Con_Lower, 11,2, 3,2, "B"),
	new Location("Rolling Ridge Base (Present)", "Goron Dance Hall (Present)",			Location.Type.Con_Lower, 13,3, 7,2, "B"),	//i.e. East Ascent. Access Target Carts (vine).
	new Location("Rolling Ridge Base (Present)", "Old Man (Take)",						Location.Type.Generic, 13,4, 8,3, "B"),
	new Location("Rolling Ridge Base (Present)", "Small Fairy Cave",					Location.Type.Generic, 13,3, 3,1, "B"),
	new Location("Rolling Ridge Base (Present)", "Toss Ring Cave",						Location.Type.Generic, 12,3, 2,3, "B"),		//Underwater cave, in the grotto next to the Mermaid's Cave entrance.
	new Location("Rolling Ridge Base (Present)", "West Ascent (Present)",				Location.Type.Con_Lower, 8,2, 6,2, "B"),
	new Location("Rolling Ridge Base (Present)", "Portal (Mermaid's Cave)",				Location.Type.Portal, 12,3, 1,6, "B"),
];

//List of activities available in Goron Dance Hall (Present):
//	Get Brother Emblem (also available in Past).
//	Give Rock Brisket (1F), get Goron Vase.
//	Give Goronade (2F), unlock Big Bang game for Old Mermaid Key.

//List of activites available in Target Carts:
//	Get Rock Brisket (first game).
//	Get Boomerang (second game, also available from Goron Shooting Gallery (Past)).


//const locs_seaOfStorms_present = [
//];

const locs_seaOfStorms_underwater_present = [
	new Location("Sea of Storms (Present)", "Unknown Secret",	Location.Type.Secret, 7,2, 3,3, "B")
];

//const locs_southShore_present = [
//];

//const locs_southShore_underwater_present = [
//];

const locs_symmetryCity = [
	new Location("Symmetry City", "Dungeon 4: Skull Dungeon",	Location.Type.Single, 3,0, 4.5,3, "B"),
	new Location("Symmetry City", "North-East House",			Location.Type.Generic, 4,0, 7,2, "B"),
	new Location("Symmetry City", "North-West House",			Location.Type.Generic, 2,0, 2,2, "B"),
	new Location("Symmetry City", "South-East House",			Location.Type.Generic, 4,1, 4,3, "B"),
	new Location("Symmetry City", "South-West House",			Location.Type.Generic, 2,1, 5,3, "B"),
	new Location("Symmetry City", "Portal (East)",				Location.Type.Portal, 3,1, 7,4, "B"),
	new Location("Symmetry City", "Portal (West)",				Location.Type.Portal, 3,1, 2,4, "B"),
];

const locs_talusPeaks_present = [
	new Location("Talus Peaks (Present)", "Portal (Top of the Dam)",	Location.Type.Portal, 1,4, 7,2, "B"), 
	new Location("Talus Peaks (Present)", "Portal (Base of the Dam)",	Location.Type.Portal, 1,5, 4,4, "B"), 
	new Location("Talus Peaks (Present)", "Portal (Symmetry City)",		Location.Type.Portal, 0,2, 4,2, "B"), 
];

const locs_yollGraveyard = [
	new Location("Yoll Graveyard", "Dungeon 1: Spirit's Grave",		Location.Type.Single, 13,8, 6,2, "B"),
	new Location("Yoll Graveyard", "Poe's Grave",					Location.Type.Single, 12,7, 5,2, "B"),
	new Location("Yoll Graveyard", "Potion Shop",					Location.Type.Single, 13,5, 7,2, "B"),
	new Location("Yoll Graveyard", "Unlit Crypt",					Location.Type.Single, 13,8, 1,6, "B"),
];

const locs_zoraSeas_present = [
	new Location("Zora Seas (Present)", "Fisherman's Hut",			Location.Type.Generic, 5,12, 3,3, "B"),
	new Location("Zora Seas (Present)", "Queen Fairy's Cave",		Location.Type.Generic, 3,10, 2,3, "B"),
];

const locs_zoraSeas_underwater_present = [
	new Location("Zora Seas (Present)", "Switch Hook Cave",			Location.Type.Generic, 5,3, 0,5, "B"),		//Inaccessable
];

const locs_zoraVillage_present = [
	new Location("Zora Village (Present)", "Big Statue Cave",	Location.Type.Single, 0,10, 3,0, "B"),
];

const locs_zoraVillage_underwater_present = [
	new Location("Zora Village (Present)", "Dungeon 7: Jabu-Jabu's Belly",		Location.Type.Single, 0,0, 4.5,4, "B"),
	new Location("Zora Village (Present)", "King Zora's Palace (Present)",		Location.Type.Single, 1,1, 4.5,2, "B"),
	new Location("Zora Village (Present)", "Zora's House",						Location.Type.Generic, 1,3, 6,4, "B"),
	new Location("Zora Village (Present)", "Zora's Long House (Present)",		Location.Type.Con_Left, 0,4, 2,2, "B"),
	new Location("Zora Village (Present)", "Zora's Long House (Present)",		Location.Type.Con_Right, 0,4, 5,2, "B"),
];



//////////////////////////
//  Define Exemptions	// 
//////////////////////////
/*
*	These are locations that are always-vanilla in the shuffle.
*	The Present entrance to Wing Dungeon is non-functional and crumbles when opened.
*/
const exemptions_labrynna_past = [
	"Crescent Island (Past) - Portal (Clifftop)",
	"Crescent Island (Past) - Portal (Tokay Village)",
	"Lynna Village - Portal (Maku Tree)",
	"Talus Peaks (Past) - Portal (Top of the Dam)",
	"Talus Peaks (Past) - Portal (Symmetry Village)",
];

const exemptions_labrynna_present = [
	"Crescent Island (Present) - Portal (Crescent Strait)",
	"Crescent Island (Present) - Portal (Tokay Village)",
	"Fairies' Woods - Dungeon 2: Wing Dungeon",
	"Forest of Time - Portal (Maku Tree)",
	"Forest of Time - Portal (Nayru's House)",
	"Lynna City - Portal (Members Shop)",
	"Rolling Ridge (Present) - Great Moblin's Fortress",
	"Rolling Ridge (Present) - Great Moblin's Fortress",
	"Rolling Ridge (Present) - Portal (Peak)",
	"Rolling Ridge (Present) - Portal (Target Carts)",
	"Rolling Ridge (Present) - Portal (West)",
	"Rolling Ridge Base (Present) - Portal (Mermaid's Cave)",
	"Symmetry City - Portal (East)",
	"Symmetry City - Portal (West)",
	"Talus Peaks (Present) - Portal (Top of the Dam)",
	"Talus Peaks (Present) - Portal (Base of the Dam)",
	"Talus Peaks (Present) - Portal (Symmetry City)",
];

const exemptions_underwater_present = [
	"Zora Seas (Present) - Switch Hook Cave",
];



//////////////////////////////////
//  Define searchable generics  //
//////////////////////////////////
/*
*	Locations marked Generic will be removed from the search options - they will still be selectable on the map however.
*	These generic search terms will be made available instead.
*/
const locs_generic = [
    "Generic - Chest Cave",
    "Generic - Flooded Cave",
    "Generic - Great Fairy",
    "Generic - House",
    "Generic - Switch Hook Cave",
    "Generic - Old Man",
    "Generic - Old Man (Give)",
    "Generic - Old Man (Take)",
	"Generic - Secret"
];
