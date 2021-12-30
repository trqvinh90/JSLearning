abstract class Pet {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
   
    toString(): string {
        return `${this.name}(${this.type})`;
    }
}

enum FoodType {
    Meat,
    Vegetarian,
    RawFood
}

interface Food<Type> {
    food: Type;
    quantityPerDay: number;
    checkFoodQuality(food: Type, quantity: number): boolean;
}

class MyPet extends Pet implements Food<FoodType> {
    food: FoodType;
    quantityPerDay: number;

    constructor(name: string, type: string, food: FoodType, quantityPerDay: number) {
        super(name, type);
        this.food = food;
        this.quantityPerDay = quantityPerDay;
    }

    checkFoodQuality(food: FoodType, quantity: number): boolean {
        return this.food === food && this.quantityPerDay <= quantity;
    }
}

const dog: MyPet = new MyPet('Milu', 'dog', FoodType.Meat, 10);
dog.toString(); //Milu(dog)
dog.checkFoodQuality(FoodType.Vegetarian, 10); //false
dog.checkFoodQuality(FoodType.Meat, 5); //false
dog.checkFoodQuality(FoodType.Meat, 20); //true