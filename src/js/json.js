export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a los sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de los sistemas de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Funciones y beneficios de los sistemas de información en la industria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas de información para la toma de decisiones',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Aplicaciones de los sistemas de información en la industria',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de la variabilidad espacial y temporal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Técnicas de Recolección y Análisis de Datos Espaciales y Temporales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aplicaciones en agricultura de precisión y otros sectores',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Automatismos eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fundamentos de automatismos eléctricos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes clave en los automatismos eléctricos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aplicaciones prácticas en automatismos eléctricos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Instrumentación y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos de instrumentación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación y selección de sensores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Control de procesos y estrategias de control',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Calibración de Instrumentos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Hidráulica y neumática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Principios básicos de hidráulica y neumática',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Componentes de los sistemas hidráulicos y neumáticos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicaciones en la automatización industrial',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Control de sistemas hidráulicos y neumáticos',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Tecnologías de automatización y control de sistemas industriales',
    Description:
      'Este componente formativo aborda de manera integral los principios, tecnologías y metodologías esenciales en la automatización y control de sistemas industriales, incluyendo sistemas de información, gestión de variabilidad, automatismos eléctricos, instrumentación y control, así como sistemas hidráulicos y neumáticos. Los estudiantes desarrollarán competencias en el diseño, implementación y optimización de procesos automatizados, aplicando herramientas de control y análisis de datos para mejorar la eficiencia y sostenibilidad en entornos industriales. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
}
