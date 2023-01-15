  class NavBar extends HTMLElement {
    constructor() {
      super();
  
      // Create the navbar
      this.innerHTML = `
        
            <ul>
                <li><a href="./form.html">Insertar</a></li>
                <li><a href="./modificar.html">Modificar</a></li>
                <li><a href="./borrar.html">Borrar</a></li>
                <li><a href="./usuarios.html">Usuarios</a></li>
            </ul>
        
      `;
    }
  }
  
  customElements.define("nav-bar", NavBar);
  