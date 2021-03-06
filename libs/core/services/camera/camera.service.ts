import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable()
export class CameraService {

  async takePicture(mode: 'Base64' | 'Uri' = 'Base64', quality = 90, allowEditing = true) {
    const perm = await Camera.requestPermissions()// .catch(err => err);
    console.log('perm result: ', perm.results);
    const image = await Camera.getPhoto({
      quality,
      allowEditing,
      resultType: CameraResultType[mode],
      source: CameraSource.Camera
    })// .catch(err => err) // do no catch error to send to main Error Handler
    console.log('camera service: ', image);
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image[mode.toLowerCase() + 'String'];
    // Can be set to the src of an image now
    return imageUrl;
  }
}