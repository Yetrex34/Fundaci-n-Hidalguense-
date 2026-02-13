import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programas.html',
  styleUrls: ['./programas.css']
})
export class Programas {
  programas = [
    { 
      id: 1, 
      Title: 'Programa Principal',
      img: 'assets/Gif/areas.png', 
      alt: 'Programa Principal' 
    },
    { 
      id: 2, 
      Title: 'Objetivos',
      img: 'assets/Gif/objetivos.png', 
      alt: 'Programa Educativo' 
    },
    { 
      id: 3, 
      Title: 'Cultura del Emprendimiento',
      img: 'assets/Gif/Gif_Empre.gif', 
      alt: 'Programa Educativo' 
    },
    { 
      id: 4, 
      Title: 'Cultura de Salud',
      img: 'assets/Gif/Gif_Salud.gif', 
      alt: 'Programa de Salud' 
    },
    { 
      id: 5, 
      Title: 'Cultura de la paz',
      img: 'assets/Gif/Gif_Paz.gif', 
      alt: 'Programa Principal' 
    }
    
  ];
}