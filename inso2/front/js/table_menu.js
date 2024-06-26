let datatable;
let datatableInitialized = false;

const initdatatable = async () =>{
    
    if(datatableInitialized){
        datatable.destroy();
    }

    await listMenu();
    datatable =$("#datatable_menus").DataTable({
        searching: false, // Desactiva la función de búsqueda
        paging: false, // Desactiva la paginación
        ordering: false,
        info: false
    });
    datatableInitialized = true;
}
const listMenu = async () => {
    try {
        const response = await fetch("./datos/menu.json");
        const menus = await response.json();

        let content = "";

        menus.forEach((menu) => {
            content += 
            `<tr>
                  <td>${menu.name}</td>
                  <td>${menu.price}</td>
                  <td>${menu.quantity}</td>
                  <td>
                    <button class="btn btn-danger boton"></button>
                    <button class="btn btn-primary botonEditar" data-bs-toggle="modal" data-bs-target="#editarMenu" ></button>
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
