import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'; 
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-adriana',
  templateUrl: './adriana.page.html',
  styleUrls: ['./adriana.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class AdrianaPage implements OnInit {

  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star });
  }

  ngOnInit() {
  }

}