<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción a los sistemas de información

    .row(data-aos="fade-up" data-aos-duration="750")
      .col-lg.pe-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#D7E1EB;")
          p.mb-0 En el contexto industrial, los sistemas de información desempeñan un rol fundamental en la gestión y optimización de los procesos productivos. Estos sistemas permiten recopilar, almacenar, procesar y analizar grandes volúmenes de datos, facilitando la toma de decisiones y el control eficiente de las operaciones. La automatización y el control industrial dependen cada vez más de estos sistemas para mejorar la precisión, reducir tiempos de inactividad, y aumentar la eficiencia y la calidad de los productos. Este capítulo explora los conceptos básicos, las estructuras y las aplicaciones de los sistemas de información en el entorno industrial.
      .col-lg-auto.ps-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/1.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Conceptos básicos de los sistemas de información 
    
    .cont_1_1
      p(data-aos="fade-left") Un sistema de información (si) es un conjunto de elementos interrelacionados que recopilan, procesan y distribuyen información para apoyar la toma de decisiones y el control en una organización. Estos sistemas combinan recursos humanos, tecnología y procesos de negocio para gestionar la información de manera eficiente y eficaz. En un entorno industrial, los sistemas de información permiten controlar cada fase del proceso de producción, desde la adquisición de materias primas hasta la entrega del producto final, manteniendo la calidad y minimizando errores.

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/9.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4 Componentes de un sistema de información
      
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/3.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="<em>Hardware</em>")
              p Equipos físicos como servidores, computadoras, dispositivos de entrada/salida y redes de comunicación.
            .row.col-xl-11.m-auto(titulo="<em>Software</em>")
              p Programas y aplicaciones que procesan la información, incluyendo sistemas operativos y #[em software] de gestión empresarial.
            .row.col-xl-11.m-auto(titulo="Datos")
              p Información bruta que se convierte en conocimiento útil una vez procesada.
            .row.col-xl-11.m-auto(titulo="Procedimientos")
              p Reglas y políticas que definen cómo se gestionan los datos y los procesos de información.
            .row.col-xl-11.m-auto(titulo="Personas")
              p Usuarios y técnicos que interactúan con el sistema para asegurar su funcionamiento y mantenimiento.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Tipos de sistemas de información en la industria
    
    .row
      .col-lg(data-aos="zoom-in")
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Sistemas de control de procesos")
            p Monitorean y controlan variables de procesos industriales en tiempo real, como la temperatura, presión y flujo.
          .row.col-xl-11.m-auto(titulo="Sistemas de gestión de la producción (mes)")
            p Integran y controlan actividades de producción, asegurando la eficiencia y calidad en cada etapa del proceso productivo.
          .row.col-xl-11.m-auto(titulo="Sistemas de gestión de recursos empresariales (ERP)")
            p Integran áreas clave de la organización como finanzas, inventario, y recursos humanos, proporcionando una visión completa y sincronizada de las operaciones.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/4.png")
    
    Separador

    .cont_1_2
      .titulo-segundo(data-aos="flip-up")
        h2#t_1_2 1.2 Funciones y beneficios de los sistemas de información en la industria
    
      p(data-aos="fade-left") Los sistemas de información en la industria desempeñan funciones críticas que mejoran la eficiencia, seguridad y calidad en los procesos de producción. Entre sus principales funciones se encuentran la captura de datos en tiempo real, el análisis predictivo, la gestión de inventarios, y la optimización de recursos. Los beneficios de implementar estos sistemas en entornos industriales son numerosos:

      .row.mt-4
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema1/5.svg" style="max-width:88px;")
            h5 Optimización de procesos
            p Los si permiten que los procesos productivos sean más eficientes, reduciendo tiempos de ciclo y minimizando los recursos necesarios.
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema1/6.svg" style="max-width:88px;")
            h5 Toma de decisiones basada en datos
            p Proporcionan información confiable y en tiempo real, permitiendo a los gestores tomar decisiones informadas y precisas.
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema1/7.svg" style="max-width:88px;")
            h5 Reducción de costos
            p Al optimizar los procesos y mejorar el uso de recursos, los sistemas de información ayudan a reducir costos operativos y de mantenimiento.
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema1/8.svg" style="max-width:88px;")
            h5 Mejora de la calidad del producto 
            p El control riguroso de los parámetros de producción asegura que los productos cumplan con los estándares de calidad.

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_3 1.3 Sistemas de información para la toma de decisiones
    
      p(data-aos="fade-left") Los sistemas de información se han convertido en una herramienta esencial para la toma de decisiones estratégicas en la industria. A continuación, se presentan algunos de los sistemas más comunes que apoyan este proceso:

    .cont_1_4.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        CarouselRED(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 SCADA (supervisión, control y adquisición de datos)
              p.mt-4 Es un sistema de supervisión y control que recopila datos en tiempo real de sensores y dispositivos distribuidos en el entorno industrial. Los sistemas scada permiten el monitoreo y control de operaciones desde una ubicación centralizada, asegurando la eficiencia y seguridad en procesos críticos.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/11.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Sistemas MES (Manufacturing Execution System)
              p.mt-4 Un sistema mes gestiona y controla las operaciones de fabricación en tiempo real. Facilita el seguimiento de cada producto en la línea de producción, asegurando la trazabilidad y el cumplimiento de los estándares de calidad.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/12.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 ERP (Enterprise Resource Planning)
              p.mt-4 Este sistema integra diversas áreas de la empresa, como finanzas, producción, logística y recursos humanos, en una única plataforma. Los ERP optimizan la planificación de recursos y mejoran la visibilidad general de la organización, permitiendo a los gerentes tomar decisiones informadas basadas en datos centralizados.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/13.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 CMMS (Computerized Maintenance Management System)
              p.mt-4 Un sistema de gestión de mantenimiento que ayuda a programar, ejecutar y monitorear las actividades de mantenimiento de los equipos industriales. El CMMS reduce el tiempo de inactividad no planificado y prolonga la vida útil de los equipos, mejorando la productividad general.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/14.png')

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_4 1.4 Aplicaciones de los sistemas de información en la industria

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/15.png")
      .col-lg(data-aos="fade-left")
        .h-100.p-3.p-lg-4.d-flex.align-content-center.flex-wrap(style="background-color:#01B9D1;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Automatización y control de procesos:] los sistemas de información permiten monitorear y controlar procesos industriales en tiempo real, mejorando la precisión y reduciendo los errores humanos. Un ejemplo es la automatización de líneas de producción en la industria automotriz, donde cada etapa del ensamblaje se controla de manera automática y precisa.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Gestión de la cadena de suministro:] mediante el uso de sistemas ERP y MES, las empresas pueden gestionar y optimizar la cadena de suministro, desde la adquisición de materiales hasta la distribución del producto final. Esto es particularmente útil en industrias como la alimentaria y farmacéutica, donde el control de inventarios y la trazabilidad son esenciales.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Mantenimiento predictivo:] a través de sistemas de información y sensores de monitoreo, es posible predecir fallos en los equipos y realizar mantenimiento preventivo antes de que ocurra una falla. Esto reduce los tiempos de inactividad y mejora la eficiencia operativa, como en plantas de energía y manufactura avanzada.

    p.mt-4(data-aos="fade-right") Se recomienda profundizar sobre los sistemas de información a través del siguiente material:

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-up")
        a.anexo.ms-0.h-100(href="https://www.youtube.com/watch?v=kDPW2Lle2gQ" target="_blank" style="max-width:fit-content;")
          .anexo__icono
            img(src="@/assets/bullets/icono-video.svg")
          .anexo__texto
            p.fw-normal #[strong Enlace video.] Video- “What is an ERP System and How Can it Transform Industry Operations?”  
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-up")
        a.anexo.ms-0.h-100(href="https://factoryio.com/" target="_blank" style="max-width:fit-content;")
          .anexo__icono
            img(src="@/assets/bullets/icono-link.svg")
          .anexo__texto
            p.fw-normal #[strong Enlace web.]  Simulador: Factory I/O - Simulación de Procesos Industriales.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-up")
        a.anexo.ms-0.h-100(href="https://www.engineeringlibrary.org/scada_automation.pdf" target="_blank" style="max-width:fit-content;")
          .anexo__icono
            img(src="@/assets/bullets/icono-link.svg")
          .anexo__texto
            p.fw-normal #[strong Enlace web.] Lectura:“Introduction to SCADA and Industrial Automation”.

    
                                                                                           
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
