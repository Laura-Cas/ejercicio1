let add = document.querySelector("#add");
let substract = document.querySelector("#substract");
let output = document.querySelector("#output");

add.addEventListener("click", function() {
  let result = parseInt(output.innerText) + 1;
  output.innerText = result;
   // Verificar que el resultado no sea mayor que 10
   if (result <= 10) {
    output.innerText = result;
  } else {
    // Mostrar advertencia cuando el contador alcanza 10
    alert("El contador no puede superar 10");
  }
});

substract.addEventListener("click", function() {
  let result = parseInt(output.innerText) - 1;

  if (result >= 0) {
    output.innerText = result;
  } else {
    alert("El contador ya está en 0");
  }
});


 

