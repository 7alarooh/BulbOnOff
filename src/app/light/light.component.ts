import { Component } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
  isLightOn = false;

  toggleLight() {
    this.isLightOn = !this.isLightOn;
  }

}
