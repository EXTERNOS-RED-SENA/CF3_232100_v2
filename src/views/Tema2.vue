<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de la variabilidad espacial y temporal
    
    .row
      .col-lg(data-aos="fade-right")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E4F7FA;")
          p.mb-0 La gestión de la variabilidad espacial y temporal se refiere al análisis y control de las diferencias que ocurren en los parámetros de un proceso o sistema en función de su ubicación y del tiempo. Esta disciplina permite entender cómo varían ciertas variables clave (como temperatura, humedad, productividad, etc.) en distintas áreas geográficas y a lo largo del tiempo, lo que resulta esencial en sectores como la agricultura, la logística y la manufactura avanzada. Mediante el uso de herramientas como los Sistemas de Información Geográfica (GIS) y el análisis de datos, es posible identificar patrones, optimizar recursos y mejorar la toma de decisiones. Este capítulo explora los conceptos básicos, las técnicas y las aplicaciones de la gestión de la variabilidad espacial y temporal en entornos industriales y productivos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/1.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1  Conceptos de variabilidad espacial y temporal
    
    p(data-aos="fade-left") Se refiere a las diferencias en las condiciones de un parámetro específico en función de su ubicación geográfica. Por ejemplo, en la agricultura, las propiedades del suelo, la humedad y los niveles de nutrientes pueden variar significativamente en diferentes partes de un campo. La variabilidad temporal, por otro lado, se centra en los cambios de una variable en un mismo lugar a lo largo del tiempo, como las variaciones estacionales de temperatura o precipitación.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Importancia de la variabilidad espacial y temporal en la industria

    .p-4.pt-xl-5.pb-xl-5(style="background-color:#E3F0D4;")
      .row
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/2.svg")
        .col-lg(data-aos="fade-up" style="place-self:center;")
          ol.lista-ol--cuadro.mb-0
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 1
              span En sectores como la agricultura de precisión, conocer la variabilidad espacial del suelo y las condiciones climáticas permite aplicar insumos de forma diferenciada, optimizando recursos como agua y fertilizantes.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 2
              span En la logística, la gestión temporal permite optimizar rutas de transporte en función de la demanda horaria y del tráfico, mejorando los tiempos de entrega y reduciendo costos.
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta(style="background-color:#78B62E;")
                span.fw-bold(style="color:#12263F;") 3
              span En manufactura, el análisis de variabilidad permite identificar patrones en la producción, predecir fallos y mejorar el control de calidad en distintas etapas del proceso.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 1.
      span Técnicas de análisis espacial y temporal
    .row
      .col-lg-8(data-aos="fade-right")
        .tabla-a.color-acento-botones
          table
            caption.fw-normal Fuente: OIT, 2024.
            thead(style="border:0 !important;")
              tr.text-center(style="background-color:#78B62E;")
                th Retos para alcanzar la sostenibilidad
                th Uso
            tbody
              tr(style="background-color:#F6F6F6;")
                td.fw-bold(style="width:30%;border-right:1px #AFAFAF solid;") Mapeo de datos geoespaciales
                td(style="border:0;") Utilización de mapas para visualizar y analizar datos que tienen una componente espacial, como las condiciones de un terreno.
              tr(style="background-color:#fff;")
                td.fw-bold(style="border-right:1px #AFAFAF solid;") Análisis de series temporales
                td(style="border:0;") Evaluación de datos que varían en el tiempo para identificar patrones, tendencias y ciclos que afectan el proceso.
              tr(style="background-color:#F6F6F6;")
                td.fw-bold(style="border-right:1px #AFAFAF solid;") Interpolación espacial
                td(style="border:0;") Método estadístico que permite estimar el valor de una variable en puntos no muestreados, basándose en la información de puntos cercanos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Técnicas de Recolección y Análisis de Datos Espaciales y Temporales
    
    p(data-aos="fade-left") Para gestionar adecuadamente la variabilidad espacial y temporal, es fundamental contar con métodos eficientes para la recolección y análisis de datos. Estos datos se obtienen mediante sensores, drones, estaciones meteorológicas y otros dispositivos, y se procesan con herramientas de análisis espacial y software estadístico.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Recolección de datos espaciales

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Sensores de suelo y clima")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema2/5.svg')
          .col-md
            h5 Sensores de suelo y clima
            p.mb-0 Utilizados en agricultura para medir propiedades del suelo (como humedad y nutrientes) y condiciones climáticas. Miden variables críticas como la humedad, temperatura, y niveles de nutrientes. En agricultura, estos sensores permiten realizar mapeos detallados de los suelos en función de su variabilidad.
      .py-3.py-md-4(titulo="Drones y satélites")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema2/6.svg')
          .col-md
            h5 Drones y satélites
            p.mb-0 Proporcionan imágenes aéreas y datos precisos de áreas amplias, útiles en agricultura y gestión de recursos naturales, así como imágenes de alta resolución de grandes extensiones, útiles para detectar patrones de crecimiento, estrés hídrico y distribución de cultivos en un campo.
      .py-3.py-md-4(titulo="Estaciones GPS y GIS")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema2/7.svg')
          .col-md
            h5 Estaciones GPS y GIS
            p.mb-0 Herramientas que permiten ubicar puntos de medición y asociarlos con datos específicos, facilitando la creación de mapas detallados. Localizan y registran datos geográficos precisos que permiten la creación de mapas detallados y su integración en plataformas GIS para análisis avanzado.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Recolección de datos temporales

    .row
      .col-lg(data-aos="fade-right")
        .h-100.p-3.p-lg-4.d-flex.align-content-center.flex-wrap(style="background-color:#01B9D1;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Sensores en tiempo real:] dispositivos que recogen datos continuamente en intervalos regulares, permitiendo monitorear cambios temporales.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Registros manuales y automatizados:] recopilación de datos en tiempos específicos, útil en análisis de tendencias y comportamiento a lo largo de las estaciones.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/8.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Análisis de datos espaciales y temporales

    .cont_1_2
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema2/9.svg" style="max-width:88px;")
            h5 Software de análisis geoespacial (GIS)
            p Herramientas como Arcgis y QGIS que permiten visualizar, analizar y gestionar datos espaciales.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema2/10.svg" style="max-width:88px;")
            h5 Análisis estadístico
            p Uso de herramientas como Excel, R y Python para analizar patrones temporales, identificar correlaciones y realizar pronósticos.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .p-4.h-100.bg-white.text-center.cont_1_3(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:14px;")
            figure.mb-3
              img.d-inline(src="@/assets/curso/tema2/11.svg" style="max-width:88px;")
            h5 Modelos predictivos
            p Técnicas avanzadas que permiten predecir el comportamiento futuro de las variables en función de datos históricos.

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_3 2.3 Aplicaciones en agricultura de precisión y otros sectores
      
      p(data-aos="fade-left") La gestión de la variabilidad espacial y temporal tiene numerosas aplicaciones prácticas, especialmente en sectores como la agricultura, la logística, el medio ambiente y la manufactura. A continuación, se describen algunas aplicaciones clave en diferentes sectores.

      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/12.png")
        .col-lg(data-aos="fade-left")
          AccordionRED(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Agricultura de precisión")
              p La agricultura de precisión utiliza datos espaciales y temporales para optimizar el uso de recursos en el campo. Mediante sensores de suelo y drones, se puede identificar la variabilidad del terreno y aplicar fertilizantes, riego y pesticidas solo en las áreas que lo necesitan, reduciendo costos y minimizando el impacto ambiental.
            .row.col-xl-11.m-auto(titulo="Gestión de recursos naturales")
              p Los sistemas de monitoreo ambiental utilizan datos espaciales y temporales para gestionar y proteger recursos naturales como bosques, ríos y costas. Los mapas de uso del suelo y los datos de calidad del agua permiten evaluar el estado de los recursos y planificar su explotación de forma sostenible.
            .row.col-xl-11.m-auto(titulo="Logística y transporte")
              p En la logística, el análisis de la variabilidad temporal permite planificar rutas óptimas y reducir los tiempos de entrega. El análisis de datos históricos de tráfico y patrones de demanda permite ajustar los horarios y rutas de entrega para mejorar la eficiencia operativa.
            .row.col-xl-11.m-auto(titulo="Control de calidad en manufactura")
              p En manufactura, el monitoreo espacial y temporal ayuda a identificar variaciones en la calidad del producto en diferentes partes de la línea de producción. Esto permite hacer ajustes precisos en los procesos para mantener estándares de calidad y detectar fallos potenciales antes de que afecten al producto final.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 2.
      span Herramientas y #[em software] para la gestión de la variabilidad espacial y temporal
    .row
      .col-lg-8(data-aos="fade-right")
        .tabla-a.color-acento-botones
          table
            caption.fw-normal Fuente: OIT, 2024.
            thead(style="border:0 !important;")
              tr.text-center(style="background-color:#78B62E;")
                th(colspan="2") Herramientas para trabajar la gestión de la variabilidad espacial y temporal
            tbody.text-center
              tr(style="background-color:#fff;")
                td(style="border-right:1px #AFAFAF solid;") #[strong QGIS (Quantum GIS):] un #[em software] de código abierto para la gestión de datos geoespaciales, utilizado para el mapeo y análisis de datos espaciales.
                td(style="border:0;") 
                  a(href="https://qgis.org" target="_blank") https://qgis.org
              tr(style="background-color:#F6F6F6;")
                td(style="border-right:1px #AFAFAF solid;") #[strong ArcGIS:] una plataforma de análisis de datos geoespaciales de pago que permite visualizar, analizar y compartir datos espaciales
                td(style="border:0;") 
                  a(href="https://www.arcgis.com" target="_blank") https://www.arcgis.com
              tr(style="background-color:#fff;")
                td(style="border-right:1px #AFAFAF solid;") #[strong Google Earth Engine:] una plataforma basada en la nube que permite el análisis de imágenes satelitales y otros datos geoespaciales.
                td(style="border:0;") 
                  a(href="https://earthengine.google.com/" target="_blank") https://earthengine.google.com/
              tr(style="background-color:#F6F6F6;")
                td(style="border:0;" colspan="2") #[strong Python y R para análisis de series temporales:] ambos lenguajes de programación ofrecen bibliotecas específicas como Pandas, Numpy y Forecast, que permiten analizar y modelar series temporales para predecir tendencias y patrones.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/13.png")

      
                                                                                           
</template>

<script>
export default {
  name: 'Tema2',
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
