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
      title: '¡Taller de Cultivo de setas!',
      description: 'Terminamos nuestro taller de Cultivo de Setas con éxito este 2 de Marzo. Pasamos de la teoría a la práctica, aprendiendo desde la preparación del sustrato hasta las condiciones de humedad y luz  para que los hongos necesitan para brotar.',
      image: 'assets/images/fundacion/Marzo_026/02_03_26.jpg',
      link: 'https://www.facebook.com/fundacion.hidalguenseac.5/posts/pfbid02537wK6Pp14zkWVAg1dkyHAKr97QdNCq7wn1mji9KHbppkaN1pYCnMmvrJfvkPRLsl'
    },{
      title: '¡Clase de Muffins de Plátano con coco!',
      description: 'Nuestra cocina se llenó de un aroma irresistible con la clase de Muffins de Plátano con coco. En postres y platillos deliciosos, nos encanta demostrar que cocinar en casa puede ser fácil y divertido. ¡Gracias a todos los que se animaron a venir!',
      image: 'assets/images/fundacion/Marzo_026/03_03_26.jpg',
      link: 'https://www.facebook.com/fundacion.hidalguenseac.5/posts/pfbid02Jf9SXC9Tq4d7nHpujTc5nvdGnzmsMQVU2jwEvai5PkPkGV52SGQXiy7CmbU9XqZsl'
    },{
      title: '¡Clase de Tablas de queso!',
      description: 'El pasado 5 de Marzo, nos sumergimos en un mundo de texturas y contraste. Este taller de tablas de queso fue mucho más que aprender a acomodar ingredientes y fue descubrir cómo crear una experiencia. Desde la elección de los quesos hasta el salami, cada alumno demostró que la comida también es una forma de arte.',
      image: 'assets/images/fundacion/Marzo_026/05_03_26.jpg',
      link: 'https://www.facebook.com/share/p/1CehtVLNpS/'
    },{
      title: '¡Feria de la Mujer en la Fundación Hidalguense!',
      description: 'El pasado 7 de Marzo vivimos un evento memorable para las mujeres de nuestra comunidad. Las asistentes disfrutaron de pláticas sobre el bienestar, alimentación y arte, además de reflexionar sobre el significado del 8M. ¡Gracias por acompañarnos!',
      image: 'assets/images/fundacion/Marzo_026/07_03_26.jpg',
      link: 'https://www.facebook.com/share/p/16DoXEJTRe/'
    },{
      title: '¡Taller de Pasta Flexible!',
      description: 'Este 11 de marzo fue fin de curso del taller de pasta flexible, y no podemos estar más orgullosos. Entre texturas, colores y mucha creatividad.¡Logramos piezas increíbles! Felicidades a todos los alumnos.',
      image: 'assets/images/fundacion/Marzo_026/11_03_26.jpg',
      link: 'https://www.facebook.com/share/p/1K96XMtiK2/'
    },{
      title: '¡Celebración del día internacional del Tai Chi',
      description: 'El pasado 20 de Marzo, nos unimos a la ola global de salud y bienestar con motivo del Día Internacional del Tai Chi. Fue un evento mágico donde cada respiración y cada movimiento nos recordó la importancia de conectar con nuestro centro. ¡Gracias a todos los que se sumaron!',
      image: 'assets/images/fundacion/Marzo_026/20_03_26.jpg',
      link: 'https://www.facebook.com/share/p/1UCxDaSiPD/'
    },{
      title: '¡Taller de Flores Eternas!',
      description: 'Este 11 de Febrero se vivió a cabo el taller de Flores Eternas aprendimos de técnica para crear una flor en donde no solo estamos haciendo un adorno, sino creando un símbolo de afecto que no conoce el paso del tiempo. Un agradecimiento especial a nuestras alumnas por su dedicación',
      image: 'assets/images/fundacion/Febrero_026/11_02_26.jpg',
      link: 'https://www.facebook.com/fundacion.hidalguenseac.5/posts/pfbid0uafesJ7djJi7Mk1RmawbmfCms1PT3z2idYEFJteYcZ5uaLJRDibhamQ7PnJiHrPXl'
    },{
      title: '¡Taller de Bordado de Tenango!',
      description: 'Este 20 de Febrero, nuestras manos se llenaron de hilos, colores y tradición. En nuestro taller de bordado de tenango, no solo aprendimos puntadas sino que conectamos con el corazón de nuestras raíces y disfrutamos del proceso. ¡Gracias a todos los que vinieron!',
      image: 'assets/images/fundacion/Febrero_026/20_02_26.jpg',
      link: 'https://www.facebook.com/share/p/1Ceb3yM2aE/'
    },{
      title: '¡Celebración de Año Nuevo Chino - Caballo de fuego 2026!',
      description: 'Celebramos la llegada del Año Nuevo Chino con un festival lleno de tradición, energía y el color de nuestra comunidad. Desde el místico bautizo del león hasta la fuerza de las artes marciales y el ritmo del Kpop. ¡Gracias a cada asistente por sumar su energía a esta gran celebración cultural!',
      image: 'assets/images/fundacion/Febrero_026/15_02_26.jpg',
      link: 'https://www.facebook.com/share/p/1WxZyzkBYU/'
    },{
      title: '¡Campaña de Lentes!',
      description: 'El pasado 16 de Febrero, fue un honor servir a nuestra comunidad y aportar un granito de arena para su salud y bienestar. En la Fundación Hidalguense estamos convencidos que ver bien es un derecho de todos. ¡Gracias a todos los que asistieron!',
      image: 'assets/images/fundacion/Febrero_026/16_02_26.jpg',
      link: 'https://www.facebook.com/share/p/1BBvD2gjqM/'
    },{
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