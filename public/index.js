// import { NavBar } from "./navbar_element.js";

fetch('http://localhost:8080/api/usuarios')
  .then(response => response.json())
  .then(data => {
    //busco elemento tabla
    let table = document.getElementById('data-table');
    data.forEach(item => {
      //creo elemento
      let fila = document.createElement('tr');
      // Creo nuevo elemento para la primera columna
      let col1 = document.createElement('td');
      // asigno el valor y le doy sus estilos
      col1.textContent = item.Nombre;
      col1.style.backgroundColor = '#3596B5';
      col1.style.fontFamily = 'monospace';
      // se lo pongo al final
      fila.appendChild(col1);
  // /----------------------------- 
      // Creo nuevo elemento para la segunda columna
      let col2 = document.createElement('td');
      // asigno el valor y le doy sus estilos
      col2.textContent = item.Email;
      col2.style.backgroundColor = "#3596B5";
      col2.style.fontFamily = 'monospace';
      // se lo pongo al final
      fila.appendChild(col2);

      // ahora se añade a al tabla
      table.appendChild(fila);
    });
 
  });
  