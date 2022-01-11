import { Item } from './Item';

export abstract class Weapon extends Item {
    readonly MODIFIER_CHANGE_RATE: number = 0.05;

    baseDamage: number;
    damageModifier: number;
    baseDurability: number;
    durabilityModifier: number;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = this.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = this.MODIFIER_CHANGE_RATE;
    }

    public getDamage() {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability() {
        const totalDurability = this.baseDurability + this.durabilityModifier;
        return totalDurability > 1 ? 1 : totalDurability;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${this.getDurability() * 100}%`;
    }

    public use(): string {
        let stringOutput: string;
        if (this.getDurability() > 0) {
            stringOutput = `You use the ${this.name}, dealing ${this.getDamage().toFixed(2)} points of damage.`;
            this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;
            if (this.getDurability() <= 0) {
                stringOutput += `\nThe ${this.name} breaks.`;
            }
        } else {
            stringOutput = `You can't use the ${this.name}, it is broken.`;
        }
        return stringOutput;
    }

    public abstract polish(): void;
}
