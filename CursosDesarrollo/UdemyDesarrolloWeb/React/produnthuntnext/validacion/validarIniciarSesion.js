export default function validarIniciarSesion(valores) {
  let errores = {};

  // Validar el email
  if (!valores.email) {
    errores.email = "El Email es Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no válido";
  }

  // validar el password
  if(!valores.password){
    errores.password = "El Password es obligatorio"
  }

  return errores;
}
