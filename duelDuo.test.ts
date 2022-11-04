
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("shows if the choices for other robots display when the draw button is clicked", async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
     const displayed = await driver.findElement(By.id('choices')).isDisplayed()
    expect(displayed).toBe(true)
})

test("Shows that if you click the add to duo button it will display the div with id player-duo",async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(4000)
    await driver.findElement(By.xpath('//button[contains(text(), "Add to Duo")]')).click()
    await driver.sleep(3000)
    let displayed = await driver.findElement(By.id('player-duo')).isDisplayed()    
    expect(displayed).toBe(true)

})