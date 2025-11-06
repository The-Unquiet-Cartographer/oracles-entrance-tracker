//Holodrum locations

const locs_ancientRuins = [
    new Location("Tarm Ruins", "Dungeon 6: Ancient Ruins",			Location.Type.Single, 0,0, 4,3, "BR"),
    new Location("Tarm Ruins", "Old Man (Give)",					Location.Type.Generic, 2,0, 8,1, "B"),		//Generic - Old Man
    new Location("Tarm Ruins", "Wooden Basement",					Location.Type.Generic, 0,1, 1,6, "BRR"),	//Generic - Chest Cave
];

const locs_easternSuburbs = [
    new Location("Eastern Suburbs", "Magnetic Glove Cave",			Location.Type.Generic, 12,12, 1,1, "RRR"),		//Generic - Magnetic Glove Cave
	new Location("Eastern Suburbs", "Old Man (Take)",				Location.Type.Generic, 15,8, 2,3, "RRR"),		//Generic - Old Man
    new Location("Eastern Suburbs", "Windmill Cave",				Location.Type.Con_Lower, 10,14, 5,1, "BL"),
    new Location("Eastern Suburbs", "Windmill Cave",				Location.Type.Con_Middle, 10,14, 7,0, "RRR"),
    new Location("Eastern Suburbs", "Windmill Cave",				Location.Type.Con_Upper, 10,13, 5,6, "T"),
];

const locs_eyeglassLake = [
    new Location("Eyeglass Lake", "Booby Trapped Cave",				Location.Type.Generic, 10,10, 7,3, "B"),	//Generic - Chest Cave
    new Location("Eyeglass Lake", "Dungeon 5: Unicorn's Cave",		Location.Type.Single, 10,8, 5,2, "B"),
    new Location("Eyeglass Lake", "Lakebed Bomb Cave",				Location.Type.Generic, 7,10, 8,3, "B"),		//Generic - Flooded Cave
	new Location("Eastern Suburbs", "Eastern Suburbs Portal",		Location.Type.Portal, 10,9, 3,3, "LLL"),	//to Subrosia N
    new Location("Eyeglass Lake", "Eyeglass Lake Portal",			Location.Type.Portal, 9,11, 2,2, "B"),		//to Great Furnace
];

const locs_goronMountain = [
    new Location("Goron Mountain", "First Ascent",					Location.Type.Con_Lower, 9,2, 7,1, "B"),		//Connecting cave with Lava
    new Location("Goron Mountain", "First Ascent",					Location.Type.Con_Upper, 9,1, 7,5, "RRR"),		//Connecting cave with Lava
    new Location("Goron Mountain", "Second Ascent",					Location.Type.Con_Lower, 9,1, 8,0, "TRR"),		//Twin cave right-hand side
    new Location("Goron Mountain", "Second Ascent",					Location.Type.Con_Upper, 9,0, 6,2, "RRR"),		//Twin cave right-hand side
    new Location("Goron Mountain", "Goron City",					Location.Type.Con_Lower, 9,3, 1,1, "LLL"),		//Requires Zora's Flippers
    new Location("Goron Mountain", "Goron City",					Location.Type.Con_Middle, 8,2, 3,1, "B"),
    new Location("Goron Mountain", "Goron City",					Location.Type.Con_Upper, 8,1, 7,1, "LLL"),		//Roc's Cape + Bomb check, Secret (Learn) - Biggoron's Sword
    new Location("Goron Mountain", "Lone Goron's Cave",				Location.Type.Single, 9,1, 2,2, "BL"),			//Ring Box upgrade
    new Location("Goron Mountain", "Old Man (Give)",				Location.Type.Generic, 8,2, 2,5, "B"),			//Generic - Old Man
    new Location("Goron Mountain", "Small Pot Cave",				Location.Type.Generic, 9,1, 6,0, "TLL"),		//Empty
];

const locs_graveyard = [
    new Location("Graveyard", "Dungeon 7: Ancient Crypt",			Location.Type.Single, 0,13, 4,3, "B"),
    new Location("Graveyard", "Graveyard Secret",					Location.Type.Secret, 0,14, 4,1, "U"),			//Secret (Tell) - Heart Container
    new Location("Graveyard", "Graveyard Passage",					Location.Type.Con_Upper, 1,14, 7,3, "B"),
];

const locs_greatMoblinsKeep = [
	new Location("Natzu Region", "Great Moblin's Keep",				Location.Type.Con_Left, 11,5, 3,3, "BL"),
	new Location("Natzu Region", "Great Moblin's Keep",				Location.Type.Con_Right, 11,5, 5,3, "BR"),
];

const locs_holodrumPlain = [
	new Location("North Horon", "Blaino's Gym",						Location.Type.Single, 8,7, 6,3, "B"),
    new Location("North Horon", "Large Flooded Cave",				Location.Type.Generic, 7,8, 1,3, "B"),		//Generic - Flooded Cave
    new Location("Holodrum Plain", "Mrs Ruul's House",				Location.Type.Trade, 3,10, 2,4, "LLL"),		//Trade - Ghastly Doll => Iron Pot
	new Location("North Horon", "Old Man (Give)",					Location.Type.Generic, 6,6, 5,5, "B"),		//Generic - Old Man
    new Location("Holodrum Plain", "Old Man (Take)",				Location.Type.Generic, 4,10, 6,5, "B"),		//Generic - Old Man
	new Location("Holodrum Plain", "Small Flooded Cave",			Location.Type.Generic, 3,11, 2,0, "B"),
	new Location("Holodrum Plain", "Round Jewel Guardian",			Location.Type.Single, 5,11, 8,1, "BLL"),	//Generic - Flooded Cave
];

const locs_horonVillage = [
    new Location("Horon Village", "Advance Shop",					Location.Type.Single, 5,12, 1,1, "BLL"),
    new Location("Horon Village", "Bipin & Blossom's House",		Location.Type.Con_Left, 6,15, 4,2, "BL"),
    new Location("Horon Village", "Bipin & Blossom's House",		Location.Type.Con_Right, 6,15, 6,2, "TR"),
    new Location("Horon Village", "Clock Shop",						Location.Type.Trade, 7,13, 3,4, "RRR"), 	//Trade - Wooden Bird => Engine Grease
    new Location("Horon Village", "Clock Shop Secret",				Location.Type.Secret, 7,13, 4,1, "RRR"),	//Secret (Tell) - Sword Upgrade
    new Location("Horon Village", "Know-It-All Birds' Hut",			Location.Type.Single, 5,12, 4,1, "BRR"),
    new Location("Horon Village", "Mayor Ruul's House",				Location.Type.Single, 8,12, 4,4, "LLL"),	//Bomb check, Secret (Tell) - Ring Box Upgrade
    new Location("Horon Village", "Mr. Left's House",				Location.Type.Con_Left, 9,15, 3,3, "LLL"),	//Trade - Cuccodex
    new Location("Horon Village", "Mr. Left's House",				Location.Type.Con_Right, 9,15, 5,2, "RRR"),
    new Location("Horon Village", "Old Man (Give)",					Location.Type.Generic, 9,15, 2,6, "RRR"),	//Generic - Old Man
    new Location("Horon Village", "Shop",							Location.Type.Single, 6,14, 5,4, "TLLL"),
    new Location("Horon Village", "Vasu Jewelers",					Location.Type.Single, 8,14, 5,4, "B"),
	new Location("Horon Village", "Horon Village Portal",			Location.Type.Portal, 7,15, 3,3, "B"),		//Indoor, to House of Pirates
];

const locs_makuTree = [
    new Location("Horon Village", "Maku Tree",						Location.Type.Single, 9,12, 6,2.5, "B"),	//Exempted from randomization
];

const locs_mtCucco = [
    new Location("Mt. Cucco", "Dungeon 4: Dancing Dragon Dungeon",	Location.Type.Single, 13,1, 3,1, "B"),
    new Location("Mt. Cucco", "Floating Platform Cave",				Location.Type.Generic, 15,1, 7,3, "RRR"),		//Generic - Chest Cave
    new Location("Mt. Cucco", "Great Fairy",						Location.Type.Generic, 14,1, 2,1, "RRR"),		//Generic - Great Fairy
    new Location("Mt. Cucco", "Mushroom Cave",						Location.Type.Single, 11,1, 7,2, "BL"),			//Trade - Megaphone => Mushroom
    new Location("Mt. Cucco", "Mt. Cucco Portal",					Location.Type.Portal, 14,1, 4,5, "BRR"),		//to Subrosia SW
    new Location("Mt. Cucco", "Pyramid Jewel Cave",					Location.Type.Generic, 13,1, 8,1, "TL"),		//Generic - Flooded Cave
    new Location("Mt. Cucco", "West Ascent",						Location.Type.Con_Lower, 12,1, 1,1, "T"),		//Narrow passage going left
    new Location("Mt. Cucco", "West Ascent",						Location.Type.Con_Upper, 11,0, 8,2, "RRR"),		//Reverse C?
    new Location("Mt. Cucco", "East Ascent (Feather)",				Location.Type.Con_Lower, 15,0, 5,5, "RRR"),		//Big pit, tiny platforms
    new Location("Mt. Cucco", "East Ascent (Feather)",				Location.Type.Con_Upper, 15,0, 5,1, "LLL"),		//Big pit, tiny platforms
	new Location("Mt. Cucco", "Sunken-Cucco Passage",				Location.Type.Con_Upper, 13,3, 6,6, "RRR"),
	new Location("Sunken Falls", "Master Diver's Test",				Location.Type.Single, 14,2, 1.5,5, "B"),		//Exempted from randomization
    new Location("Sunken Falls", "Master Diver's Cave",				Location.Type.Single, 14,2, 5,6, "B")			//Exempted from randomization
];

const locs_natzuRegion = [
    //Ricky Locs only 
    new Location("Natzu Region", "Small Platform Cave",				Location.Type.Generic, 9,4, 7,1, "B"),		//Generic - Chest Cave
    new Location("Natzu Region", "Great Fairy",						Location.Type.Generic, 7,5, 2,3, "B"),		//Generic - Great Fairy
    new Location("Natzu Region", "Seed-Loving Scrub",				Location.Type.Single, 9,7, 8,4, "B"),		//Seed Satchel upgrade, Secret (Tell) - Seed Satchel Upgrade
];

const locs_northernPeak = [
    new Location("Northern Peak", "General Onox's Castle",			Location.Type.Single, 3,0, 4.5,3, "B"),		//Exempted from randomization
];

const locs_northHoron = [
    new Location("North Horon", "Dungeon 1: Gnarled Root",			Location.Type.Single, 6,9, 4,4, "B"),
    new Location("North Horon", "Impa's Refuge",					Location.Type.Single, 6,11, 1,1, "BRR"),	//Important in the Linked game
    new Location("North Horon", "Malon's House",					Location.Type.Trade, 8,8, 3,1, "B"),		//Trade - Cuccodex => Lon Lon Egg
    new Location("North Horon", "Old Man (Give)",					Location.Type.Generic, 7,9, 3,2, "B"),		//Generic - Old Man
    new Location("North Horon", "Red Ring Guardian",				Location.Type.Single, 6,10, 7,2, "B"),
];

const locs_samasaDesert = [
    new Location("Samasa Desert", "Desert Cave",					Location.Type.Single, 12,13, 6,1, "B"),
    new Location("Samasa Desert", "Great Fairy",					Location.Type.Generic, 15,11, 5,1, "B"),			//Generic - Great Fairy
    new Location("Samasa Desert", "Pirate Ship (Beached)",			Location.Type.Single, 14,14, 5,5, "B"),
    new Location("Samasa Desert", "Desert Passage",					Location.Type.Con_Entrance, 13,15, 5.5,4.5, "B"),
    new Location("Samasa Desert", "Desert Passage",					Location.Type.Con_Exit, 15,15, 6,3, "B")
];

const locs_spoolSwamp = [
    new Location("Spool Swamp", "Dungeon 3: Poison Moth's Lair",	Location.Type.Single, 0,6, 5,2, "BRR"),
    new Location("Spool Swamp", "Floodgate Keeper's House",			Location.Type.Single, 2,6, 4,3, "B"),
    new Location("Spool Swamp", "Floodgate Passage",				Location.Type.Con_Left, 0,6, 1,2, "BBR"),
    new Location("Spool Swamp", "Floodgate Passage",				Location.Type.Con_Right, 2,6, 7,2, "RRR"),
    new Location("Spool Swamp", "Spool Swamp Portal",				Location.Type.Portal, 0,11, 5,3, "B"),			//to Subrosian Market
    new Location("Spool Swamp", "Square Jewel Cave",				Location.Type.Single, 2,12, 7,0, "B")
];

const locs_sunkenCity = [
    new Location("Sunken City", "Flooded Cave",						Location.Type.Generic, 15,4, 2,1, "B"),			//Generic - Flooded Cave
    new Location("Sunken City", "Ingo's House",						Location.Type.Trade, 13,4, 1,1, "BL"),			//Trade - Goron Vase => Fish
    new Location("Sunken City", "Potion Shop",						Location.Type.Single, 14,5, 4,4, "RRR"),		//Trade - Mushroom => Wooden Bird
    new Location("Sunken City", "Man's House",						Location.Type.Generic, 13,6, 2,3, "B"),			//Generic - House
    new Location("Sunken City", "Master Diver's House",				Location.Type.Secret, 13,5, 6,4, "B"),			//Secret (Tell) - Swimmer's Ring
    new Location("Sunken City", "Moblins' Hideout",					Location.Type.Single, 15,6, 7,5, "T"),			//Generic - House
    new Location("Sunken City", "Woman's House",					Location.Type.Generic, 15,3, 7,5, "BR"),		//Generic - House
    new Location("Sunken City", "Sunken-Cucco Passage",				Location.Type.Con_Lower, 13,4, 5,1, "BR"),
    new Location("Sunken City", "Sunken-Woods Passage",				Location.Type.Con_Dropdown, 14,6, 6,6, "TL"), 
];

const locs_tarmRuins = [
    new Location("Tarm Ruins", "Great Fairy",						Location.Type.Generic, 1,3, 4,1, "B"),		//Generic - Great Fairy
    new Location("Tarm Ruins", "Helpful Scrub's Cave",				Location.Type.Single, 3,4, 8,1, "B"),
    new Location("Tarm Ruins", "Music-Loving Scrub's Cave",			Location.Type.Trade, 1,5, 6,5, "T"),		//Trade - Phonograph => Noble Sword hint
];

const locs_templeRemains = [
    new Location("Temple Remains", "Lava-Filled Cave",				Location.Type.Single, 5,1, 4,0, "B"),			//Generic
    new Location("Temple Remains", "Temple Ascent",					Location.Type.Con_Lower, 6,1, 8,0, "B"),		//Magnetic glove
    new Location("Temple Remains", "Temple Ascent",					Location.Type.Con_Upper, 7,0, 3,1, "BRR"),		//Long, narrow bridge
    new Location("Temple Remains", "Bastion",						Location.Type.Con_Left, 6,0, 3,1, "BL"),		//Tonnes of Keese
    new Location("Temple Remains", "Bastion",						Location.Type.Con_Right, 6,0, 6,1, "BR"),		//Crumbling floors
    new Location("Temple Remains", "Lower Portal",					Location.Type.Portal, 5,2, 2,2, "B"),			//to Volcano N
    new Location("Temple Remains", "Upper Portal",					Location.Type.Portal, 4,0, 7,2, "B")			//Indoor, to Sword & Shield Maze
];

const locs_westernCoast = [
    new Location("Western Coast", "Great Fairy",					Location.Type.Generic, 3,13, 6,0, "B"),			//Generic - Great Fairy
    new Location("Western Coast", "Hero's Cave",					Location.Type.Con_Dropdown, 4,13, 7,5, "BR"),
    new Location("Western Coast", "Hero's Cave",					Location.Type.Con_Entrance, 4,13, 4,5, "BL"),
    new Location("Western Coast", "Coast House",					Location.Type.Con_Left, 2,13, 4,2, "BB"),
    new Location("Western Coast", "Coast House",					Location.Type.Con_Right, 2,13, 6,1, "B"),
    new Location("Western Coast", "Pirate Ship (Docked)",			Location.Type.Single, 2,14, 6,6, "B"),			//Exempted from randomization
    new Location("Western Coast", "Old Man (Give)",					Location.Type.Generic, 2,13, 2,1, "B"),			//Generic - Old Man
	new Location("Western Coast", "Graveyard Passage",				Location.Type.Con_Lower, 1,15, 6,0, "B")
];

const locs_woodsOfWinter = [
    new Location("Woods of Winter", "Big Cave",						Location.Type.Generic, 13,7, 2,1, "LLL"),			//Generic - Chest Cave
    new Location("Woods of Winter", "Dungeon 2: Snake's Remains",	Location.Type.Con_Entrance, 13,8, 4,2, "LLL"),
    new Location("Woods of Winter", "Dungeon 2: Snake's Remains",	Location.Type.Con_Upper, 13,8, 8,1, "TLL"),
    new Location("Woods of Winter", "Dungeon 2 Annex",				Location.Type.Single, 14,8, 2,1, "TRR"),
    new Location("Woods of Winter", "Holly's House",				"Chimney", 15,7, 7,2, "RRR"),
	new Location("Woods of Winter", "Holly's House",				Location.Type.Con_Entrance, 15,7, 7,4, "BRR"),		//Secret (Learn) - Ring Box Upgrade
    new Location("Woods of Winter", "Magnetic Glove Cave",			Location.Type.Generic, 14,8, 8,4, "BR"),			//Generic - Magnetic Glove Cave
    new Location("Woods of Winter", "Small Fairy Cave",				Location.Type.Secret, 14,8, 3,4, "BL"),				//Generic - Fairy Grotto, Secret (Learn) - Ring Box Upgrade
	new Location("Woods of Winter", "Sunken-Woods Passage",			Location.Type.Con_Lower, 14,7, 1,1, "RRR"),
];



//Subrosia Locations

const locs_subrosianVillage = [
    new Location("Subrosian Village", "Gasha Seed House",			Location.Type.Single, 4,4, 3,4, "B"),
    new Location("Subrosian Village", "Locked Passage",				Location.Type.Con_Left, 5,3, 3,4, "TLL"),
    new Location("Subrosian Village", "Locked Passage",				Location.Type.Con_Right, 5,3, 6,4, "TRR"),
    new Location("Subrosian Village", "Portal (Subrosian Market)",	Location.Type.Portal, 7,5, 2,2, "LLL"),			//to Spool Swamp
    new Location("Subrosian Village", "Subrosian Chef's House",		Location.Type.Trade, 2,2, 2,3, "B"),			//Trade - Iron Pot => Lava Soup
    new Location("Subrosian Village", "Subrosian's House",			Location.Type.Generic, 3,2, 8,4, "B"),			//Generic - House
    new Location("Subrosian Village", "Subrosian Market",			Location.Type.Single, 5,4, 2.5,4, "B"),
    new Location("Subrosian Village", "Subrosian Smithy",			Location.Type.Single, 3,3, 6,4, "B"), 			//Secret (Tell) - Shield Upgrade
];

const locs_subrosianVolcanoes = [
    new Location("Subrosian Volcanoes", "Big Empty Cave",					Location.Type.Secret, 4,0, 7,6, "B"),		//Secret (Tell) - Bombchus
    new Location("Subrosian Volcanoes", "Dancing Game",						Location.Type.Single, 4,2, 4,2, "BRR"),
    new Location("Subrosian Volcanoes", "Dungeon 8: Sword & Shield Maze",	Location.Type.Single, 0,0, 3,2, "B"),
    new Location("Subrosian Volcanoes", "Locked Cave",						Location.Type.Generic, 2,1, 8,5, "B"),		//Generic - Chest Cave
    new Location("Subrosian Volcanoes", "Portal (Dancing Game)",			Location.Type.Portal, 5,0, 4,2, "RRR"),		//to Eastern Suburbs
    new Location("Subrosian Volcanoes", "Portal (Destructive Volcano)",		Location.Type.Portal, 3,1, 7,2, "B"),		//to Temple Remains Lower
    new Location("Subrosian Volcanoes", "Portal: Dungeon 8",				Location.Type.Portal, 0,2, 2,3, "B"),		//to Temple Remains Bastion
    new Location("Subrosian Volcanoes", "Small Chest Cave",					Location.Type.Generic, 1,1, 1,3, "B"),		//Generic - Chest Cave
    new Location("Subrosian Volcanoes", "Temple Remains Volcano",			Location.Type.Single, 3,0, 7,6, "T")
];

const locs_subrosianWilds = [
    new Location("Subrosian Wilds", "House of Pirates",				Location.Type.Con_Lower, 2,7, 2,3, "LLL"),
    new Location("Subrosian Wilds", "House of Pirates",				Location.Type.Con_Upper, 2,7, 3,5, "RRR"),		//Secret (Tell) - Bomb Upgrade
    new Location("Subrosian Wilds", "Pirate ship (Beached)",		Location.Type.Single, 4,7, 7,2, "B"),
    new Location("Subrosian Wilds", "Portal (House of Pirates)",	Location.Type.Portal, 2,7, 4,2, "T"),			//to Horon Village
    new Location("Subrosian Wilds", "Portal (Small Volcanoes)",		Location.Type.Portal, 3,5, 3,6, "T"),			//to Mt. Cucco
    new Location("Subrosian Wilds", "Strange Brothers' House",		Location.Type.Con_Left, 1,5, 8,2, "BLL"),
    new Location("Subrosian Wilds", "Strange Brothers' House",		Location.Type.Con_Right, 2,5, 1,3, "BR"),
];

const locs_templeOfSeasons = [
    new Location("Temple of Seasons", "Main Temple",				Location.Type.Single, 9,0, 4.5,4, "B"),			//Secret (Tell) - Heart Ring L-1
    new Location("Temple of Seasons", "Tower of Fall",				Location.Type.Single, 10,0, 3,2, "BR"),
    new Location("Temple of Seasons", "Tower of Spring",			Location.Type.Single, 8,2, 3,4, "T"),
    new Location("Temple of Seasons", "Tower of Spring Passage",	Location.Type.Con_Left, 4,5, 4,6, "B"),
    new Location("Temple of Seasons", "Tower of Spring Passage",	Location.Type.Con_Right, 8,2, 5,5, "B"),
    new Location("Temple of Seasons", "Tower of Summer",			Location.Type.Single, 8,0, 3,5, "B"),
    new Location("Temple of Seasons", "Tower of Winter",			Location.Type.Single, 10,2, 7,4, "B")
];

const locs_easternSubrosia = [
    new Location("Subrosian Furnaces", "Bluff Ascent",					Location.Type.Con_Lower, 8,5, 2,5, "BR"),
    new Location("Subrosian Furnaces", "Bluff Ascent",					Location.Type.Con_Upper, 8,5, 5,2, "TL"),
    new Location("Subrosian Furnaces", "Great Furnace",					Location.Type.Single, 9,4, 5,6, "B"),
    new Location("Subrosian Furnaces", "Sign-Loving Subrosian's House",	Location.Type.Single, 10,5, 4,2, "B"),
    new Location("Subrosian Furnaces", "Portal (Great Furnace)",		Location.Type.Portal, 10,4, 4,3, "T")			//to Eyeglass Lake
];



//////////////////////////
//  Define Exemptions	// 
//////////////////////////
/*
*	These are locations that are always-vanilla in the shuffle.
*/

const exemptions_holodrum = [
    "Horon Village - Maku Tree",
    "Northern Peak - General Onox's Castle",
    "Samasa Desert - Desert Cave",
    "Samasa Desert - Pirate Ship (Beached)",
    "Sunken Falls - Master Diver's Test",
    "Sunken Falls - Master Diver's Cave",
    "Western Coast - Pirate Ship (Docked)"
];

const exemptions_subrosia = [
    "Subrosian Village - Dancing Game",
    "Subrosian Village - Locked Passage",
    "Subrosian Village - Locked Passage",
    "Subrosian Wilds - Pirate Ship (Beached)",
    "Subrosian Wilds - Strange Brothers' House",
    "Subrosian Wilds - Strange Brothers' House"
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
    "Generic - Magnetic Glove Cave",
    "Generic - Old Man",
    "Generic - Old Man (Give)",
    "Generic - Old Man (Take)",
	"Generic - Secret"
];
