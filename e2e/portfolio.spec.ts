import { expect, test } from '@playwright/test'

test.describe('Portfolio E2E', () => {
  test('navigation sections, filtre et modale projet', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('#hero')).toBeVisible()

    await page.getByRole('link', { name: 'Projets' }).first().click()
    await expect(page.locator('#projects')).toBeVisible()

    await page.getByRole('button', { name: 'react' }).click()
    await expect(page.getByText('Admin Analytics Dashboard')).toBeVisible()

    await page.getByText('Admin Analytics Dashboard').first().click()
    await expect(page.getByRole('heading', { name: 'Stack technique' })).toBeVisible()

    await page.getByRole('button', { name: 'Fermer la modale du projet' }).click()
    await expect(page.getByRole('heading', { name: 'Stack technique' })).toHaveCount(0)
  })

  test('menu mobile s’ouvre et affiche les liens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    await page.getByRole('button', { name: 'Ouvrir le menu' }).click()
    await expect(page.locator('header').getByRole('link', { name: 'Compétences' }).first()).toBeVisible()
    await expect(page.locator('header').getByRole('link', { name: 'Contact' }).first()).toBeVisible()
  })

  test('soumet le formulaire de contact avec mock Formspree', async ({ page }) => {
    let formspreeCalls = 0

    await page.route('https://formspree.io/**', async (route) => {
      formspreeCalls += 1
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    })

    await page.route('https://api.formspree.io/**', async (route) => {
      formspreeCalls += 1
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    })

    await page.goto('/')
    await page.getByRole('link', { name: 'Contact' }).first().click()
    const contactSection = page.locator('#contact')

    await contactSection.getByLabel('Nom').fill('Gabriel Revest')
    await contactSection.getByLabel('Email').fill('gabriel@example.com')
    await contactSection.getByLabel('Message').fill('Bonjour, je souhaite discuter d une mission freelance.')
    await contactSection.getByRole('button', { name: 'Envoyer le message' }).click()

    await expect
      .poll(() => formspreeCalls, { timeout: 10_000 })
      .toBeGreaterThan(0)
  })
})
