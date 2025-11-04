class Location {
	constructor(
		area,				// "Area"
		name,				// "Name of Location".
		type_,				// See Types below, or use your own, e.g."Chimney", "Secret Entrance", etc.
		gridRef_x,			// Zero-based index starting from the left-hand side of the map.
		gridRef_y,			// Zero based index starting from the top of the map.
		tilePos_x,			// Zero-based index starting from the left-hand tile of the grid cell.
		tilePos_y,			// Zero-based index starting from the top tile of the grid cell.
		labelPos			// By chaining together characters 'T' (Top), 'B' (Bottom), 'L' (Left), and 'R' (Right), the label can be offset by a fixed amount for each character (multiples/duplicates allowed).
	) {
		this.area = area;
		this.name = name;
		this.gridRef_x = gridRef_x;
		this.gridRef_y = gridRef_y;
		this.tilePos_x = tilePos_x;
		this.tilePos_y = tilePos_y;
		this.type_ = type_;
		this.labelPos = labelPos;
	}
	static Type = class {
		static Single = Symbol("Single");
		static Generic = Symbol("Generic");				// Locations marked generic will be removed from the search options, but will still be selectable on the map. A selection of generic labels will be made available instead.
		static Portal = Symbol("Portal");
		static Secret = Symbol("Secret");				// Single entrances that appear to have no use...
		static Con_Entrance = Symbol("Entrance");
		static Con_Exit = Symbol("Exit");
		static Con_Dropdown = Symbol("Dropdown");
		static Con_North = Symbol("North");
		static Con_South = Symbol("South");
		static Con_East = Symbol("East");
		static Con_West = Symbol("West");
		static Con_Upper = Symbol("Upper");
		static Con_Lower = Symbol("Lower");
		static Con_Right = Symbol("Right");
		static Con_Left = Symbol("Left");
		static Con_Middle = Symbol("Middle");
		static Con_A = Symbol("A");
		static Con_B = Symbol("B");
		static Con_C = Symbol("C");
		static Con_D = Symbol("D");
		static Con_E = Symbol("E");
	}
}

Object.defineProperties(Location.prototype, {
	gridPos_x: {
		get: function() {
			return this.gridRef_x;
		}
	},
	gridPos_y: {
		get: function() {
			return this.gridRef_y;
		}
	},
	gridReference: {
		get: function() {
			const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			let str_y;
			if (this.gridRef_y+1 < 10) str_y = `0${this.gridRef_y+1}`;
			else str_y = `${this.gridRef_y+1}`;
			return `${alpha[this.gridRef_x]}${str_y}`;
		}
	},
	hasPreDefinedType: {
		get: function() {
			if (this.type_ instanceof Location.Type || typeof this.type_ === "symbol") {
				if (this.type_ === undefined) {
					throw new Error(`Unrecognised type - check that ${this.address} has been given a valid type.`);
				}
				return true;
			}
		}
	},
	address: {
		get: function() {
			return this.area+" - "+this.name;
		}
	},
	type: {
		get: function() {
			if (this.hasPreDefinedType) {
				return this.type_.description;
			}
			return this.type_;
		}
	},
	fullAddress: {
		get: function() {
		//If is a defined type...
			if (this.hasPreDefinedType) {
				if (
					this.type_ != Location.Type.Single
				&&	this.type_ != Location.Type.Generic
				&&	this.type_ != Location.Type.Portal
				&&	this.type_ != Location.Type.Secret
				) {
					return this.address+" - "+this.type_.description;
				}
				return this.address;
			}
		//Else assume a string:
			return this.area+" - "+this.name+" - "+this.type_;
		}
	},
	displayName: {
		get: function() {
			if (this.hasPreDefinedType) {
				if (
					this.type_ != Location.Type.Single
				&&	this.type_ != Location.Type.Generic
				&&	this.type_ != Location.Type.Portal
				&&	this.type_ != Location.Type.Secret
				) {
					return this.name+" - "+this.type_.description;
				}
			}
			return this.name;
		} 
	},
/*
//The trouble is you can't tell if it's a connector or not if the type is a string.
	isConnector: {
		get: function() {
			if (this.type_ instanceof Location.Type || typeof this.type_ === "symbol") {
				switch (this.type_) {
					default:				return true;
					case Type.Single:		return false;
					case Type.Generic:		return false;
					case Type.Portal:		return false;
					case Type.Secret:		return false;
				}
			}
			return true;
		}
	},
*/
	isPortal: {
		get: function() {
			return this.type == Type.Portal ? true : false;
		}
	}
});