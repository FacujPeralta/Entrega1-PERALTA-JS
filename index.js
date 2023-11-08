document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault();

  var palabraClave = document.getElementById("palabraClave").value;

  if (palabraClave === "MILEI") {
      console.log("GENTE COMO VOS ES LA QUE VALE, VAMOS POR UN FUTURO MEJOR!");
  } else if (palabraClave === "MASSA") {
      console.log("No podes votar a MASSA teniendo una inflación del 150%, SOS TERRIBLE NAVO!");
  } else {
      console.log("La palabra clave ingresada es incorrecta. Debe ser 'MILEI' o 'MASSA' en MAYUSCULA POR FAVOR.");
  }
});