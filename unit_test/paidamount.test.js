const amount = require("../amount");
const temperature = require("../temperature");

test("should calculate the total with tip", () => {
    const total = amount.calculateTip(100, 0.1);
    expect(total).toBe(110);
});

test("should calculate with default tip", () => {
    const total = amount.calculateTip(100);
    expect(total).toBe(125);
});

test("Should convert 32F to 0C", () => {
    const convertedTemperature = temperature.fahrenheitToCelsius(32);
    expect(convertedTemperature).toBe(0);
});

test("Should convert 0C to 32F", () => {
    const convertedTemperature = temperature.celsiusToFahrenheit(0);
    expect(convertedTemperature).toBe(32);
});