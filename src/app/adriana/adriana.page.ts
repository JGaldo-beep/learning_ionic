import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonIcon, IonButton } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-adriana',
  templateUrl: './adriana.page.html',
  styleUrls: ['./adriana.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon]
})
export class AdrianaPage implements OnInit {

  constructor() { 
    addIcons({ heart, logoApple, settingsSharp, star });
  }

  ngOnInit() {
  }

}
