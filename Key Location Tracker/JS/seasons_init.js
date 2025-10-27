//Source images for tiles
    const MapSource = {
        lostWoods: document.getElementById("lostWoods"),
        winter: document.getElementById("winter"),
        spring: document.getElementById("spring"),
        summer: document.getElementById("summer"),
        fall: document.getElementById("fall"),
        natzuPrairie: document.getElementById("natzuPrairie"),
        natzuRiver: document.getElementById("natzuRiver"),
        natzuWasteland: document.getElementById("natzuWasteland"),
        natzuPrairie_noFort: document.getElementById("natzuPrairie-noFort"),
        natzuRiver_noFort: document.getElementById("natzuRiver-noFort"),
        natzuWasteland_noFort: document.getElementById("natzuWasteland-noFort"),
        moblinsKeep_intact: document.getElementById("moblinsKeep-intact"),
        moblinsKeep_ruined: document.getElementById("moblinsKeep-ruined"),
        templeRemains_lava_winter: document.getElementById("templeRemains-lava-winter"),
        templeRemains_lava_spring: document.getElementById("templeRemains-lava-spring"),
        templeRemains_lava_summer: document.getElementById("templeRemains-lava-summer"),
        templeRemains_lava_fall: document.getElementById("templeRemains-lava-fall"),
        subrosia: document.getElementById("subrosia"),
    }

//INITIALISE ENTRANCE MARKERS
    Object.values(Entrances_Holodrum).forEach((entrArr_region)=>{
        Holodrum.AddEntrances(entrArr_region);
    });

//INITIALISE MAP TILES
    let MoblinsKeep_isDestroyed = false;
    let TempleRemains_isLava = false;
    window.onload = ()=>{
    //Lost woods off-map tile
        Edge.SetAreaState([0], lostWoods);
        Edge.Offset(0, tilePixels_y *4);

    //Holodrum tiles
    //Set default seasons
        Holodrum.SetAreaState(Region.AncientRuins.tileIndices, MapSource.spring);
        Holodrum.SetAreaState(Region.TarmRuins.tileIndices, MapSource.fall);
        Holodrum.SetAreaState(Region.NorthernPeak.tileIndices, MapSource.winter);
        Holodrum.SetAreaState(Region.NorthernPeakAccess.tileIndices, MapSource.winter);
        Holodrum.SetAreaState(Region.TempleRemains.tileIndices, MapSource.winter);
        Holodrum.SetAreaState(Region.GoronMountain.tileIndices, MapSource.winter);
        Holodrum.SetAreaState(Region.MtCucco.tileIndices, MapSource.summer);
        Holodrum.SetAreaState(Region.SpoolSwamp.tileIndices, MapSource.fall);
        Holodrum.SetAreaState(Region.HolodrumPlain.tileIndices, MapSource.spring);
        Holodrum.SetAreaState(Region.SunkenCity.tileIndices, MapSource.summer);
        Holodrum.SetAreaState(Region.EyeglassLake.tileIndices, MapSource.winter);
        Holodrum.SetAreaState(Region.EasternSuburbs.tileIndices, MapSource.fall);
        Holodrum.SetAreaState(Region.WoodsOfWinter.tileIndices, MapSource.summer);
        Holodrum.SetAreaState(Region.WesternCoast.tileIndices, MapSource.winter);
        Holodrum.SetAreaState(Region.HoronVillage.tileIndices, MapSource.fall);
        Holodrum.SetAreaState(Region.SamasaDesert.tileIndices, MapSource.summer);

        Region.MoblinsKeep.state = 0;
        Holodrum.SetAreaState(Region.MoblinsKeep.tileIndices, MapSource.moblinsKeep_ruined, 91);
        Region.NatzuRegion.state = 0;
        Holodrum.SetAreaState(Region.NatzuRegion.tileIndices, MapSource.natzuPrairie, 70);
        Holodrum.screenCtnr.children[75].getContext('2d').drawImage(MapSource.natzuPrairie_noFort, 0, 0);
        
        Holodrum.Offset(tilePixels_x *1, 0);

    //Subrosia tiles
        const arr = new Array(11 * 8);
        for (let i = 0; i < arr.length; i++) arr[i] = i;
        Subrosia.SetAreaState(arr, MapSource.subrosia);
        //Subrosia.Offset(tilePixels_x *17, tilePixels_y*4);
    }



////////////////////////////////////////////////////////////////////////////////////////////////////
//  MAP UPDATE FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////

//CHANGE SEASON
    function ChangeSeason(regionToChange) {
        let i = regionToChange.state +=1;
        if (i > 3) i-=4;
        switch(i) {
            case Season.winter: Holodrum.SetAreaState(regionToChange.tileIndices, MapSource.winter); break;
            case Season.spring: Holodrum.SetAreaState(regionToChange.tileIndices, MapSource.spring); break;
            case Season.summer: Holodrum.SetAreaState(regionToChange.tileIndices, MapSource.summer); break;
            case Season.fall: Holodrum.SetAreaState(regionToChange.tileIndices, MapSource.fall); break;
        }
        regionToChange.state = i;
    }
    
//CHANGE ANIMAL COMPANION
    function ChangeCompanion() {
        let i = Region.NatzuRegion.state+1;
        if (i > 2) i-=3;
        switch(i){
            case 0:
                Holodrum.SetAreaState(Region.NatzuRegion.tileIndices, MapSource.natzuPrairie, 70);
                if (MoblinsKeep_isDestroyed) Holodrum.screenCtnr.children[75].getContext('2d').drawImage(MapSource.natzuPrairie_noFort, 0, 0);
                break;
            case 1:
                Holodrum.SetAreaState(Region.NatzuRegion.tileIndices, MapSource.natzuRiver, 70);
                if (MoblinsKeep_isDestroyed) Holodrum.screenCtnr.children[75].getContext('2d').drawImage(MapSource.natzuRiver_noFort, 0, 0);
                break;
            case 2:
                Holodrum.SetAreaState(Region.NatzuRegion.tileIndices, MapSource.natzuWasteland, 70);
                if (MoblinsKeep_isDestroyed) Holodrum.screenCtnr.children[75].getContext('2d').drawImage(MapSource.natzuWasteland_noFort, 0, 0);
                break;
        }
        Region.NatzuRegion.state = i;
    }

//TOGGLE MOBLIN'S KEEP DESTRUCTION
    function ToggleMoblinsKeep() {
        MoblinsKeep_isDestroyed = !MoblinsKeep_isDestroyed;
        if (MoblinsKeep_isDestroyed) Holodrum.SetAreaState(Region.MoblinsKeep.tileIndices, MapSource.moblinsKeep_ruined, 91);
        else Holodrum.SetAreaState(Region.MoblinsKeep.tileIndices, MapSource.moblinsKeep_intact, 91);
        Region.MoblinsKeep.state = MoblinsKeep_isDestroyed ? 1 : 0;
    //Update Natzu region (remove the top of the fortress sprite)
        Region.NatzuRegion.state-=1;
        ChangeCompanion();
    }

//CHANGE SEASON IN TEMPLE REMAINS
    function ChangeSeason_TempleRemains() {
        let i = Region.TempleRemains.state +=1;
        if (i > 3) i-=4;
        switch(i) {
            case Season.winter:
                if (TempleRemains_isLava) Holodrum.SetAreaState(Region.TempleRemains.tileIndices, MapSource.templeRemains_lava_winter, 4);
                else Holodrum.SetAreaState(Region.TempleRemains.tileIndices, winter);
                break;
            case Season.spring:
                if (TempleRemains_isLava) Holodrum.SetAreaState(Region.TempleRemains.tileIndices, MapSource.templeRemains_lava_spring, 4);
                else Holodrum.SetAreaState(Region.TempleRemains.tileIndices, spring);
                break;
            case Season.summer:
                if (TempleRemains_isLava) Holodrum.SetAreaState(Region.TempleRemains.tileIndices, MapSource.templeRemains_lava_summer, 4);
                else Holodrum.SetAreaState(Region.TempleRemains.tileIndices, summer);
                break;
            case Season.fall:
                if (TempleRemains_isLava) Holodrum.SetAreaState(Region.TempleRemains.tileIndices, MapSource.templeRemains_lava_fall, 4);
                else Holodrum.SetAreaState(Region.TempleRemains.tileIndices, fall);
                break;
        }
        Region.TempleRemains.state = i;
    }

//TOGGLE TEMPLE REMAINS DESTRUCTION
    function ToggleTempleRemains() {
        TempleRemains_isLava = !TempleRemains_isLava;
        Region.TempleRemains.state -=1;
        ChangeSeason_TempleRemains();
    }