import { newSpecPage } from '@stencil/core/testing';
import { PorodnicaAmbulanceHome } from '../porodnica-ambulance-home';

describe('porodnica-ambulance-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PorodnicaAmbulanceHome],
      html: `<porodnica-ambulance-home></porodnica-ambulance-home>`,
    });
    expect(page.root).toEqualHtml(`
      <porodnica-ambulance-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </porodnica-ambulance-home>
    `);
  });
});
