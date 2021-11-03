export { default as BaseArrow } from '../..\\components\\BaseArrow.vue'
export { default as BaseInput } from '../..\\components\\BaseInput.vue'
export { default as BaseModal } from '../..\\components\\BaseModal.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as BuzzEmpresaBaseSlider } from '../..\\components\\BuzzEmpresa\\BaseSlider.vue'
export { default as BuzzEmpresaEmprezaHome } from '../..\\components\\BuzzEmpresa\\EmprezaHome.vue'
export { default as IndexComponentsBaseMarque } from '../..\\components\\indexComponents\\BaseMarque.vue'
export { default as IndexComponentsMobileMenu } from '../..\\components\\indexComponents\\MobileMenu.vue'
export { default as IndexComponentsNavDrawer } from '../..\\components\\indexComponents\\NavDrawer.vue'
export { default as IndexComponentsToggleButton } from '../..\\components\\indexComponents\\ToggleButton.vue'
export { default as RegistraEmpresaUno } from '../..\\components\\RegistraEmpresaComponents\\RegistraEmpresaUno.vue'
export { default as RegistraEmpresaComponentsTipoUsuario } from '../..\\components\\RegistraEmpresaComponents\\TipoUsuario.vue'
export { default as RegistraTarjetaCuatro } from '../..\\components\\RegistraTarjetaComponents\\RegistraTarjetaCuatro.vue'
export { default as RegistraTarjetaTres } from '../..\\components\\RegistraTarjetaComponents\\RegistraTarjetaTres.vue'
export { default as SubcomponentsBaseArrow } from '../..\\components\\subcomponents\\BaseArrow.vue'
export { default as SubcomponentsGenericSlider } from '../..\\components\\subcomponents\\GenericSlider.vue'
export { default as SubcomponentsIconContainer } from '../..\\components\\subcomponents\\iconContainer.vue'
export { default as SubcomponentsIconToggleRow } from '../..\\components\\subcomponents\\iconToggleRow.vue'
export { default as SubcomponentsNegociosSelected } from '../..\\components\\subcomponents\\NegociosSelected.vue'
export { default as SubcomponentsSquareBgHeader } from '../..\\components\\subcomponents\\SquareBgHeader.vue'
export { default as SubcomponentsToggleButton } from '../..\\components\\subcomponents\\ToggleButton.vue'
export { default as SvgBar } from '../..\\components\\svgComponents\\SvgBar.vue'
export { default as SvgBoneless } from '../..\\components\\svgComponents\\SvgBoneless.vue'
export { default as SvgBotana } from '../..\\components\\svgComponents\\SvgBotana.vue'
export { default as SvgBurger } from '../..\\components\\svgComponents\\SvgBurger.vue'
export { default as SvgCafe } from '../..\\components\\svgComponents\\SvgCafe.vue'
export { default as SvgCarne } from '../..\\components\\svgComponents\\SvgCarne.vue'
export { default as SvgComida } from '../..\\components\\svgComponents\\SvgComida.vue'
export { default as SvgConvenencia } from '../..\\components\\svgComponents\\SvgConvenencia.vue'
export { default as SvgEntretenimiento } from '../..\\components\\svgComponents\\SvgEntretenimiento.vue'
export { default as SvgGasolina } from '../..\\components\\svgComponents\\SvgGasolina.vue'
export { default as SvgGourmet } from '../..\\components\\svgComponents\\SvgGourmet.vue'
export { default as SvgHotdog } from '../..\\components\\svgComponents\\SvgHotdog.vue'
export { default as SvgOtro } from '../..\\components\\svgComponents\\SvgOtro.vue'
export { default as SvgPastel } from '../..\\components\\svgComponents\\SvgPastel.vue'
export { default as SvgPescado } from '../..\\components\\svgComponents\\SvgPescado.vue'
export { default as SvgPizza } from '../..\\components\\svgComponents\\SvgPizza.vue'
export { default as SvgPollo } from '../..\\components\\svgComponents\\SvgPollo.vue'
export { default as SvgSalud } from '../..\\components\\svgComponents\\SvgSalud.vue'
export { default as SvgSushi } from '../..\\components\\svgComponents\\SvgSushi.vue'
export { default as SvgTaco } from '../..\\components\\svgComponents\\SvgTaco.vue'
export { default as BuzzEmpresaSubcomponentsBaseHeader } from '../..\\components\\BuzzEmpresa\\subcomponents\\BaseHeader.vue'
export { default as BuzzEmpresaSubcomponentsBaseingresos } from '../..\\components\\BuzzEmpresa\\subcomponents\\Baseingresos.vue'
export { default as BuzzEmpresaSubcomponentsDonutChart } from '../..\\components\\BuzzEmpresa\\subcomponents\\DonutChart.vue'
export { default as BuzzEmpresaSubcomponentsDoughnutChart } from '../..\\components\\BuzzEmpresa\\subcomponents\\DoughnutChart.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
