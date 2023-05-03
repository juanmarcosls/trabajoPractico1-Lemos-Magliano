// Boton Like

function btnLike(){
  var count = 200;
  var counter = document.getElementById("counter");
  var incrementBtn = document.getElementById("btnLike");

  if(incrementBtn.textContent === "Me gusta"){
      incrementBtn.textContent = "No me gusta";
      incrementBtn.style.backgroundColor = "#193A4D";
      incrementBtn.style.color = "white";
      count++;
      counter.innerText = count; 
  }
  else {
    count = 201
    incrementBtn.textContent = "Me gusta";
    incrementBtn.style.backgroundColor = "#BEDDEF";
    incrementBtn.style.color = "black";
    count--;
    counter.innerText = count; 
  }
}

// Boton Seguir - Dejar de Seguir

function cambiarBotonFollow() {
var btnFollow = document.getElementById("btnFollow");
  
  if (btnFollow.textContent === "Seguir") {
    btnFollow.style.backgroundColor = "#185018";
    btnFollow.style.color = "white";
    btnFollow.textContent = "Dejar de seguir ";
  } else {
    btnFollow.style.backgroundColor = "#2AA02A";
    btnFollow.style.color = "white";
    btnFollow.textContent = "Seguir";
   }
}



function agregarTarea(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;

    if (nombre === '') {
        alert('No ha ingresado un nombre');
        return;
    }
    let text = document.createTextNode(nombre + ': ' + descripcion);
    let listItem = document.createElement('p');
    listItem.appendChild(text);
    document.getElementById('lista-de-tareas').appendChild(listItem);
}
document.getElementById('boton-agregar-tarea').addEventListener('click', agregarTarea);



function comentar(){
  const inputComentario = document.getElementById("input-comentario");
  const botonAgregar = document.getElementById("agregar");
  const listaComentario = document.getElementById("lista-comentario");
  
  botonAgregar.addEventListener("click", agregarComentario);
  inputComentario.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      agregarComentario();
    }
  });
  
  function agregarComentario() {
    const comentario = inputComentario.value;
    if (comentario.trim() !== "") {
      const item = document.createElement("p");
      item.appendChild(document.createTextNode(comentario));
      listaComentario.appendChild(item);
      inputComentario.value = "";
    }
  }    
}


