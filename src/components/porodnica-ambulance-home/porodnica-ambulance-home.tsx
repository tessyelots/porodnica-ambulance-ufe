import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';

@Component({
  tag: 'porodnica-ambulance-home',
  styleUrl: 'porodnica-ambulance-home.css',
  shadow: true,
})
export class PorodnicaAmbulanceHome {
  @Event({ eventName: "entry-clicked"}) entryClicked: EventEmitter<string>;

  waitingPatients: any[];

  private async getWaitingPatientsAsync() {
    return await Promise.resolve([
      {
        name: 'Anna Nováková please please',
        patientId: '10001',
        arrivedAt: new Date(Date.now() - 65 * 60000),
        estimatedLaborDate: new Date(Date.now() + 7 * 24 * 60 * 60000),
        gaveBirth: false
      },
      {
        name: 'Mária Kováčová',
        patientId: '10096',
        arrivedAt: new Date(Date.now() - 30 * 60000),
        estimatedLaborDate: new Date(Date.now() + 2 * 24 * 60 * 60000),
        gaveBirth: false
      },
      {
        name: 'Eva Horváthová',
        patientId: '10028',
        arrivedAt: new Date(Date.now() - 120 * 60000),
        estimatedLaborDate: new Date(Date.now() - 1 * 24 * 60 * 60000),
        gaveBirth: true
      }
    ]);
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
        {this.waitingPatients.map((patient, index) =>
            <md-list-item onClick={ () => {this.entryClicked.emit(index.toString()); console.log(index)}}>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{"Predpokladaný porod: " + patient.estimatedLaborDate?.toLocaleString()}</div>
                <md-icon slot="start">person</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }
}
