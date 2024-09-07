import { test, expect } from '@playwright/test';

test('clear display', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('1').click();
  await page.getByText('2').click();
  await page.getByText('C').click();

  await expect(page.getByTestId('display')).toHaveText('');
});

test('basic sum operation', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('1').click();
  await page.getByText('+').click();
  await page.getByText('2').click();
  await page.getByText('=').click();

  await expect(page.getByTestId('display')).toHaveText('3');
});

test('basic sub operation', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('1').click();
  await page.getByText('-').click();
  await page.getByText('2').click();
  await page.getByText('=').click();

  await expect(page.getByTestId('display')).toHaveText('-1');
});

test('basic multiply operation', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('2').click();
  await page.getByText('x').click();
  await page.getByText('3').click();
  await page.getByText('=').click();

  await expect(page.getByTestId('display')).toHaveText('6');
});

test('basic division operation', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('8').click();
  await page.getByText('/').click();
  await page.getByText('2').click();
  await page.getByText('=').click();

  await expect(page.getByTestId('display')).toHaveText('4');
});

test('turn number to negative', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('8').click();
  await page.getByText('±').click();

  await expect(page.getByTestId('display')).toHaveText('-8');
});

test('turn negative number to positive', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('8').click();
  await page.getByText('-').click();
  await page.getByText('9').click();
  await page.getByText('=').click();
  await page.getByText('±').click();

  await expect(page.getByTestId('display')).toHaveText('1');
});

test('percent of 5', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText('5').click();
  await page.getByText('%').click();

  await expect(page.getByTestId('display')).toHaveText('0.05');
});
