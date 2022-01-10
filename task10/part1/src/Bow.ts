import { Weapon } from "./Weapon";

export class Bow extends Weapon {    
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        this._damageModifier += this.MODIFIER_CHANGE_RATE;
        if (this._damageModifier > 1) {
            this._damageModifier = 1;
        }
    }
}