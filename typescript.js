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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    Car.prototype.setPower = function () {
        console.log('the power is set');
        this.power = true;
    };
    ;
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 10000;
        _this.description = 'BMW';
        _this.power = false;
        return _this;
    }
    BMW.prototype.cost = function () {
        return this.price;
    };
    return BMW;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var AddDoor = /** @class */ (function (_super) {
    __extends(AddDoor, _super);
    function AddDoor(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        _this.price = _this.decoratedCar.price + 2000;
        return _this;
    }
    AddDoor.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + '  added with 5 doors ,';
    };
    AddDoor.prototype.cost = function () {
        return this.price;
    };
    return AddDoor;
}(CarOptions));
var AddColor = /** @class */ (function (_super) {
    __extends(AddColor, _super);
    function AddColor(car, color) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        _this.color = color;
        _this.price = _this.decoratedCar.price + 3000;
        return _this;
    }
    AddColor.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ("  decorated with " + this.color + " ");
    };
    AddColor.prototype.cost = function () {
        return this.price;
    };
    return AddColor;
}(CarOptions));
var AddHybridEngine = /** @class */ (function (_super) {
    __extends(AddHybridEngine, _super);
    function AddHybridEngine(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        _this.price = _this.decoratedCar.price + 6000;
        return _this;
    }
    AddHybridEngine.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ("and price of " + this.price + "  and your car has hybrid engine");
    };
    AddHybridEngine.prototype.cost = function () {
        return this.price;
    };
    return AddHybridEngine;
}(CarOptions));
var carr = new BMW();
carr.setPower();
carr = new AddDoor(carr);
carr = new AddColor(carr, 'green');
carr = new AddHybridEngine(carr);
console.log(carr.getDescription());
