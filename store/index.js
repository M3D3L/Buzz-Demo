
export const state = () => ({
  email: '',
  password: '',
  nombreComerial: "",
  razonSocial: "",
  rfc: "",
  nombreContacto: "",
  telefono: "",
  codigoPostal: "",
  cuidad: "",
  estado: "",
  pais: "",
  colonia:"",
  direccion: "",
  credito: false,
  debito: false,
  planBuzz: true,
  ingresosBuzz: true,
  aliasTarjeta: "",
  nombreTarjeta: "",
  numeroTarjeta: "",
  mm: '',
  yy: '',
  cvv: "",
  tipoSector: "",

  mesTarjeta: "",
  yearTarjeta: "",
  cvvAutomatico: "",

  comida: "",

  menu:{
    product:{
      productId: '',
      productCategory: '',
      productName: '',
      productDiscription:'',
      productSize:'',
      productPrice:'',
    },
    extras:{
      productId: '',
      productCategory: '',
      productName: '',
      productDiscription:'',
      productSize:'',
      productPrice:'',
    },
  }

})

export const mutations = {
  updateEmail(state, email) {
    state.email = email
  },
  updatePassword(state, password) {
    state.password = password
  },
  updateNombreComerial(state, nombreComerial) {
    state.nombreComerial = nombreComerial
  },
  updateRazonSocial(state, razonSocial) {
    state.razonSocial = razonSocial
  },
  updateRfc(state, rfc) {
    state.rfc = rfc
  },
  updateNombreContacto(state, nombreContacto) {
    state.nombreContacto = nombreContacto
  },
  updateTelefono(state, telefono) {
    state.telefono = telefono
  },
  updateCodigoPostal(state, codigoPostal) {
    state.codigoPostal = codigoPostal
  },
  updateCuidad(state, cuidad) {
    state.cuidad = cuidad
  },
  updateEstado(state, estado) {
    state.estado = estado
  },
  updatePais(state, pais) {
    state.pais = pais
  },
  updateColonia(state, colonia) {
    state.colonia = colonia
  },
  updateDireccion(state, direccion) {
    state.direccion = direccion
  },
  updateCredito(state, credito) {
    state.credito = credito
  },
  updateDebito(state, debito) {
    state.debito = debito
  },
  updatePlanBuzz(state, planBuzz) {
    state.planBuzz = planBuzz
  },
  updateIngresosBuzzz(state, ingresosBuzz) {
    state.ingresosBuzz = ingresosBuzz
  },
  updateAliasTarjeta(state, aliasTarjeta) {
    state.aliasTarjeta = aliasTarjeta
  },
  updateNombreTarjeta(state, nombreTarjeta) {
    state.nombreTarjeta = nombreTarjeta
  },
  updateNumTargeta(state, numTargeta) {
    state.numTargeta = numTargeta
  },
  updateMm(state, mm) {
    state.mm = mm
  },
  updateYy(state, yy) {
    state.yy = yy
  },
  updateCvv(state, cvv) {
    state.cvv = cvv
  },
  updateTipoSector(state, tipoSector) {
    state.tipoSector = tipoSector
  },
  updateTipoComida(state, tipoComida) {
    state.tipoComida = tipoComida
  },
  }
