import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

async function waitForDialog(page: import('@playwright/test').Page) {
  await page.getByRole('dialog').evaluate(async (dialog) => {
    await Promise.all(
      dialog
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished),
    )
  })
}

test('portfolio navigation works on desktop and mobile', async ({
  page,
  isMobile,
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', {
      name: 'Photographer Liubov Kulyk',
      exact: true,
    }),
  ).toBeVisible()
  if (isMobile) {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await waitForDialog(page)
    await page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'About me', exact: true })
      .click()
  } else {
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'About me', exact: true })
      .click()
  }
  await expect(page).toHaveURL(/\/about$/)
  await expect(
    page.getByRole('heading', { name: 'Liubov Kulyk. Your story, in focus.' }),
  ).toBeVisible()
  await page.reload()
  await expect(page).toHaveTitle(
    'About Liubov Kulyk | Photographer in Switzerland',
  )
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  await page
    .getByRole('link', { name: 'View photographs', exact: true })
    .click()
  await expect(page).toHaveURL(/\/#photographs$/)
  await expect(
    page.getByRole('heading', { name: 'Selected photographs' }),
  ).toBeInViewport()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
})

test('photography carousel navigates all three slides and loops', async ({
  page,
}) => {
  await page.goto('/')
  const carousel = page.getByRole('region', { name: 'Featured photography' })
  await carousel.getByRole('button', { name: 'Next slide' }).click()
  await expect(
    carousel.getByRole('heading', {
      name: 'Keep your best memories for life.',
    }),
  ).toBeVisible()
  await carousel.getByRole('button', { name: 'Next slide' }).press('ArrowRight')
  await expect(
    carousel.getByRole('heading', {
      name: 'You create memories. I capture them.',
    }),
  ).toBeVisible()
  await carousel.getByRole('button', { name: 'Next slide' }).click()
  await expect(
    carousel.getByRole('heading', {
      name: 'Photographer Liubov Kulyk',
      exact: true,
    }),
  ).toBeVisible()
  await carousel.getByRole('button', { name: 'Go to slide 3' }).click()
  await expect(
    carousel.getByRole('button', { name: 'Go to slide 3' }),
  ).toHaveAttribute('aria-pressed', 'true')
})

test('gallery opens accessible photo viewer and contacts are usable', async ({
  page,
}) => {
  await page.goto('/')
  const photo = page.getByRole('button', { name: /View photograph 1:/ })
  await photo.click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await waitForDialog(page)
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await expect(photo).toBeFocused()
  const contacts = page.locator('#contacts')
  await expect(
    contacts.getByRole('link', { name: '+41 79 819 78 75' }),
  ).toHaveAttribute('href', 'tel:+41798197875')
  await expect(
    contacts.getByRole('link', { name: 'lumbrya@gmail.com' }),
  ).toHaveAttribute('href', 'mailto:lumbrya@gmail.com')
  await page.locator('#contacts').scrollIntoViewIfNeeded()
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  const broken = await page
    .locator('img')
    .evaluateAll((images) =>
      images
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.src),
    )
  expect(broken).toEqual([])
})
