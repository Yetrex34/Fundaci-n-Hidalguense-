import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class Galeria {

  // VARIABLES DE PAGINACIÓN
  paginaActual: number = 1;
  elementosPorPagina: number = 6; // ¿Cuántas fotos quieres ver por "apartado"?

  // VARIABLES DEL MODAL
  selectedItem: any = null;
  ultimoElementoEnfocado: any;

  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('actionBtn') actionBtn!: ElementRef;

  // TU LISTA DE FOTOS (Aquí pon todas las que quieras)
  fotos= [
    {
      title: '¡TALLER DE MANUALIDADES EN FIELTRO!',
      description: 'Así vivimos nuestro reciente Taller de Manualidades en Fieltro. Fue una jornada increíble donde la creatividad no tuvo límites. No solo aprendimos técnicas de corte y costura, ¡creamos piezas únicas con alma!',
      image: 'assets/images/fundacion/FP_06_02_26_1.jpeg',
      link: 'https://www.facebook.com/share/p/186nW2BzLr/'
    },{
      title: '¡TALLER DE PANADERÍA Y REPOSTERÍA!',
      description: '¡Así se vivió nuestro taller de este 6 de febrero!. Pasamos de harina en las manos al deleite total con el pastel típico de Austria Sacher. Chocolate, risas y técnicas que marcan la diferencia.',
      image: 'assets/images/fundacion/F_06_02_26_2.jpeg',
      link: 'https://www.facebook.com/share/p/1AiLsTKdVm/'
    },{
      title: '¡TALLER DE  VIERNES DE CONSEJO TÉCNICO!',
      description: 'El pasado 30 de enero, nuestros peques transformaron cajas de cartón reciclado en magníficas casas. En este taller de Consejo Técnico, celebramos el reciclaje y el ingenio manual y creativo de los peques.',
      image: 'assets/images/fundacion/F01_30_01_26.jpg',
      link: 'https://www.facebook.com/share/p/17ps3V9jkM/'
    },
    {
      title: '¡TALLER DE COCINA Y DISFRUTA!',
      description: 'El 06 de enero, nuestras cocinas se llenaron de aroma , mantequilla y tradición. No solo aprendimos a preparar la clásica Rosca de Reyes, sino que compartimos risas, secretos culinarios y el placer de amasar con nuestras propias manos.',
      image: 'assets/images/fundacion/F02_06_01_26.png',
      link: 'https://www.facebook.com/share/p/1CEsQ7DbKt/'
    },
    {
      title: 'Taller de elaboración de mazapán',
      description: 'Aprende paso a paso a preparar este tradicional dulce artesanal.',
      image: 'assets/images/news/Mazapan.jpeg',
      link: 'https://www.facebook.com/share/p/1Ao6K8X5qf/'
    },
    {
      title: 'Taller: Arte en Miniatura',
      description: '¡Desarrolla tu creatividad y mejora tu motricidad fina mientras creas piezas únicas!',
      image: 'assets/images/news/Miniatura.jpeg',
      link: 'https://www.facebook.com/share/p/187SG48wMe/'
    },
    {
      title: 'Inglés para poder viajar',
      description: 'Aprende inglés práctico para tus viajes. Todos los jueves 05:00 a 07:00 pm.',
      image: 'assets/images/news/Ingles.jpeg',
      link: 'https://www.facebook.com/share/p/1AZ1wkLLQe/'
    },
    {
      title: 'CocinArte - Taller de cocina',
      description: 'Descubre el arte de la cocina con recetas de cocina salada, internacional, panadería y repostería.',
      image: 'assets/images/news/Comida.jpeg',
      link: 'https://www.facebook.com/share/p/1KqwNHxaRW/'
    },
    {
      title: 'Taller de Helado',
      description: 'Aprende a preparar deliciosos helados y disfruta una experiencia dulce y creativa.',
      image: 'assets/images/news/Helado.jpeg',
      link: 'https://www.facebook.com/share/p/1ASkRmu5Sk/'
    },
    {
      title: 'Manualidades en Fieltro',
      description: '¡Despierta tu creatividad y aprende a crear piezas únicas hechas a mano! En este taller conocerás técnicas básicas.',
      image: 'assets/images/news/Fieltro.jpeg',
      link: 'https://www.facebook.com/share/p/171Aom4i6W/'
    },
    {
      title: 'Inglés Básico–Intermedio',
      description: 'Speaking with Kids: ¡Es momento de dar el siguiente paso en el aprendizaje del inglés!',
      image: 'assets/images/news/Inglesbasico.jpeg',
      link: 'https://www.facebook.com/share/p/1BwAhoCs2q/'
    },
    {
      title: 'Inglés Kids – Básico',
      description: '¡Aprender inglés puede ser divertido! Invitamos a niñas y niños a nuestras clases de inglés para principiantes.',
      image: 'assets/images/news/Basicokids.jpeg',
      link: 'https://www.facebook.com/fundacion.hidalguenseac.5/posts/pfbid0zqsehEWMqgwzuyjZp8x6saZD3WaZr29spDpnhbpGEo1GKcEaqKSSzHveBuhWfRAel'
    },
    {
      title: 'Repostería con Corazón',
      description: 'Un taller especial para cocinar con amor y aprender deliciosas recetas en una experiencia única.',
      image: 'assets/images/news/Reposteriacorazon.jpeg',
      link: 'https://www.facebook.com/share/p/17unMTPUy9/'
    },
    {
      title: 'Taller de Acuarela',
      description: '¡Descubre el mundo de la acuarela! Te invitamos a nuestro Taller de Acuarela, un espacio creativo para aprender.',
      image: 'assets/images/news/Acuarela.jpeg',
      link: 'https://www.facebook.com/share/p/1KCRRRzGc8/'
    },
    {
      title: 'Taller de Pasta Flexible',
      description: 'Aprende a crear detalles lindos y divertidos para esas fechas especiales.',
      image: 'assets/images/news/Pastaflexible.jpeg',
      link: 'https://www.facebook.com/share/p/1AYkc8oYVZ/'
    },
    {
      title: 'Taller de Educación y Obediencia Canina',
      
      description: 'Acompáñanos en este taller impartido por el Psicólogo Ariel Sosa, donde aprenderás técnicas prácticas.',
      image: 'assets/images/news/Educacion canina.jpeg',
      link: 'https://www.facebook.com/share/p/17rBpz1Mdx/'
    },
    {
      title: 'Taller de Costura Básica',
      description: 'Corte y Confección, dirigido a personas interesadas en aprender los fundamentos del manejo de telas.',
      image: 'assets/images/news/Corte.jpeg',
      link: 'https://www.facebook.com/share/p/1N1zadp62g/'
    },
    {
      title: 'Consultas de Fisioterapia',
      description: 'Cuida tu cuerpo y mejora tu bienestar. Sesiones de 1 hora, dirigidas a la prevención, atención y rehabilitación física.',
      image: 'assets/images/news/Fisoterapia.jpeg',
      link: 'https://www.facebook.com/share/p/1BBfuhEs2c/'
    },
    {
      title: 'Taller de Elaboración de Cajeta',
      description: 'Descubre el proceso artesanal para preparar cajeta natural y envinada, ideal para aprender y emprender.',
      image: 'assets/images/news/Cajeta.jpeg',
      link: 'https://www.facebook.com/share/p/1BiZXV36D4/'
    },
    {
      title: 'Taller de Conversación en Inglés',
      description: '¡Mejora tu inglés conversando! Participa en nuestro taller y gana confianza al hablar en situaciones reales.',
      image: 'assets/images/news/mejoraingles.jpeg',
      link: 'https://www.facebook.com/share/p/1C8kYPPB36/'
    },
    {
      title: 'Taller de Decoración de Globos',
      description: 'Aprende desde cero y crea increíbles decoraciones para todo tipo de eventos.',
      image: 'assets/images/news/Globos.jpeg',
      link: 'https://www.facebook.com/share/p/17zcA1Ljrg/'
    },
    {
      title: 'Taller de Postres Saludables',
      description: 'Este enero, ¡endulza tu vida de manera saludable! Únete y aprende a preparar deliciosos postres.',
      image: 'assets/images/news/Postressaludables.jpeg',
      link: 'https://www.facebook.com/share/p/1GV4nE5iwt/'
    },
    {
      title: 'Cocina y Disfruta',
      description: 'Este enero, prepárate para aprender recetas deliciosas y tradicionales con la Chef Fernanda Téllez.',
      image: 'assets/images/news/CocinayDisfruta.jpeg',
      link: 'https://www.facebook.com/share/p/17hRQcEL1a/'
    },
    {
      title: 'TALLER DE HUERTOS VERTICALES',
      description: 'Te invitamos a nuestro Taller de Huertos Verticales, ideal para principiantes y amantes de la naturaleza.',
      image: 'assets/images/news/Huertos.jpeg',
      link: 'https://www.facebook.com/share/p/1ZkWuMgHEp/'
    }
  ];

  // --- LÓGICA DE PAGINACIÓN ---

  // Esto calcula cuántas páginas (apartados) necesitamos en total
  get totalPaginas(): number {
    return Math.ceil(this.fotos.length / this.elementosPorPagina);
  }

  // Esto genera un array de números [1, 2, 3...] para dibujar los botoncitos
  get paginasArray(): number[] {
    return Array(this.totalPaginas).fill(0).map((x, i) => i + 1);
  }

  // Esta es la magia: Recorta el array original y devuelve solo las fotos de la página actual
  get fotosVisibles() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    return this.fotos.slice(inicio, fin);
  }

  cambiarPagina(numeroPagina: number) {
    if (numeroPagina >= 1 && numeroPagina <= this.totalPaginas) {
      this.paginaActual = numeroPagina;
      // Opcional: Hacer scroll suave hacia arriba al cambiar de página
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  }

  // --- LÓGICA DEL MODAL (Igual que antes) ---

  openModal(item: any) {
    this.ultimoElementoEnfocado = document.activeElement;
    this.selectedItem = item;
    document.body.style.overflow = 'hidden'; 
    setTimeout(() => {
      if (this.closeBtn) this.closeBtn.nativeElement.focus();
    }, 10);
  }

  closeModal() {
    this.selectedItem = null;
    document.body.style.overflow = 'auto';
    if (this.ultimoElementoEnfocado) this.ultimoElementoEnfocado.focus();
  }

  navegarAlLink() {
    if (this.selectedItem && this.selectedItem.link) {
      window.open(this.selectedItem.link, '_blank');
    }
  }

  trapFocus(event: KeyboardEvent) {
    if (event.key === 'Escape') { this.closeModal(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [this.closeBtn.nativeElement, this.actionBtn.nativeElement];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === first) { last.focus(); event.preventDefault(); }
    } else {
      if (document.activeElement === last) { first.focus(); event.preventDefault(); }
    }
  }
}