import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardContent,  IonImg,
  IonIcon,IonButton} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  cameraOutline,
  refreshOutline
} from 'ionicons/icons';

import { CamaraService } from '../services/camara';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardContent, IonImg,
  IonIcon,IonButton],
})
export class HomePage {
   imagen: string | null = null;

  constructor( private camaraService: CamaraService) {

     addIcons({
      cameraOutline,
      refreshOutline
    });
  }

    async abrirCamara() {

    const foto = await this.camaraService.tomarFoto();

    if (foto) {
      this.imagen = foto;
    }

    }
}
