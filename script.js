(() => {
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
    const content = `
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskcontent); //añadiendo el taskcontent la <li></li>
    list.appendChild(task);
  };

  // eventos que se desarrollan con el boton
  btn.addEventListener("click", createTask);

  //creando la etiquta <i></i> y sus clases
  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
})();
