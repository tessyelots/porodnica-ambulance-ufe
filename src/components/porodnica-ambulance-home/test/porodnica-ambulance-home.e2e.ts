import { newE2EPage } from '@stencil/core/testing';

describe('porodnica-ambulance-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<porodnica-ambulance-home></porodnica-ambulance-home>');

    const element = await page.find('porodnica-ambulance-home');
    expect(element).toHaveClass('hydrated');
  });
});
