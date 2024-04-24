let datatable;
let datatableInitialized = false;

const initdatatable = async () =>{
    
    if(datatableInitialized){
        datatable.destroy();
    }

    await listMenu();
    datatable =$("#datatable_seccion").DataTable({
        searching: false, // Desactiva la función de búsqueda
        paging: false, // Desactiva la paginación
        ordering: false,
        info: false
    });
        
    datatableInitialized = true;
}
const listMenu = async () => {
    try {
        const response = await fetch("./datos/secciones.json");
        const menus = await response.json();

        let content = "";

        menus.forEach((seccion, index) => {
            content += 
            `<tr>
                  <td>${seccion.nombre}</td>
                  <td>${seccion.capacidad}</td>
                  <td>${seccion.usado}</td>
                  <td>
                    <button class="btn btn-danger boton"></button>
                    <button class="btn btn-primary botonEditar" data-bs-toggle="modal" data-bs-target="#editarSeccion" ></button>
                  </td>
            </tr>`;

        });
        tableBody.innerHTML = content;

    } catch(ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initdatatable();
});

btnPrimary.addEventListener('click', function() {
    myModal.show();
  });