const { test, expect } = require('@playwright/test');
const baseurl = "https://eventhub.rahulshettyacademy.com";

test.describe("Assignment 1 Tests", () => {
    test.beforeEach("Login setup", async ({ page }) => {
        // Navigating to the login page
        await page.goto(`${baseurl}/login`);
    });

    test("Login page load check", async ({ page }) => {
        // Asserting if the Sign in to Eventhub text is visible
        await expect(page.getByText("Sign in to EventHub")).toBeVisible();
        // Asserting if the email field with placeholder is visible
        await expect(page.getByPlaceholder("you@email.com")).toBeVisible();
        // Asserting if the sign in button is visible
        await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
    });

    test("Login page smoke test", async ({ page }) => {
        // Verifying if the password field is visible
        await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
        // Verifying if the url contains /login in it
        await expect(page).toHaveURL(/\/login/);
        // Asserting if the Sign in to Eventhub text is still visible
        await expect(page.getByText("Sign in to EventHub")).toBeVisible();
    });
});
