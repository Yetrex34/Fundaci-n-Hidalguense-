import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// 1. IMPORTAR EL SERVICIO (Asegúrate que la ruta sea correcta)
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;

  // 2. INYECTAR EL SERVICIO EN EL CONSTRUCTOR
  constructor(private alertService: AlertService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // 3. NUEVAS FUNCIONES PARA LOS BOTONES
  accionDonar() {
    this.closeMenu(); // Cerramos el menú móvil si está abierto
    this.alertService.mostrarMensaje(
      '¡Gracias por tu interés! ❤️', 
      'El sistema de donaciones seguras estará disponible próximamente.', 
      'info'
    );
  }

  accionCita() {
    this.closeMenu(); // Cerramos el menú móvil si está abierto
    this.alertService.mostrarMantenimiento();
  }
}