import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource
} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  async tomarFoto(): Promise<string | null> {

    try {

      const imagen = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      return imagen.webPath ?? null;

    } catch (error) {

      console.error('Error al utilizar la cámara:', error);
      return null;

    }
  }
}