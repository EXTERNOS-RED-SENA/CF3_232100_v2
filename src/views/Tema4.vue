<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Instrumentación y control
    
    .row(data-aos="fade-up" data-aos-duration="750")
      .col-lg.pe-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#CBF0F5;")
          p.mb-0 La instrumentación y el control son disciplinas esenciales en la automatización industrial, permitiendo la medición precisa, el monitoreo constante y el control eficiente de variables críticas en procesos industriales. Estas áreas abarcan el uso de sensores y dispositivos de control para medir y regular parámetros como temperatura, presión, flujo y nivel, manteniendo los procesos en condiciones óptimas. Este capítulo proporciona una introducción a los principios fundamentales de la instrumentación y control, destacando los componentes y técnicas de medición y control.
      .col-lg-auto.ps-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema4/1.png")
    

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_1 4.1 Fundamentos de instrumentación
    
    p(data-aos="fade-left") La instrumentación industrial se refiere al uso de dispositivos para medir y monitorear variables físicas. Las características principales de los instrumentos, como precisión, exactitud y sensibilidad, son fundamentales para obtener datos confiables y útiles en los procesos industriales.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/2.png")
      .col-lg(data-aos="fade-left")
        .h-100.p-3.p-lg-4.d-flex.align-content-center.flex-wrap(style="background-color:#78B62E;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Exactitud y precisión:] la exactitud indica qué tan cerca está una medición del valor real, mientras que la precisión se refiere a la consistencia de las mediciones repetidas bajo las mismas condiciones.
            li.d-flex.bg-white.p-2(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Sensibilidad y resolución:] la sensibilidad es la capacidad del sensor para detectar pequeños cambios en la variable medida. la resolución representa la mínima variación que el sensor puede detectar, aspectos cruciales en la instrumentación de procesos industriales.
            li.d-flex.bg-white.p-2.mb-0(style="border-radius:4px;")
              i.fas.fa-check-circle(style="color:#78B62E;")
              span #[strong Errores e incertidumbre en la medición:] todos los instrumentos están sujetos a errores e incertidumbre en las mediciones. los errores pueden ser sistemáticos, causados por defectos en el diseño del instrumento o la calibración, o aleatorios, causados por fluctuaciones incontrolables en el entorno.
    
    Separador

    .cont_4_1
      .titulo-segundo(data-aos="flip-up")
        h2#t_4_2 4.2 Clasificación y selección de sensores
    
      p(data-aos="fade-left") Los sistemas de automatización eléctrica están compuestos por diversos elementos que permiten el control automático de procesos. A continuación, se describen algunos de los componentes clave:

      .cont_3_2.mt-4
        .row
          .col-lg(data-aos="fade-right")
            AccordionRED(tipo="a" clase-tarjeta="tarjeta")
              .row.col-xl-11.m-auto(titulo="Sensores de temperatura")
                p Entre los sensores de temperatura más comunes se encuentran los termopares, termorresistencias (RTD) y termistores, cada uno adecuado para distintos rangos de temperatura y aplicaciones industriales.
              .row.col-xl-11.m-auto(titulo="Sensores de presión")
                p Los transductores de presión y medidores de presión diferencial son usados en aplicaciones de monitoreo de gases y líquidos, esenciales en sistemas hidráulicos y neumáticos.
              .row.col-xl-11.m-auto(titulo="Sensores de caudal")
                p Los medidores de caudal, como los rotámetros y medidores de Coriolis, se utilizan para medir el flujo de líquidos y gases, asegurando la cantidad y calidad del suministro en un proceso.
              .row.col-xl-11.m-auto(titulo="Sensores de nivel")
                p Se emplean en tanques y silos para detectar la cantidad de líquido o material presente. Entre los sensores de nivel destacan los sensores de ultrasonido, radar y presión diferencial.
          .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src="@/assets/curso/tema4/3.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_3 4.3 Control de procesos y estrategias de control
  
    p(data-aos="fade-left") El control de procesos industriales busca mantener las variables de proceso dentro de límites específicos, asegurando la estabilidad y la eficiencia de los sistemas de producción. Entre las estrategias de control más comunes se encuentran:

    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="Control todo-nada (On/Off)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema4/4.svg')
          .col-md
            h5 Control todo-nada (On/Off)
            p.mb-0 Es el control básico en el que el dispositivo se enciende o apaga para mantener la variable dentro de los límites deseados. Aunque es simple, puede causar oscilaciones y es adecuado sólo para aplicaciones donde no se requiere un control continuo.
      .py-3.py-md-4(titulo="Control proporcional (P)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema4/4.svg')
          .col-md
            h5 Control proporcional (P)
            p.mb-0 Ajusta la salida del controlador en función de la desviación del valor deseado (set point). Aunque reduce las oscilaciones, puede no ser suficiente para sistemas donde se requieren ajustes más precisos.
      .py-3.py-md-4(titulo="Control proporcional-integral (PI)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema4/4.svg')
          .col-md
            h5 Control proporcional-integral (PI)
            p.mb-0 Combina el control proporcional con la eliminación de errores acumulados a lo largo del tiempo, haciendo el sistema más preciso y eliminando el error constante.
      .py-3.py-md-4(titulo="Control proporcional-integral-derivativo (PID)")
        .row.p-4.col-xl-11.m-auto
          .col-md-auto.mb-4.mb-md-0.col-7.m-auto
            figure
              img(src='@/assets/curso/tema4/4.svg')
          .col-md
            h5 Control proporcional-integral-derivativo (PID)
            p.mb-0 Es una de las estrategias de control más efectivas y se utiliza ampliamente en la industria. Este tipo de control ajusta la salida en función de la desviación actual, el error acumulado y la velocidad de cambio, permitiendo una respuesta rápida y estable a los cambios en el sistema.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_4 4.4 Calibración de Instrumentos
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/5.png")
      .col-lg(data-aos="fade-left")
        p La calibración es el proceso de ajustar un instrumento para garantizar que sus lecturas sean precisas y confiables. La calibración periódica es fundamental para mantener la exactitud en las mediciones y evitar errores sistemáticos.
        .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/9.svg")
            .col.ps-2(style="place-self:center;")
              h3.mb-0.pe-4 Procedimiento de calibración
        
        .p-4(style="background-color:#D7E1EB;")
          p.mb-0 La calibración consiste en comparar el instrumento con un estándar de referencia conocido y ajustar su salida según los resultados obtenidos. Este proceso debe realizarse en condiciones controladas y con equipos de calibración especializados.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/9.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4 Frecuencia de calibración
    
    p(data-aos="fade-left") La frecuencia de calibración depende de la naturaleza del instrumento, el entorno en el que se usa y la precisión requerida. Es recomendable seguir un programa de calibración regular para asegurar la fiabilidad de los datos.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 1.
      span Instrumentación y control en la automatización industrial.
    .p-3.p-lg-4.pt-xl-5.pb-xl-5(style="background-color:#EAEFF4;")
      figure(data-aos="fade-up")
        img(src="@/assets/curso/tema4/6.svg" alt="La Figura 1 se denomina «Instrumentación y control en la automatización industrial». El mapa conceptual se ramifica en nueve secciones principales que incluyen la importancia de la instrumentación, funciones, variables críticas, uso de sensores, dispositivos de control, técnicas de medición, técnicas de control, mantenimiento y calibración, y conclusiones. Cada rama principal se expande en subtemas específicos que detallan aspectos como tipos de sensores, métodos de medición y procedimientos de mantenimiento. Para acceder al diagrama:  https://www.mindomo.com/mindmap/51e8e25c3861438d9215600feb04697d")
    figcaption.mt-2.fw-normal Fuente: OIT, 2024.


    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/7.png")
      .col-lg(data-aos="fade-left")
        .p-4(style="background-color:#CBF0F5;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema4/8.svg")
            .col-md
              p.mb-0 El dominio de la instrumentación y el control permite a los profesionales gestionar y optimizar procesos industriales con precisión y eficiencia. A través del estudio de sensores, calibración y estrategias de control, y mediante el uso de simuladores y software especializado, los estudiantes en modalidad remota pueden desarrollar competencias prácticas y conceptuales en estas disciplinas clave. Se recomiendan los siguientes recursos de acceso libre para complementar.
    
        p.mt-3 Se recomienda profundizar en variables de sistemas productivos y Monitoreo de variables.

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="fade-up")
        a.anexo.ms-0(href="https://www.youtube.com/watch?v=wkfEZmsQqiA" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-video.svg")
          .anexo__texto
            p.fw-normal #[strong Enlace video.] “PID Control Explained”
      .col-lg.col-md-6(data-aos="fade-up")
        a.anexo.ms-0(href="https://www.festo.com/manuales/instrumentacion_basica.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-link.svg")
          .anexo__texto
            p.fw-normal #[strong Enlace web.] Manual Básico de Instrumentación.

      
                                                                                           
</template>

<script>
export default {
  name: 'Tema4',
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
