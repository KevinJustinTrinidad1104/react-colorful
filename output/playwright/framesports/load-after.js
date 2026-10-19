async page => {
      await page.unrouteAll();
      await page.addInitScript(() => { Math.random = () => 0.65; });
      await page.route('http://localhost:1234/', route => route.fulfill({path: "/Users/clairevargas/Desktop/Kev_Proj/react-colorful/output/playwright/framesports/after.html",contentType:'text/html'}));
      await page.route('**/recording-after.js', route => route.fulfill({path:"/Users/clairevargas/Desktop/Kev_Proj/react-colorful/output/playwright/framesports/after.js",contentType:'application/javascript'}));
      await page.goto('http://localhost:1234/');
      await page.evaluate(() => document.fonts.ready);
      await page.setViewportSize({width:1240,height:680});
      await page.evaluate(() => window.scrollTo(0,0));
    }