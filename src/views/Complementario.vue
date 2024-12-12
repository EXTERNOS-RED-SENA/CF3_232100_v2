<template lang="pug">
.curso-main-container.complementario
  BannerInterno(icono="far fa-folder-open" titulo="Material complementario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .table-responsive
      table
        thead
          tr
            th(colspan='3' scope="col") Tema
            th(colspan='5' scope="col") Referencia APA del material
            th(colspan='2' scope="col") Tipo 
            th(colspan='2' scope="col") Enlace
        tbody
          tr(v-for="(item, index) in computedData" :key="'complementario-'+index")
            td.text-start(colspan='3' scope="row" v-html="item.tema")
            td.text-start(colspan='5' scope="row" v-html="item.referencia")
            td(colspan='2' v-html="item.tipo")
            td(colspan='2')
              .complementario__enlaces
                a.complementario__btn(v-for="link of item.link" :href="link" target="_blank")
                  i.fas.fa-external-link-alt

</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Introducción a los sistemas de información',
          referencia:
            'ERP School. (2021, March 14). <em>What is an ERP System and How Can it Transform Industry Operations?</em> [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=kDPW2Lle2gQ',
        },
        {
          tema: 'Introducción a los sistemas de información',
          referencia:
            'Engineering Library. (2018). <em>Introduction to SCADA and Industrial Automation</em>.',
          tipo: 'Documento',
          link: 'https://www.engineeringlibrary.org/scada_automation.pdf',
        },
        {
          tema: 'Gestión de la variabilidad espacial y temporal',
          referencia:
            'QGIS Development Team. (2021). <em>QGIS Geographic Information System</em>. Open Source Geospatial Foundation Project.',
          tipo: '<em>Software</em> (GIS)',
          link: 'https://qgis.org',
        },
        {
          tema: 'Gestión de la variabilidad espacial y temporal',
          referencia:
            'Google Earth Engine. (2021). <em>Earth Engine Data Catalog</em>.',
          tipo: 'Plataforma en la nube',
          link: 'https://earthengine.google.com/',
        },
        {
          tema: 'Automatismos eléctricos',
          referencia:
            'Automation Direct. (2019, November 15). <em>Introduction to PLCs and Industrial Automation</em> [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Yrj1aWS0Tt4',
        },
        {
          tema: 'Automatismos eléctricos',
          referencia:
            'Festo Didactic. (2009). <em>Manual Básico de Automatismos Eléctricos</em>. Festo Didactic GmbH.',
          tipo: 'Documento PDF',
          link: 'https://www.festo.com/manuales/automatismos_basicos.pdf',
        },
        {
          tema: 'Automatismos eléctricos',
          referencia:
            'CADe SIMU. (2021). <em>Simulador de Circuitos de Automatización Eléctrica</em>.',
          tipo: 'Simulador',
          link: 'https://cadesimu.software.informer.com/download',
        },
        {
          tema: 'Instrumentación y control',
          referencia:
            'RealPars. (2019, June 17). <em>PID Control Explained</em> [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=wkfEZmsQqiA',
        },
        {
          tema: 'Instrumentación y control',
          referencia:
            'Festo Didactic. (2009). <em>Manual Básico de Instrumentación</em>. Festo Didactic GmbH',
          tipo: 'Documento PDF',
          link: 'https://www.festo.com/manuales/instrumentacion_basica.pdf',
        },
        {
          tema: 'Instrumentación y control',
          referencia:
            'MathWorks. (2021). <em>MATLAB – Instrumentation Simulation</em>.',
          tipo: 'Simulador',
          link: 'https://www.mathworks.com/products/matlab.html',
        },
        {
          tema: 'Hidráulica y neumática',
          referencia:
            'Engineering Mindset. (2020, March 2). <em>Principles of Hydraulic and Pneumatic Systems</em> [Video]. YouTube.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=jR4oJUIh3jw',
        },
        {
          tema: 'Hidráulica y neumática',
          referencia:
            'Festo Didactic. (2018). <em>Manual Básico de Hidráulica y Neumática</em>. Festo Didactic GmbH.',
          tipo: 'Documento PDF',
          link: 'https://www.festo.com/manuales/hidraulica_neumatica.pdf',
        },
        {
          tema: 'Hidráulica y neumática',
          referencia:
            'Famic Technologies. (2021). <em>Automation Studio – Pneumatic and Hydraulic Circuit Simulation</em>.',
          tipo: 'Simulador',
          link: 'https://www.automationstudio.com',
        },
        {
          tema: 'General (aplicable a varios temas)',
          referencia:
            'Factory I/O. (2021). <em>Industrial Automation Simulation</em>. Real Games.',
          tipo: 'Simulador',
          link: 'https://factoryio.com/',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
