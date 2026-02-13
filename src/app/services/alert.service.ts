import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'; // Importamos la librería que acabas de instalar

@Injectable({
  providedIn: 'root' // Esto hace que el servicio funcione en TODA la app
})
export class AlertService {

  constructor() { }

  // Función 1: MANTENIMIENTO (La que usaremos ahora)
  mostrarMantenimiento() {
    Swal.fire({
      icon: 'warning', // Icono de advertencia amarillo
      title: 'Función en Mantenimiento',
      text: 'Estamos trabajando para mejorar esta sección. Por favor intenta más tarde.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#980204', // Tu color rojo institucional
      background: '#fff',
      iconColor: '#f8bb86'
    });
  }

  // Función 2: ALERTA GENÉRICA (Para mensajes futuros)
  mostrarMensaje(titulo: string, texto: string, tipo: 'success' | 'error' | 'warning' | 'info' = 'info') {
    Swal.fire({
      icon: tipo,
      title: titulo,
      text: texto,
      confirmButtonColor: '#980204'
    });
  }
}