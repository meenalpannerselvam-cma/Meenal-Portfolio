const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\pcnna\\.gemini\\antigravity\\brain\\ce77ce4d-8d85-46fd-a7e5-13c94c69a821';
const BASE_URL = 'http://localhost:5173';

async function run() {
  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-shot-'));

  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    pipe: true,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // 1. Check Responsive at 1440px desktop
  console.log('--- Testing Desktop (1440px) ---');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Check overflow at 1440px
  const overflow1440 = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Overflow at 1440px:', overflow1440);

  // Take Full Desktop Page Screenshot
  const fullPagePath = path.join(ARTIFACT_DIR, 'screenshot-full-1440px.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log('Saved:', fullPagePath);

  // Capture individual sections
  const sections = [
    { id: 'home', name: '01-hero.png' },
    { id: 'about', name: '02-about.png' },
    { id: 'toolkit', name: '03-toolkit.png' },
    { id: 'experience', name: '04-experience.png' },
    { id: 'projects', name: '05-projects.png' },
    { id: 'playground', name: '06-playground.png' },
    { id: 'education', name: '07-education.png' },
    { id: 'contact', name: '08-contact.png' },
  ];

  for (const sec of sections) {
    const el = await page.$(`#${sec.id}`);
    if (el) {
      await page.evaluate(element => {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, el);
      await new Promise(r => setTimeout(r, 400));
      const secPath = path.join(ARTIFACT_DIR, sec.name);
      await el.screenshot({ path: secPath });
      console.log(`Saved section #${sec.id} to ${sec.name}`);
    } else {
      console.warn(`Section #${sec.id} not found`);
    }
  }

  // 2. Check Tablet at 768px
  console.log('--- Testing Tablet (768px) ---');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  const overflow768 = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Overflow at 768px:', overflow768);

  const tabletPath = path.join(ARTIFACT_DIR, '09-tablet-768px.png');
  await page.screenshot({ path: tabletPath });
  console.log('Saved:', tabletPath);

  // 3. Check Mobile at 390px (iPhone 12/13/14 standard viewport)
  console.log('--- Testing Mobile (390px) ---');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  const overflow390 = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Overflow at 390px:', overflow390);

  const mobilePath = path.join(ARTIFACT_DIR, '10-mobile-390px.png');
  await page.screenshot({ path: mobilePath });
  console.log('Saved:', mobilePath);

  // Test interactive flip card click on mobile
  console.log('--- Testing Interactive Elements ---');
  const firstFlipCard = await page.$('[role="button"][aria-label*="Advanced Excel"]');
  if (firstFlipCard) {
    await firstFlipCard.click();
    await new Promise(r => setTimeout(r, 500));
    const flipCardState = await page.evaluate(el => el.getAttribute('aria-expanded'), firstFlipCard);
    console.log('First FlipCard aria-expanded after click:', flipCardState);
  }

  await browser.close();
  console.log('--- ALL VERIFICATION COMPLETE ---');
}

run().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
