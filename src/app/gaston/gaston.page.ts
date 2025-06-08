import { Component } from '@angular/core';
import { IonAlert, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gaston',
  templateUrl: './gaston.page.html',
  styleUrls: ['./gaston.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule
  ]
})
export class GastonPage {
  isAlertOpen = false;
  alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
