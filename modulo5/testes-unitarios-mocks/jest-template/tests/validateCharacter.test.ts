import { validateCharacter } from "../src/Character/validateCharacter "



describe("Unitary validateChacarter test", () => {
    test("Should return false for empty name", () => {

        const result = validateCharacter({

            name: "",
            life: 1000,
            strength: 100,
            defense: 10
        })
        expect(result).toBe(false)
    })
})


describe("Unitary validateChacarter test", () => {
    test("Should return false for life is zero", () => {

        const result = validateCharacter({

            name: "blanka",
            life: 0,
            strength: 100,
            defense: 10
        })
        expect(result).toBe(false)
    })
})
describe("Unitary validateChacarter test", () => {
    test("Should return false for strength is zero", () => {

        const result = validateCharacter({

            name: "blanka",
            life: 1000,
            strength: 0,
            defense: 10
        })
        expect(result).toBe(false)
    })
})
describe("Unitary validateChacarter test", () => {
    test("Should return false for defense is zero", () => {

        const result = validateCharacter({

            name: "blanka",
            life: 1000,
            strength: 100,
            defense: 0
        })
        expect(result).toBe(false)
    })
})
describe(" multiple validateChacarter test", () => {
    test("Should return false for life,strength, defense is zero or negative ", () => {

        const result = validateCharacter({

            name: "blanka",
            life: -100,
            strength: 100,
            defense: 10
        })
        expect(result).toBe(false)
    })
})
describe(" Unitary validateChacarter test", () => {
    test("Should return true for life,strength, defense is not zero or negative ", () => {

        const result = validateCharacter({

            name: "blanka",
            life: 1000,
            strength: 100,
            defense: 10
        })
        expect(result).toBe(true)
    })
})