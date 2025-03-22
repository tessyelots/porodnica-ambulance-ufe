import { newSpecPage } from '@stencil/core/testing';
import { PorodnicaAmbulanceHome } from '../porodnica-ambulance-home';

describe('porodnica-ambulance-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PorodnicaAmbulanceHome],
      html: `<porodnica-ambulance-home></porodnica-ambulance-home>`,
    });
    const wlList = page.rootInstance as PorodnicaAmbulanceHome;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
