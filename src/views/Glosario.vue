<template lang="pug">
.curso-main-container.glosario
  BannerInterno(icono="fas fa-atlas" titulo="Glosario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .glosario__letra-item.mb-2(v-for="letra in orderedData" :key="'letra-'+letra.letra")
      .glosario__letra-item__letra.me-4
        .glosario__letra-item__letra__icono
          span {{letra.letra}}
      .glosario__letra-item__texto
        p.mb-3(v-for="termino in letra.terminos")
          strong
            i.lista-ul__vineta
          strong(v-html="termino.terminoHtml || termino.termino") 
          strong : 
          span(v-html="termino.significado")
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Actuador',
          significado:
            'Componente que transforma una señal de control en movimiento físico, permitiendo ejecutar acciones como abrir válvulas, mover cilindros o girar motores.',
        },
        {
          termino: 'Automatización',
          significado:
            'Uso de tecnologías para operar y controlar procesos sin intervención humana directa, con el fin de aumentar la eficiencia, seguridad y precisión en la producción.',
        },
        {
          termino: 'Bomba Hidráulica',
          significado:
            'Dispositivo que mueve líquido a presión en un sistema hidráulico, permitiendo la transmisión de energía para ejecutar movimientos en maquinaria y equipos industriales.',
        },
        {
          termino: 'Caudal',
          significado:
            'Medida del flujo de un fluido a través de una tubería o sistema; los sensores de caudal son cruciales en procesos industriales que requieren control preciso de líquidos o gases.',
        },
        {
          termino: 'Compresor',
          significado:
            'Máquina que aumenta la presión de un gas, como el aire, para su uso en sistemas neumáticos, proporcionando la energía necesaria para el funcionamiento de actuadores.',
        },
        {
          termino: 'Control PID',
          significado:
            'Controlador Proporcional-Integral-Derivativo; técnica de control que ajusta la salida en función de la desviación del valor deseado, su acumulación y velocidad de cambio.',
        },
        {
          termino: 'GIS (Sistema de Información Geográfica)',
          significado:
            'Herramienta que permite el análisis y visualización de datos geoespaciales, aplicable en la gestión de la variabilidad espacial en agricultura y logística.',
        },
        {
          termino: 'Hidráulica',
          significado:
            'Tecnología que usa líquidos a presión para generar fuerza y movimiento, aplicable en maquinaria pesada y procesos industriales que requieren alta potencia y precisión.',
        },
        {
          termino: 'Instrumentación',
          significado:
            'Disciplina que se encarga de la medición y monitoreo de variables de proceso, como temperatura, presión, flujo y nivel, utilizando sensores y transductores.',
        },
        {
          termino: 'Lógica Cableada',
          significado:
            'Método de automatización basado en el cableado físico de dispositivos como relés y contactores, formando circuitos que ejecutan funciones específicas.',
        },
        {
          termino: 'Lógica Programable',
          significado:
            'Método de control basado en programación, usando dispositivos como PLCs, lo que permite modificar y ampliar la lógica de control sin necesidad de cambios físicos en el cableado.',
        },
        {
          termino: 'Neumática',
          significado:
            'Tecnología que utiliza aire comprimido para generar movimiento, aplicada en sistemas que requieren rapidez y flexibilidad, como líneas de ensamblaje y herramientas.',
        },
        {
          termino: 'PLC (Controlador Lógico Programable)',
          significado:
            'Dispositivo electrónico usado para automatizar procesos mediante programación, permitiendo el control de secuencias complejas en líneas de producción.',
        },
        {
          termino: 'SCADA',
          significado:
            'Sistema de Supervisión, Control y Adquisición de Datos; permite monitorear y controlar procesos industriales a distancia en tiempo real.',
        },
        {
          termino: 'Sensor',
          significado:
            'Dispositivo que detecta cambios en una variable física y convierte esa información en una señal eléctrica que puede ser medida o utilizada para el control.',
        },
        {
          termino: 'Sistema de Información',
          significado:
            'Conjunto de componentes que recopilan, almacenan y procesan datos para apoyar la toma de decisiones y la gestión de operaciones en una organización o industria.',
        },
        {
          termino: 'Válvula de Control',
          significado:
            'Dispositivo que regula el flujo y la presión de un fluido en un sistema hidráulico o neumático, controlando el movimiento de actuadores y el flujo de energía en el sistema.',
        },
        {
          termino: 'Variabilidad Espacial',
          significado:
            'Cambios en una variable medida (como temperatura, humedad o calidad del suelo) en función de la ubicación geográfica, útil en sectores como agricultura y medio ambiente.',
        },
        {
          termino: 'Variabilidad Temporal',
          significado:
            'Cambios en una variable en función del tiempo, como las fluctuaciones diarias o estacionales de temperatura o humedad en un proceso o entorno industrial.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
