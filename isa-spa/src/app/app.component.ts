import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface Tratamiento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  
  albumsId = [1 ,2, 3]
  title = 'isa-spa';
  tratamientos: Tratamiento[] = [
    {value: 'Limpieza facial', viewValue: 'Limpieza facial'},
    {value: 'Sesión de masaje', viewValue: 'Sesión de masaje'},
    {value: 'Plasma', viewValue: 'Plasma'}
  ];

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh); 
  }


}
