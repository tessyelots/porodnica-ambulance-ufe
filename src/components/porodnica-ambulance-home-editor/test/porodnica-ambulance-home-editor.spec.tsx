import { newSpecPage } from '@stencil/core/testing';
import { PorodnicaAmbulanceHomeEditor } from '../porodnica-ambulance-home-editor';

describe('Porodnica-ambulance-home-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [PorodnicaAmbulanceHomeEditor],
      html: `<porodnica-ambulance-home-editor entry-id="@new"></porodnica-ambulance-home-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});