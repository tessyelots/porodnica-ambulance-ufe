import { newSpecPage } from '@stencil/core/testing';
import { PorodnicaAmbulanceHomeApp } from '../porodnica-ambulance-home-app';

describe('porodnica-ambulance-home-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [PorodnicaAmbulanceHomeApp],
      html: `<porodnica-ambulance-home-app base-path="/"></porodnica-ambulance-home-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("porodnica-ambulance-home-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [PorodnicaAmbulanceHomeApp],
      html: `<porodnica-ambulance-home-app base-path="/ambulance-wl/"></porodnica-ambulance-home-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("porodnica-ambulance-home");
  });
});
