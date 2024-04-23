let datatable;
let datatableInitialized = false;

const initdatatable = async () =>{
    if(datatableInitialized){
        datatable.destroy();
    }
    await listMenu();
    datatable =$("#datatable_menus").DataTable({});
    datatableInitialized = true;
}
const listMenu = async () => {
    try {
        const response = await fetch("./datos/menu.json");
        const menus = await response.json();

        let content = "";

        menus.forEach((menu, index) => {
            content += 
            `<tr>
                  <td>${menu.name}</td>
                  <td>${menu.price}</td>
                  <td>${menu.quantity}</td>
                  <td>
                  <button class="btn boton-opcion btn-danger" value="Eliminar">
                  
                  </button>
                  <button class="btn boton-opcion btn-secondary" value="Editar">
                  
                  </button>
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