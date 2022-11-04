import { Driver } from "selenium-webdriver/chrome"

const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("shuffleAarray should return an array", ()  => {
        expect(shuffleArray([1, 2, 3])).toBeDefined()
    }),
    test("Checks the length of the array passed in", () => {
        expect(shuffleArray([1, 2, 3])).toHaveLength(3)
    })
})