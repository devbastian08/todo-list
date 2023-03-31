import checkComplete from "./componentes/checkComplete.js" 
import deleteIcon from "./componentes/deleteIcon.js"
 const btn = document.querySelector("[data-form-btn]");

  const createTask = (evento) => {
    evento.preventDefault(); // evitar que recargue la pagina
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li"); // creadon etiqueta <li></li>
    task.classList.add("card"); // Asignado la clase
    input.value = ""; // se le da el valor al input de string vacio
    const taskcontent = document.createElement("div"); //creando etiqueta <div></div>
    taskcontent.appendChild(checkComplete()); // añadiendo el div a la <i></i>
    const titleTask = document.createElement("span"); //creando la etiqueta <span></span>
    titleTask.classList.add("task"); //creando la clase task
    titleTask.innerHTML = value; // añadiendo el valor del input a la lista contenido html
    taskcontent.appendChild(titleTask); //añadiendo el html la div
    //task.innerHTML = content;
    task.appendChild(taskcontent); //añadiendo el taskcontent la <li></li>
    task.appendChild(deleteIcon());
    list.appendChild(task);
  };

  // eventos que se desarrollan con el boton
  btn.addEventListener("click", createTask);
