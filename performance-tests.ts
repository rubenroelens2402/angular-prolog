// performance-test.ts
import { desktopConfig } from 'lighthouse';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import { writeFile } from 'fs/promises';

async function runLighthouse(url: string): Promise<void> {
  const chrome = await chromeLauncher.launch();
  const options = {
    port: chrome.port,
  };

  const result = await lighthouse(
    url,
    options,
    desktopConfig
  );

  await writeFile('lhreport.html', result!.report);

  await chrome.kill();
}

const targetUrl = 'http://localhost:4200';
runLighthouse(targetUrl);
