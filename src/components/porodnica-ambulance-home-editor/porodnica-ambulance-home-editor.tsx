import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';
import { PorodnicaWaitingListApi, WaitingListEntry, Configuration } from '../../api/porodnica-ambulance-home';

@Component({
  tag: 'porodnica-ambulance-home-editor',
  styleUrl: 'porodnica-ambulance-home-editor.css',
  shadow: true,
})
export class PorodnicaAmbulanceHomeEditor {
  @Prop() entryId: string;
  @Prop() porodnicaId: string;
  @Prop() apiBase: string;

  @Event({eventName: "editor-closed"}) editorClosed: EventEmitter<string>;

  @State() isBorn: boolean = false;
  @State() birthDateTime: string = '';
  @State() entry: WaitingListEntry;
  @State() errorMessage:string;
  @State() isValid: boolean;

  private formElement: HTMLFormElement;

  async componentWillLoad() {
    this.getWaitingEntryAsync();
}

  handleBirthToggle = () => {
    this.isBorn = !this.isBorn;
  }

  handleDateTimeChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.birthDateTime = target.value;
  }

  private async getWaitingEntryAsync(): Promise<WaitingListEntry> {
    if(this.entryId === "@new") {
      this.isValid = false;
      this.entry = {
        id: "@new",
        patientId: "",
        waitingSince: new Date(Date.now()),
        estimatedLaborDate: new Date(Date.now()),
        gaveBirth: false,
      };
      return this.entry;
    }
    if ( !this.entryId ) {
      this.isValid = false;
      return undefined
    }
    try {
      const configuration = new Configuration({
      basePath: this.apiBase,
      });

      const waitingListApi = new PorodnicaWaitingListApi(configuration);

      const response = await waitingListApi.getWaitingListEntryRaw({porodnicaId: this.porodnicaId, entryId: this.entryId});

      if (response.raw.status < 299) {
          this.entry = await response.value();
          this.isValid = true;
      } else {
          this.errorMessage = `Cannot retrieve list of waiting patients: ${response.raw.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || "unknown"}`
    }
    return undefined;
  }

  render() {
    if(this.errorMessage) {
      return (
      <Host>
        <div class="error">{this.errorMessage}</div>
      </Host>
      )
  }
    return (
      <Host>
        <form ref={el => this.formElement = el}>
          <md-filled-text-field label="Meno a Priezvisko"
            required value={this.entry?.name}
            oninput={ (ev: InputEvent) => {
              if(this.entry) {this.entry.name = this.handleInputEvent(ev)}
            } }>
            <md-icon slot="leading-icon">person</md-icon>
          </md-filled-text-field>

          <md-filled-text-field label="Registračné číslo pacientky"
            required value={this.entry?.patientId}
            oninput={ (ev: InputEvent) => {
              if(this.entry) {this.entry.patientId = this.handleInputEvent(ev)}
            } }>
            <md-icon slot="leading-icon">fingerprint</md-icon>
          </md-filled-text-field>

          <md-filled-text-field label="Čas príchodu" disabled
            value={this.entry?.waitingSince}>
            <md-icon slot="leading-icon">watch_later</md-icon>
          </md-filled-text-field>

          <md-filled-text-field label="Odhadovaný čas pôrodu"
            value={this.entry?.estimatedLaborDate}
            oninput={ (ev: InputEvent) => {
              if(this.entry) {this.entry.estimatedLaborDate = new Date(this.handleInputEvent(ev))}
            } }>
            <md-icon slot="leading-icon">watch_later</md-icon>
          </md-filled-text-field>

          <div class="birth-container">
          <div class="birth-checkbox">
              <label>
                <md-switch 
                selected={this.entry?.gaveBirth} 
                onChange={this.handleBirthToggle}
                oninput = { (ev: InputEvent) => {
                  if(this.entry) {this.entry.gaveBirth = this.handleInputEvent(ev) == 'on'}
                } }>
                </md-switch> 
                Narodené?
              </label>
            </div>
            <div>
            {this.isBorn && 
              <div class="birth-datetime">
                <label>
                  Dátum a čas narodenia:
                  <input 
                    type="datetime-local" 
                    value={this.birthDateTime}
                    onChange={this.handleDateTimeChange}
                  />
                </label>
              </div>
            }
            </div>
          </div>
        </form>

          <md-divider></md-divider>
          <div class="actions">
            <md-filled-tonal-button id="delete" disabled={!this.entry || this.entry?.id === "@new" }
              onClick={() => this.deleteEntry()} >
              <md-icon slot="icon">delete</md-icon>
              Zmazať
            </md-filled-tonal-button>
            <span class="stretch-fill"></span>
            <md-outlined-button id="cancel"
              onClick={() => this.editorClosed.emit("cancel")}>
              Zrušiť
            </md-outlined-button>
            <md-filled-button id="confirm" disabled={ !this.isValid }
              onClick={() => this.updateEntry() }>
              <md-icon slot="icon">save</md-icon>
              Uložiť
            </md-filled-button>
          </div>
    </Host>
    );
  }

  private handleInputEvent( ev: InputEvent): string {
    const target = ev.target as HTMLInputElement;
    // check validity of elements
    this.isValid = true;
    for (let i = 0; i < this.formElement.children.length; i++) {
        const element = this.formElement.children[i]
        if ("reportValidity" in element) {
        const valid = (element as HTMLInputElement).reportValidity();
        this.isValid &&= valid;
        }
    }
    return target.value
  }
  
  private async updateEntry() {
    try {
      const configuration = new Configuration({
        basePath: this.apiBase,
      });
  
      const waitingListApi = new PorodnicaWaitingListApi(configuration);
  
      const response = await waitingListApi.updateWaitingListEntryRaw({porodnicaId: this.porodnicaId, entryId: this.entryId, waitingListEntry: this.entry});
  
      if (response.raw.status < 299) {
        this.editorClosed.emit("store")
      } else {
        this.errorMessage = `Cannot store entry: ${response.raw.statusText}`
      }
    } catch (err: any) {
      this.errorMessage = `Cannot store entry: ${err.message || "unknown"}`
    }
  }
  
  private async deleteEntry() {
    try {
      const configuration = new Configuration({
        basePath: this.apiBase,
      });
  
      const waitingListApi = new PorodnicaWaitingListApi(configuration);
  
      const response = this.entryId == "@new" ?
      await waitingListApi.createWaitingListEntryRaw({porodnicaId: this.porodnicaId, waitingListEntry: this.entry}) :
      await waitingListApi.updateWaitingListEntryRaw({porodnicaId: this.porodnicaId, entryId: this.entryId, waitingListEntry: this.entry});
        if (response.raw.status < 299) {
        this.editorClosed.emit("delete")
        } else {
        this.errorMessage = `Cannot delete entry: ${response.raw.statusText}`
        }
    } catch (err: any) {
        this.errorMessage = `Cannot delete entry: ${err.message || "unknown"}`
    }
  }
}
