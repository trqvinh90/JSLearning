var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pet = /** @class */ (function () {
    function Pet(name, type) {
        this.name = name;
        this.type = type;
    }
    Pet.prototype.toString = function () {
        return "".concat(this.name, "(").concat(this.type, ")");
    };
    return Pet;
}());
var FoodType;
(function (FoodType) {
    FoodType[FoodType["Meat"] = 0] = "Meat";
    FoodType[FoodType["Vegetarian"] = 1] = "Vegetarian";
    FoodType[FoodType["RawFood"] = 2] = "RawFood";
})(FoodType || (FoodType = {}));
var MyPet = /** @class */ (function (_super) {
    __extends(MyPet, _super);
    function MyPet(name, type, food, quantityPerDay) {
        var _this = _super.call(this, name, type) || this;
        _this.food = food;
        _this.quantityPerDay = quantityPerDay;
        return _this;
    }
    MyPet.prototype.checkFoodQuality = function (food, quantity) {
        return this.food === food && this.quantityPerDay <= quantity;
    };
    return MyPet;
}(Pet));
var dog = new MyPet('Milu', 'dog', FoodType.Meat, 10);
dog.toString(); //Milu(dog)
dog.checkFoodQuality(FoodType.Vegetarian, 10); //false
dog.checkFoodQuality(FoodType.Meat, 5); //false
dog.checkFoodQuality(FoodType.Meat, 20); //true
