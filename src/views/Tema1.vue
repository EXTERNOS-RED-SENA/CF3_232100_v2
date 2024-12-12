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
