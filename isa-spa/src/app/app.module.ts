import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './materials.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './components/photos/photos.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    TestimoniosComponent,
    TratamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
