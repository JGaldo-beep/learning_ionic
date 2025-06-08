import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-antonio',
  templateUrl: './antonio.page.html',
  styleUrls: ['./antonio.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonAlert, IonButton],
})
export class AntonioPage implements OnInit {
  alertButtons = ['Action'];

  constructor() {}

  ngOnInit() {}
}
