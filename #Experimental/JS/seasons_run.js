//CONTROLS
//Track mouse position within element
    let pos_x_rel;
    let pos_y_rel;
    let _region;

//Enumerate main interactive modes (Holodrum only; Subrosia will always default to tile/entrance)
    const Mode = {
        none: 0,
        changeSeason: 1,
        entrance: 2
    }
    let _mode = 0;
    function LogMode() {console.log(`${Object.values(Mode).indexOf(_mode)}: ${Object.keys(Mode)[_mode]}`);}



//////////////////////////
//  EVENT LISTENERS     //
//////////////////////////

//Buttons/Switch Mode
    document.getElementById("btn-changeSeason").addEventListener('click', (e)=>{
        if (_mode == Mode.changeSeason) _mode = Mode.none;
        else _mode = Mode.changeSeason;
        LogMode();
    });
    document.getElementById("btn-changeCompanion").addEventListener('click', (e)=>{
        Holodrum_HideOrDisplayMarkers(Region.NatzuRegion);
        ChangeCompanion();
        Holodrum_HideOrDisplayMarkers(Region.NatzuRegion);
        LogMode();
    });
    document.getElementById("btn-toggleMoblinsKeep").addEventListener('click', (e)=>{
        ToggleMoblinsKeep();
        LogMode();
    });
    document.getElementById("btn-toggleTempleRemains").addEventListener('click', (e)=>{
        ToggleTempleRemains();
        LogMode();
    });

//Highlight region - Holodrum
    Holodrum.DOMElement.addEventListener('mousemove', (e)=>{
        const rect = Holodrum.DOMElement.getBoundingClientRect();
        pos_x_rel = e.clientX - rect.left;
        pos_y_rel = e.clientY - rect.top;
        //console.log(`x; ${Math.trunc(pos_x_rel)}, y:${Math.trunc(pos_y_rel)}`);
        let newRegion = Holodrum_GetRegion();
        switch(_mode){
            default: break;
            case Mode.changeSeason:
                if (newRegion != _region) {
                    Holodrum_HighlightRegion(newRegion);
                    Holodrum_HideOrDisplayMarkers(_region);
                    Holodrum_HideOrDisplayMarkers(newRegion);
                    _region = newRegion;
                }
                break;
            case Mode.entrance:
                if (newRegion != _region) {
                    Holodrum_HighlightRegion(newRegion);
                    Holodrum_HideOrDisplayMarkers(_region);
                    Holodrum_HideOrDisplayMarkers(newRegion);
                    _region = newRegion;
                }
                break;
        }
    });

    Holodrum.DOMElement.addEventListener('click', (e)=>{
        switch(_mode){
            default: break;
            case Mode.changeSeason:
                switch (_region) {
                    default: ChangeSeason(_region); return;
                    case Region.NorthernPeak: return;
                    case Region.NorthernPeakAccess: return;
                    case Region.GoronMountain: return;
                    case Region.TempleRemains: ChangeSeason_TempleRemains(); return;
                    case Region.NatzuRegion: /*ChangeAnimal();*/ return;
                    case Region.MoblinsKeep: /*ChangeMoblin();*/ return;
                    case Region.SamasaDesert: return;
                }
            case Mode.entrance:
                break;
        }
    });



//////////////////////////////////////////////////////////
//  HIGHLIGHT REGION AND DISPLAY MARKERS - HOLODRUM     //
//////////////////////////////////////////////////////////
    function Holodrum_GetRegion () {
        function InRange(xMin, xMax, yMin, yMax) {
            if (
                pos_x_rel >= xMin
            &&  pos_x_rel < xMax
            &&  pos_y_rel >= yMin
            &&  pos_y_rel < yMax
            ) return true;
            return false;
        }
        if (InRange(0,480, 0,256) || InRange(160,480, 256,384)) return Region.AncientRuins;
        if (InRange(0,160, 256,768) || InRange(160,480, 384,768) || InRange(480,640, 512,896)) return Region.TarmRuins;
        if (InRange(480,640, 0,384)) return Region.NorthernPeak;
        if (InRange(480,800, 384,512) || InRange(640,800, 512,640)) return Region.NorthernPeakAccess;
        if (InRange(640,1280, 0,384) || InRange(800,1280, 384,512)) return Region.TempleRemains;
        if (InRange(1280,1760, 0,512)) return Region.GoronMountain;
        if (InRange(1760,2560, 0,384) || InRange(1760,2080, 384,512)) return Region.MtCucco;
        if (InRange(0,480, 768,1664) || InRange(480,640, 896,1152)) return Region.SpoolSwamp;
        if (InRange(800,960, 512,640) || InRange(640,960, 640,768) || InRange(640,1440, 768,1024) || InRange(640,1280, 1024,1152) || InRange(480,960, 1152,1536)) return Region.HolodrumPlain;
        if (InRange(960,2080, 512,640) || InRange(960,1760, 640,768) || InRange(1440,1760, 768,1024)) return Region.NatzuRegion;
        if (InRange(1760,2080, 640,896) || InRange(1760,1920, 896, 1024)) return Region.MoblinsKeep;
        if (InRange(2240,2560, 384,512) || InRange(2080,2560, 512,896)) return Region.SunkenCity;
        if (InRange(1280,1760, 1024,1152) || InRange(960,1760,1152,1536)) return Region.EyeglassLake;
        if (InRange(1600,1760, 1536,1920) || InRange(1760,1920, 1024,1920) || InRange(1920,2080, 896,1664) || InRange(2080,2240, 1152,1408) || InRange(2240,2400, 1280,1408) || InRange(2400,2560, 1024,1408)) return Region.EasternSuburbs;
        if (InRange(2080,2560, 896,1024) || InRange(2080,2400, 1024,1152) || InRange(2240,2400, 1152,1280)) return Region.WoodsOfWinter;
        if (InRange(480,800, 1536,1664) || InRange(0,960, 1664,1920) || InRange(0,800, 1920,2048)) return Region.WesternCoast;
        if (InRange(800,960, 1536,1664) || InRange(960,1600, 1536,2048) || InRange(800,960, 1920,2048)) return Region.HoronVillage;
        if (InRange(1600,2560, 1920,2048) || InRange(1920,2560, 1664,1920) || InRange(2080,2560, 1408,1664)) return Region.SamasaDesert;    
    }

    function Holodrum_HighlightRegion (newRegion) {
    //Shroud previously selected region
        if (_region != undefined) _region.tileIndices.forEach((i)=>{Holodrum.screenCtnr.children[i].classList.add("shroud");});
    //De-shroud newly selected region
        newRegion.tileIndices.forEach((i)=>{Holodrum.screenCtnr.children[i].classList.remove("shroud");});
        console.log(`Highlighting region ${newRegion.id}`);
    /*
        function DrawPath(path = []) {
            ctx.beginPath();
            ctx.moveTo(path[0], path[1]);
            for (let i = 2; i < path.length; i+=2) {
                ctx.lineTo(path[i], path[i+1]);
                ctx.stroke();
            }
            ctx.lineTo(path[0], path[1]);
            ctx.stroke();
        }
        ctx = Holodrum.overlayCanvas.getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;
        ctx.clearRect(0,0,Holodrum.overlayCanvas.width, Holodrum.overlayCanvas.height);
        switch (_region) {
            case Region.AncientRuins: DrawPath([0,0, 480,0, 480,384, 160,384, 160,256, 0,256]); return;
            case Region.TarmRuins: DrawPath([0,256, 160,256, 160,384, 480,384, 480,512, 640,512, 640,896, 480,896, 480,768, 0,768]); return;
            case Region.NorthernPeak: DrawPath([480,0, 640,0, 640,384, 480,384]); return;
            case Region.NorthernPeakAccess: DrawPath([480,384, 800,384, 800,640, 640,640, 640,512, 480,512]); return;
            case Region.TempleRemains: DrawPath([640,0, 1280,0, 1280,512, 800,512, 800,384, 640,384]); return;
            case Region.GoronMountain: DrawPath([1280,0, 1760,0, 1760,512, 1280,512]); return;
            case Region.MtCucco: DrawPath([1760,0, 2560,0, 2560,384, 2240,384, 2240,512, 1760,512]); return;
            case Region.SpoolSwamp: DrawPath([0,768, 480,768, 480,896, 640,896, 640,1152, 480,1152, 480,1664, 0,1664]); return;
            case Region.HolodrumPlain: DrawPath([800,512, 960,512, 960,768, 1440,768, 1440,1024, 1280,1024, 1280,1152, 960,1152, 960,1536, 480,1536, 480,1152, 640,1152, 640,640, 800,640]); return;
            case Region.NatzuRegion: DrawPath([960,512, 2080,512, 2080,640, 1760,640, 1760,1024, 1440,1024, 1440,768, 960,768]); return;
            case Region.MoblinsKeep: DrawPath([1760,640, 2080,640, 2080,896, 1920,896, 1920,1024, 1760,1024]); return;
            case Region.SunkenCity: DrawPath([2240,384, 2560,384, 2560,896, 2080,896, 2080,512, 2240,512]); return;
            case Region.EyeglassLake: DrawPath([1280,1024, 1760,1024, 1760,1536, 960,1536, 960,1152, 1280,1152]); return;
            case Region.EasternSuburbs: DrawPath([1920,896, 2080,896, 2080,1152, 2240,1152, 2240,1280, 2400,1280, 2400,1024, 2560,1024, 2560,1408, 2080,1408, 2080,1664, 1920,1664, 1920,1920, 1600,1920, 1600,1536, 1760,1536, 1760,1024, 1920,1024]); return;
            case Region.WoodsOfWinter: DrawPath([2080,896, 2560,896, 2560,1024, 2400,1024, 2400,1280, 2240,1280, 2240,1152, 2080,1152]); return;
            case Region.WesternCoast: DrawPath([0,1664, 480,1664, 480,1536, 800,1536, 800,1664, 960,1664, 960,1920, 800,1920, 800,2048, 0,2048]); return;
            case Region.HoronVillage: DrawPath([800,1536, 1600,1536, 1600,2048, 800,2048, 800,1920, 960,1920, 960,1664, 800,1664]); return;
            case Region.SamasaDesert: DrawPath([2080,1408, 2560,1408, 2560,2048, 1600,2048, 1600,1920, 1920,1920, 1920,1664, 2080,1664]); return;
        }
        */
    }

    function Holodrum_HideOrDisplayMarkers (region) {
        switch (region) {
            case Region.AncientRuins: HideOrDisplay(Entrances_Holodrum.AncientRuins); break;
            case Region.TarmRuins: HideOrDisplay(Entrances_Holodrum.TarmRuins); break;
            case Region.NorthernPeak: HideOrDisplay(Entrances_Holodrum.NorthernPeak); break;
            case Region.NorthernPeakAccess: break;
            case Region.TempleRemains: HideOrDisplay(Entrances_Holodrum.TempleRemains); break;
            case Region.GoronMountain: HideOrDisplay(Entrances_Holodrum.GoronMountain); break;
            case Region.MtCucco: HideOrDisplay(Entrances_Holodrum.MtCucco); break;
            case Region.SpoolSwamp: HideOrDisplay(Entrances_Holodrum.SpoolSwamp); break;
            case Region.HolodrumPlain: HideOrDisplay(Entrances_Holodrum.HolodrumPlain); break;
            case Region.NatzuRegion:
                if (Region.NatzuRegion.state == 0) { HideOrDisplay(Entrances_Holodrum.NatzuPrairie); break; }
                if (Region.NatzuRegion.state == 1) { HideOrDisplay(Entrances_Holodrum.NatzuRiver); break; }
                if (Region.NatzuRegion.state == 2) { HideOrDisplay(Entrances_Holodrum.NatzuWasteland); break; }
            case Region.MoblinsKeep:
                if (Region.MoblinsKeep.state == 0) HideOrDisplay(Entrances_Holodrum.MoblinsKeep);
                break;
            case Region.SunkenCity: HideOrDisplay(Entrances_Holodrum.SunkenCity); break;
            case Region.EyeglassLake: HideOrDisplay(Entrances_Holodrum.NorthHoron); HideOrDisplay(Entrances_Holodrum.EyeglassLake); break;
            case Region.EasternSuburbs: HideOrDisplay(Entrances_Holodrum.EasternSuburbs); break;
            case Region.WoodsOfWinter: HideOrDisplay(Entrances_Holodrum.WoodsOfWinter); break;
            case Region.WesternCoast: HideOrDisplay(Entrances_Holodrum.Graveyard); HideOrDisplay(Entrances_Holodrum.WesternCoast); break;
            case Region.HoronVillage: HideOrDisplay(Entrances_Holodrum.HoronVillage); break;
            case Region.SamasaDesert: HideOrDisplay(Entrances_Holodrum.SamasaDesert); break;
        }
        function HideOrDisplay (entrRegion) {
            const start = GetEntrance0(entrRegion);
            const end = start+entrRegion.length;
            if (Holodrum.markerCtnr.children[start].classList.contains("marker-display")) {
                for (let i = start; i < end; i++) Holodrum.markerCtnr.children[i].classList.remove("marker-display");
            }
            else for (let i = start; i < end; i++) Holodrum.markerCtnr.children[i].classList.add("marker-display");
            return;
        }
        function GetEntrance0 (entrRegion) {
            const regionIndex = Object.values(Entrances_Holodrum).indexOf(entrRegion);
            let entr0 = 0;
            for (let i = 0; i < regionIndex; i++) {
                entr0 += Object.values(Entrances_Holodrum)[i].length;
            }
            return entr0;
        }
    }


