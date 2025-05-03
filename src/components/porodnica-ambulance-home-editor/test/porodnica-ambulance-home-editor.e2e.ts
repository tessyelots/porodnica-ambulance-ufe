import { newE2EPage } from '@stencil/core/testing';

describe('porodnica-ambulance-home-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<porodnica-ambulance-home-editor></porodnica-ambulance-home-editor>');

    const element = await page.find('porodnica-ambulance-home-editor');
    expect(element).toHaveClass('hydrated');
  });
});
