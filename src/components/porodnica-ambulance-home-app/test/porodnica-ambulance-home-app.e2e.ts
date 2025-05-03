import { newE2EPage } from '@stencil/core/testing';

describe('porodnica-ambulance-home-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<porodnica-ambulance-home-app></porodnica-ambulance-home-app>');

    const element = await page.find('porodnica-ambulance-home-app');
    expect(element).toHaveClass('hydrated');
  });
});
