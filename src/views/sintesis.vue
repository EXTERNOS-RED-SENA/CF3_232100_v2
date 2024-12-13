<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis1.png")
      .col-xl(data-aos="fade-left")
        .row
          .col-lg
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#CBF0F5;")
              p.mb-0 El siguiente diagrama proporciona una visión general sintetizada de los principales temas abordados en este componente. Este mapa conceptual ha sido diseñado para facilitar la comprensión de las tecnologías clave que soportan la automatización y el control de sistemas industriales.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/sintesis2.svg")
        p.mt-4 En el centro del diagrama se encuentra el concepto principal de Tecnologías de Automatización y Control, que se desglosa en temas fundamentales como sistemas de información, gestión de la variabilidad espacial y temporal, automatismos eléctricos, instrumentación y control, y sistemas hidráulicos y neumáticos. Cada uno de estos temas se descompone en subtemas que reflejan tanto los fundamentos teóricos como sus aplicaciones prácticas en entornos industriales.
        .p-4(style="background-color:#E3F0D4;border:2px #3BA935 dashed;border-radius:7px;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/sintesis3.svg")
            .col-md(style="place-self:center;")
              p.mb-0 Estos conceptos se entrelazan para ofrecer una perspectiva integral de cómo las tecnologías permiten optimizar procesos, mejorar la seguridad y la eficiencia, y preparar a los estudiantes para resolver desafíos industriales mediante la implementación de sistemas automatizados.
    
    p.mt-4(data-aos="fade-right") El diagrama sirve como una guía visual para explorar los contenidos de este módulo, ayudando a los estudiantes a comprender rápidamente la interrelación de los temas y cómo estos se aplican en un entorno de producción moderna. Se recomienda utilizar este mapa conceptual como complemento al contenido detallado del componente, permitiendo una navegación más estructurada y efectiva de los conceptos presentados.

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5.bgs.p-4.brad
        figure(data-aos="fade-up" data-aos-duration="750")
          img(src="@/assets/curso/sintesis.svg", alt='Se denomina «Diagrama síntesis del componente». Este mapa conceptual presenta una visión general de las "Tecnologías de Automatización y Control de Sistemas Industriales". Se estructura en seis áreas principales: automatización y control industrial, sistemas de información y gestión, gestión de variabilidad espacial y temporal, automatismos eléctricos e instrumentación, hidráulica y neumática, y la importancia de estos conocimientos. Cada rama incluye subtemas específicos que detallan los aspectos técnicos y aplicaciones en la industria moderna.')
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
