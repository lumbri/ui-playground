import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('starter UI is interactive and accessible', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'UI Playground' })).toBeVisible()
  await page.getByRole('button', { name: 'Count: 0', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Count: 1', exact: true })).toBeVisible()
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})
