import { Weapon } from "./Weapon";

const MAX_POLISH_PERCENT = 0.25;

export class Sword extends Weapon {    
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        this.damageModifier += this.MODIFIER_CHANGE_RATE;
        if ((this.damageModifier / this.baseDamage) > MAX_POLISH_PERCENT) {
            this.damageModifier = this.baseDamage * MAX_POLISH_PERCENT;
        }
    }
}