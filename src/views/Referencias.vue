<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in orderedData" :key="ref.link")
      span(v-html="ref.referencia")
      a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
        span(v-html="ref.link")
        i.ms-1.fas.fa-external-link-alt
      hr.my-3
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Automation Direct. (2019, November 15). <em>Introduction to PLCs and Industrial Automation</em> [Video]. YouTube.',
        link: 'https://www.youtube.com/watch?v=Yrj1aWS0Tt4',
      },
      {
        referencia:
          'CADe SIMU. (2021). <em>Simulador de Circuitos de Automatización Eléctrica</em>.',
        link: 'https://cadesimu.software.informer.com/download',
      },
      {
        referencia:
          'Engineering Library. (2018). <em>Introduction to SCADA and Industrial Automation</em>. ',
        link: 'https://www.engineeringlibrary.org/scada_automation.pdf',
      },
      {
        referencia:
          'Engineering Mindset. (2020, March 2). <em>Principles of Hydraulic and Pneumatic Systems</em> [Video]. YouTube.',
        link: 'https://www.youtube.com/watch?v=jR4oJUIh3jw',
      },
      {
        referencia:
          'ERP School. (2021, March 14). <em>What is an ERP System and How Can it Transform Industry Operations?</em> [Video]. YouTube.',
        link: 'https://www.youtube.com/watch?v=kDPW2Lle2gQ',
      },
      {
        referencia:
          'Esri. (2021). <em>ArcGIS Geographic Information System</em>. Environmental Systems Research Institute.',
        link: 'https://www.arcgis.com',
      },
      {
        referencia:
          'Famic Technologies. (2021). <em>Automation Studio – Pneumatic and Hydraulic Circuit Simulation</em>. ',
        link: 'https://www.automationstudio.com',
      },
      {
        referencia:
          'Factory I/O. (2021). <em>Industrial Automation Simulation</em>. Real Games.',
        link: 'https://factoryio.com/',
      },
      {
        referencia:
          'Festo Didactic. (2009). <em>Manual Básico de Automatismos Eléctricos</em>. Festo Didactic GmbH. ',
        link: 'https://www.festo.com/manuales/automatismos_basicos.pdf',
      },
      {
        referencia:
          'Festo Didactic. (2009). <em>Manual Básico de Instrumentación</em>. Festo Didactic GmbH.',
        link: 'https://www.festo.com/manuales/instrumentacion_basica.pdf',
      },
      {
        referencia:
          'Festo Didactic. (2018). <em>Manual Básico de Hidráulica y Neumática</em>. Festo Didactic GmbH.',
        link: 'https://www.festo.com/manuales/hidraulica_neumatica.pdf',
      },
      {
        referencia:
          'Google Earth Engine. (2021). <em>Earth Engine Data Catalog</em>.',
        link: 'https://earthengine.google.com/',
      },
      {
        referencia:
          'Inductive Automation. (2021). <em>Ignition – SCADA/HMI Software</em>. ',
        link: 'https://inductiveautomation.com/',
      },
      {
        referencia:
          'MathWorks. (2021). <em>MATLAB – Instrumentation Simulation</em>. ',
        link: 'https://www.mathworks.com/products/matlab.html',
      },
      {
        referencia:
          'QGIS Development Team. (2021). <em>QGIS Geographic Information System</em>. Open Source Geospatial Foundation Project. ',
        link: 'https://qgis.org',
      },
      {
        referencia:
          'RealPars. (2019, June 17). <em>PID Control Explained</em> [Video]. YouTube. ',
        link: 'https://www.youtube.com/watch?v=wkfEZmsQqiA',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
