const { isEmpty, isValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validations tests suites - isValid", () => {
    it("should return false as the label less then 8 char", () => {
        const result = isValid("Lo8_");
        expect(result).toBe(false);
    });
    it("should return false as the label doesn't have a special char", () => {
        const result = isValid("Loazzzzzzz8");
        expect(result).toBe(false);
    });
    it("should return false as the label doesn't have a number", () => {
        const result = isValid("Loazzzzzzz_");
        expect(result).toBe(false);
    });
    it("should return true as the label is corect", () => {
        const result = isValid("Loazzzzzz8_");
        expect(result).toBe(true);
    });
});
