import { Component, OnInit } from '@angular/core';
import { Photo } from '../../modules/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {


  photos: Photo[]= [];  

}
