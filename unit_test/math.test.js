const amount = require("../math");

test("should calculate the total with tip", () => {
    const total = amount.calculateTip(100, 0.1);
    expect(total).toBe(110);
});

test("should calculate with default tip", () => {
    const total = amount.calculateTip(100);
    expect(total).toBe(125);
});