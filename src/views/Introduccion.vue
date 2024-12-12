<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro
      .row
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro1.svg")
        .col-xl(data-aos="fade-left")
          .p-4(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;")
            p.mb-0 La automatización y el control industrial representan la base de los sistemas modernos de producción, permitiendo que los procesos operen de manera eficiente, segura y precisa. En el contexto de una industria cada vez más digitalizada, los conocimientos sobre sistemas de información, gestión de datos espaciales y temporales, automatismos eléctricos, instrumentación y control, así como sistemas hidráulicos y neumáticos, se han convertido en competencias esenciales para cualquier profesional técnico. Este componente proporciona una visión integral y práctica de estos temas fundamentales en la automatización, capacitando a los estudiantes para enfrentar los desafíos tecnológicos de la industria moderna.
          p.mt-4.mb-0 Comenzando con una introducción a los sistemas de información, exploraremos cómo se estructuran y aplican en el ámbito industrial para optimizar la recopilación, análisis y toma de decisiones basada en datos. Luego, la gestión de la variabilidad espacial y temporal permite entender cómo los datos de ubicación y tiempo influyen en la producción, facilitando aplicaciones como la agricultura de precisión y la logística avanzada.
    
      .p-4.mt-4(style="background-color:#CBF0F5;" data-aos="fade-up")
        .row
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/intro2.svg")
          .col-md(style="place-self:center;")
            p.mb-0 En los módulos de automatismos eléctricos e instrumentación y control, los estudiantes aprenderán los principios de los circuitos automatizados, la lógica de control programable (PLC) y el uso de sensores para monitorear y regular variables críticas. Estos conocimientos son esenciales para diseñar, implementar y mantener sistemas de control efectivos en entornos industriales. Finalmente, el estudio de hidráulica y neumática completará el panorama, proporcionando una comprensión sobre el uso de fluidos y gases para transmitir potencia y ejecutar movimientos precisos y de gran fuerza.

      figure.mt-4(data-aos="zoom-in-up" data-aos-duration="500")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/u2ZxUWAU8VM?si=xbBOi3xATQC9iqDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
