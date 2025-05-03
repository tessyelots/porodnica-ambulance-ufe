import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'porodnica-ambulance-home-editor',
  styleUrl: 'porodnica-ambulance-home-editor.css',
  shadow: true,
})
export class PorodnicaAmbulanceHomeEditor {
  @Prop() entryId: string;

  @Event({eventName: "editor-closed"}) editorClosed: EventEmitter<string>;

  @State() isBorn: boolean = false;
  @State() birthDateTime: string = '';

  handleBirthToggle = () => {
    this.isBorn = !this.isBorn;
  }

  handleDateTimeChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.birthDateTime = target.value;
  }

  render() {
    return (
      <Host>
      <md-filled-text-field label="Meno a Priezvisko" >
        <md-icon slot="leading-icon">person</md-icon>
      </md-filled-text-field>

      <md-filled-text-field label="Registračné číslo pacientky" >
        <md-icon slot="leading-icon">fingerprint</md-icon>
      </md-filled-text-field>

      <md-filled-text-field label="Čas príchodu" disabled>
        <md-icon slot="leading-icon">watch_later</md-icon>
      </md-filled-text-field>

      <div class="birth-container">
      <div class="birth-checkbox">
          <label>
            <md-switch 
            selected={this.isBorn} 
            onChange={this.handleBirthToggle}
            >
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

      <md-divider></md-divider>
      <div class="actions">
        <md-filled-tonal-button id="delete"
          onClick={() => this.editorClosed.emit("delete")}>
          <md-icon slot="icon">delete</md-icon>
          Zmazať
        </md-filled-tonal-button>
        <span class="stretch-fill"></span>
        <md-outlined-button id="cancel"
          onClick={() => this.editorClosed.emit("cancel")}>
          Zrušiť
        </md-outlined-button>
        <md-filled-button id="confirm"
          onClick={() => this.editorClosed.emit("store")}>
          <md-icon slot="icon">save</md-icon>
          Uložiť
        </md-filled-button>
      </div>
    </Host>
    );
  }
}
