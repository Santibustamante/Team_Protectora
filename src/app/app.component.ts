import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './Pages/galeria/galeria.component';


import { PortadaComponent } from './portada/portada.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { LoginComponent } from './login/login.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,GaleriaComponent,CommonModule],

  imports: [
    RouterOutlet,
    CommonModule,
    PortadaComponent,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    LoginComponent,
    EleccionComponent,
    HomeComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TeamProyecto_Final';
}