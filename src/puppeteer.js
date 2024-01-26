const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/screenshot", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const screenshot = await page.screenshot();
  await browser.close();

  res.contentType("image/png");
  res.send(screenshot);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
