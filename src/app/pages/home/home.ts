import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  newsList: NewsItem[] = [
    {
      title: 'Taller de elaboración de mazapán',
      date: 'Martes, 27 de Enero',
      description: 'Aprende paso a paso a preparar este tradicional dulce artesanal.',
      image: 'assets/images/news/Mazapan.jpeg',
      link: 'https://www.facebook.com/share/p/1Ao6K8X5qf/'
    },
    {
      title: 'Taller: Arte en Miniatura',
      date: 'Jueves, 22 de Enero',
      description: '¡Desarrolla tu creatividad y mejora tu motricidad fina mientras creas piezas únicas!',
      image: 'assets/images/news/Miniatura.jpeg',
      link: 'https://www.facebook.com/share/p/187SG48wMe/'
    },
    {
      title: 'Inglés para poder viajar',
      date: 'Jueves, 5 de Febrero',
      description: 'Aprende inglés práctico para tus viajes. Todos los jueves 05:00 a 07:00 pm.',
      image: 'assets/images/news/Ingles.jpeg',
      link: 'https://www.facebook.com/share/p/1AZ1wkLLQe/'
    },
    {
      title: 'CocinArte - Taller de cocina',
      date: 'Miercoles, 21 de Enero',
      description: 'Descubre el arte de la cocina con recetas de cocina salada, internacional, panadería y repostería.',
      image: 'assets/images/news/Comida.jpeg',
      link: 'https://www.facebook.com/share/p/1KqwNHxaRW/'
    },
    {
      title: 'Taller de Helado',
      date: 'Jueves, 22 de Enero',
      description: 'Aprende a preparar deliciosos helados y disfruta una experiencia dulce y creativa.',
      image: 'assets/images/news/Helado.jpeg',
      link: 'https://www.facebook.com/share/p/1ASkRmu5Sk/'
    },
    {
      title: 'Manualidades en Fieltro',
      date: 'Viernes, 6 de Febrero',
      description: '¡Despierta tu creatividad y aprende a crear piezas únicas hechas a mano! En este taller conocerás técnicas básicas.',
      image: 'assets/images/news/Fieltro.jpeg',
      link: 'https://www.facebook.com/share/p/171Aom4i6W/'
    },
    {
      title: 'Inglés Básico–Intermedio',
      date: 'Miercoles, 4 de Febrero',
      description: 'Speaking with Kids: ¡Es momento de dar el siguiente paso en el aprendizaje del inglés!',
      image: 'assets/images/news/Inglesbasico.jpeg',
      link: 'https://www.facebook.com/share/p/1BwAhoCs2q/'
    },
    {
      title: 'Inglés Kids – Básico',
      date: 'Martes, 3 de Febrero',
      description: '¡Aprender inglés puede ser divertido! Invitamos a niñas y niños a nuestras clases de inglés para principiantes.',
      image: 'assets/images/news/Basicokids.jpeg',
      link: 'https://www.facebook.com/fundacion.hidalguenseac.5/posts/pfbid0zqsehEWMqgwzuyjZp8x6saZD3WaZr29spDpnhbpGEo1GKcEaqKSSzHveBuhWfRAel'
    },
    {
      title: 'Repostería con Corazón',
      date: 'Lunes, 26 de Enero',
      description: 'Un taller especial para cocinar con amor y aprender deliciosas recetas en una experiencia única.',
      image: 'assets/images/news/Reposteriacorazon.jpeg',
      link: 'https://www.facebook.com/share/p/17unMTPUy9/'
    },
    {
      title: 'Taller de Acuarela',
      date: 'Sábado, 7 de Febrero',
      description: '¡Descubre el mundo de la acuarela! Te invitamos a nuestro Taller de Acuarela, un espacio creativo para aprender.',
      image: 'assets/images/news/Acuarela.jpeg',
      link: 'https://www.facebook.com/share/p/1KCRRRzGc8/'
    },
    {
      title: 'Taller de Pasta Flexible',
      date: 'Miércoles, 4 de Febrero',
      description: 'Aprende a crear detalles lindos y divertidos para esas fechas especiales.',
      image: 'assets/images/news/Pastaflexible.jpeg',
      link: 'https://www.facebook.com/share/p/1AYkc8oYVZ/'
    },
    {
      title: 'Taller de Educación y Obediencia Canina',
      date: 'Sábado, 7 de Febrero',
      description: 'Acompáñanos en este taller impartido por el Psicólogo Ariel Sosa, donde aprenderás técnicas prácticas.',
      image: 'assets/images/news/Educacion canina.jpeg',
      link: 'https://www.facebook.com/share/p/17rBpz1Mdx/'
    },
    {
      title: 'Taller de Costura Básica',
      date: 'Lunes, 9 de Febrero',
      description: 'Corte y Confección, dirigido a personas interesadas en aprender los fundamentos del manejo de telas.',
      image: 'assets/images/news/Corte.jpeg',
      link: 'https://www.facebook.com/share/p/1N1zadp62g/'
    },
    {
      title: 'Consultas de Fisioterapia',
      date: 'Martes y Viernes',
      description: 'Cuida tu cuerpo y mejora tu bienestar. Sesiones de 1 hora, dirigidas a la prevención, atención y rehabilitación física.',
      image: 'assets/images/news/Fisoterapia.jpeg',
      link: 'https://www.facebook.com/share/p/1BBfuhEs2c/'
    },
    {
      title: 'Taller de Elaboración de Cajeta',
      date: 'Lunes, 19 de Enero',
      description: 'Descubre el proceso artesanal para preparar cajeta natural y envinada, ideal para aprender y emprender.',
      image: 'assets/images/news/Cajeta.jpeg',
      link: 'https://www.facebook.com/share/p/1BiZXV36D4/'
    },
    {
      title: 'Taller de Conversación en Inglés',
      date: 'Martes, 13 de Enero',
      description: '¡Mejora tu inglés conversando! Participa en nuestro taller y gana confianza al hablar en situaciones reales.',
      image: 'assets/images/news/mejoraingles.jpeg',
      link: 'https://www.facebook.com/share/p/1C8kYPPB36/'
    },
    {
      title: 'Taller de Decoración de Globos',
      date: 'Martes, 20 de Enero',
      description: 'Aprende desde cero y crea increíbles decoraciones para todo tipo de eventos.',
      image: 'assets/images/news/Globos.jpeg',
      link: 'https://www.facebook.com/share/p/17zcA1Ljrg/'
    },
    {
      title: 'Taller de Postres Saludables',
      date: 'Miercoles, 14 de Enero',
      description: 'Este enero, ¡endulza tu vida de manera saludable! Únete y aprende a preparar deliciosos postres.',
      image: 'assets/images/news/Postressaludables.jpeg',
      link: 'https://www.facebook.com/share/p/1GV4nE5iwt/'
    },
    {
      title: 'Cocina y Disfruta',
      date: 'Sabado, 17 de Enero',
      description: 'Este enero, prepárate para aprender recetas deliciosas y tradicionales con la Chef Fernanda Téllez.',
      image: 'assets/images/news/CocinayDisfruta.jpeg',
      link: 'https://www.facebook.com/share/p/17hRQcEL1a/'
    },
    {
      title: 'TALLER DE HUERTOS VERTICALES',
      date: 'Sábado, 17 de Enero',
      description: 'Te invitamos a nuestro Taller de Huertos Verticales, ideal para principiantes y amantes de la naturaleza.',
      image: 'assets/images/news/Huertos.jpeg',
      link: 'https://www.facebook.com/share/p/1ZkWuMgHEp/'
    }
  ];

  // ==========================================
  // LÓGICA DEL CARRUSEL (NO TOCAR)
  // ==========================================
  
  currentIndex = 0;
  itemsPerSlide = 3;
  autoPlayInterval: any;

  ngOnInit(): void {
    this.checkScreenSize();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.itemsPerSlide = window.innerWidth < 768 ? 1 : 3;
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    if (this.currentIndex < this.newsList.length - this.itemsPerSlide) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.newsList.length - this.itemsPerSlide;
    }
    this.resetTimer();
  }

  resetTimer() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }
  }

  get transformStyle() {
    const percentage = 100 / this.itemsPerSlide;
    return `translateX(-${this.currentIndex * percentage}%)`;
  }
}