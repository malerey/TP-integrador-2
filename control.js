const usuarios = [

    [0, "Carla", 1545628984, "carla@gmail.com"],
    [1, "Pedro", 1545251245, "pedro@gmail.com"],
    [2, "Lucas", 1523357849, "lucas@gmail.com"],
    [3, "Ana", 15789456, "ana@gmail.com"],
]

let accion = ""

while (accion !== "SALIR") {

  accion = prompt(`Por favor, indique qué accion desea tomar: 

  - 👤 [CREAR] un usuario 
  - 🔎 [BUSCAR] un usuario
  - 📄 [LISTAR] todos los usuarios
  - 🗑️ [ELIMINAR] un usuario
  - 🚪 [SALIR] del programa
  `)

  accionMinuscula = accion.toLowerCase()

if (accionMinuscula === "crear") {
  let preguntaRepeticionCrear = " "
  while (preguntaRepeticionCrear !== "NO") {
    let nombre = prompt("Por favor, ingrese su nombre de pila")
    let telefono = prompt("Por favor, ingrese su numero de telefono")
    let email = prompt("Por favor, ingrese su direccion de mail")
    let confirmacion = prompt(`Nombre: ${nombre}
Telefono: ${telefono}
Email: ${email} 
¿Confirma los datos? SI/NO`)
    if (confirmacion.toLowerCase() === "no") {
        alert(`La acción fue cancelada`)
    }

    else if (confirmacion.toLowerCase() === "si") {
        usuarios.push([usuarios.length, nombre, Number(telefono), email])
        alert(`Usuario ${nombre} agregado con éxito. Estos son todos los datos del nuevo usuario:
        ID: ${usuarios.length - 1}
        Nombre: ${nombre}
        Telefono: ${telefono}
        Email: ${email}`)
        alert(`Estos son los usuarios actuales: 
        ${usuarios.join("\n")}`)     
    }

    else {
      alert(`La opción ingresada no es válida.`)
    }
    preguntaRepeticionCrear = prompt("¿Desea volver a realizar el procedimiento? SI/NO");
}
}

else if (accionMinuscula === "buscar") {

  let repetirProcedimientoBuscar = ""  
  while (repetirProcedimientoBuscar !== "NO") {
  let usuarioBuscado = false;
  let preguntaBusqueda = prompt(`Por favor, indique por qué dato quiere buscar al usuario, 
ingresando el número correspondiente:
    - ID: 1
    - Nombre: 2
    - Número de teléfono: 3
    - Dirección de correo electrónico: 4`)
  
    switch (preguntaBusqueda) {
      case "1" :
          let preguntaIdABuscar = prompt(`Por favor, ingrese el ID del usuario que quiere buscar`)
          let respuestaIdABuscar = Number(preguntaIdABuscar)
          for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i][0] === respuestaIdABuscar) {
              usuarioBuscado = true  
              alert(usuarios[i])    
            }
          }
          if (usuarioBuscado == false) {
            alert(`El usuario buscado no existe.`)
          }
          break;
  case "2":
    let preguntaNombreABuscar = prompt(`Por favor, ingrese el nombre del usuario que quiere buscar`)
    let nombreUsuario = preguntaNombreABuscar.toLowerCase()
    let primeraLetra = nombreUsuario.charAt(0).toUpperCase() 
    let restoDelNombre = nombreUsuario.slice(1, preguntaNombreABuscar.length)
    nombreUsuario = primeraLetra + restoDelNombre 
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i][1] === nombreUsuario) {
        usuarioBuscado = true    
        alert(usuarios[i])    
      }
  }
  if (usuarioBuscado == false) {
    alert(`El usuario buscado no existe.`)
  }

  break;
  case "3":
      let preguntaTelefonoABuscar = prompt(`Por favor, ingrese el número de teléfono del usuario que quiere buscar`)
      let respuestaTelefonoABuscar = Number(preguntaTelefonoABuscar)  
       for (let i = 0; i < usuarios.length; i++) {       
      if (usuarios[i][2] === respuestaTelefonoABuscar) {
        usuarioBuscado = true      
        alert(usuarios[i])    
        }
     }
     if (usuarioBuscado == false) {
      alert(`El usuario buscado no existe.`)
    }
     break; 
  case "4":
    let preguntaMailABuscar = prompt(`Por favor, ingrese el mail del usuario que quiere buscar`)  
       for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i][3] === preguntaMailABuscar) {
        usuarioBuscado = true        
        alert(usuarios[i])    
          }        
        }
        if (usuarioBuscado == false) {
          alert(`El usuario buscado no existe.`)
        }
        break;  
  default: 
    alert(`La opción ingresada no es válida`)
    break;
  }
  repetirProcedimientoBuscar = prompt(`¿Desea repetir el procedimiento? SI/NO`)
  }
  }


else if (accionMinuscula === "listar") {
  let preguntaRepeticionListar = ""
while (preguntaRepeticionListar !== "NO") {
alert(`Estos son todos los usuarios:
${usuarios.join("\n")}`)
preguntaRepeticionListar = prompt(`¿Desea repetir la operación? SI/NO`)
}
}

else if (accionMinuscula === "eliminar") {

let preguntaRepeticionEliminar = ""
while (preguntaRepeticionEliminar !== "NO") {
let usuarioEncontrado = false;
  let preguntaIdAEliminar = prompt(`Por favor, ingrese el ID del usuario que quiere eliminar`)
let respuestaIdAEliminar = Number(preguntaIdAEliminar)

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i][0] === respuestaIdAEliminar) {
  usuarioEncontrado = true;
    let confirmacionEliminacion = prompt(`Estos son los datos del usuario buscado:
  ${usuarios[i]}
  ¿Confirma que desea eliminar los datos de este usuario? SI/NO`)

  if (confirmacionEliminacion.toLowerCase() === "si") {
    usuarios.splice(i, 1)
    alert(`Se ha eliminado el usuario exitosamente.`)
    alert(`Estos son los usuarios que quedan: ${usuarios.join("\n")}.`) 
    }        
    else if (confirmacionEliminacion.toLowerCase() === "no") {
    alert(`La operacion fue cancelada.`)
  }
  }
 }
if (usuarioEncontrado == false) {
  alert(`El usuario ingresado no existe.`)
}
preguntaRepeticionEliminar = prompt(`¿Desea repetir la operación? SI/NO`)
if (preguntaRepeticionEliminar !== "NO" && preguntaRepeticionEliminar !== "SI") {
  alert(`La respuesta ingresada no es válida.`)
  break;
}
}
}


else if (accionMinuscula === "salir") {
  let preguntaConfirmacionSalir = prompt(`¿Confirma que desea salir del programa? SI/NO`)
 
  if (preguntaConfirmacionSalir === "SI") {
    alert(`Hasta la próxima.`)
    }

  else {
    alert(`Si no quiere salir, volvemos a empezar.`)
    accion = ""
  }  

} 

  else {
    alert(`La opción ingresada no es válida. Volvemos a empezar.`)
    
  }

}

