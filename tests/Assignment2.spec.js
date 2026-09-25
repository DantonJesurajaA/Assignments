const { test, expect } = require('@playwright/test');

test("Smoke Test", async ({ page }) => {
    await page.goto("/");
    // Asserting the page title
    await expect(page).toHaveTitle(/^EventHub/);
    //Asserting if email field is visible
    await expect(page.getByLabel("Email")).toBeVisible();
    //Asserting signin button is visible
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();

}


)

test("Isolated Flow", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    //Asserting if sign in to event hub heading is visible
    await expect(page.locator("h1.text-xl")).toHaveText(/Sign in to EventHub/);
    //Asserting if the email field starts empty
    await expect(page.getByRole("textbox",{name:"Email"})).toHaveValue("");
    await context.close();
})