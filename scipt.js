// Boton Like

function btnLike(){
  var count = 200;
  var counter = document.getElementById("counter");
  var incrementBtn = document.getElementById("btnLike");

  if(incrementBtn.textContent === "Like"){
      incrementBtn.textContent = "Dislike";
      incrementBtn.style.backgroundColor = "white";
      incrementBtn.style.color = "black";
      count++;
      counter.innerText = count; 
  }
  else {
    count = 201
    incrementBtn.textContent = "Like";
    incrementBtn.style.backgroundColor = "black";
    incrementBtn.style.color = "white";
    count--;
    counter.innerText = count; 
  }
}

// Boton Seguir - Dejar de Seguir

function cambiarBotonFollow() {
var btnFollow = document.getElementById("btnFollow");
  
  if (btnFollow.textContent === "Seguir") {
    btnFollow.style.backgroundColor = "white";
    btnFollow.style.color = "black";
    btnFollow.textContent = "Dejar de seguir ";
  } else {
    btnFollow.style.backgroundColor = "black";
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
    let listItem = document.createElement('li');
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
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(comentario));
      listaComentario.appendChild(item);
      inputComentario.value = "";
    }
  }    
}


