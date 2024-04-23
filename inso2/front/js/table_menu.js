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
        const response = await fetch("El json");
        const menus = await response.json();

        let content = '';
        menus.forEach((menu,index) => {
            content+=
            <tr>
                <td>${menu.name}</td>
                <td>${menu.price}</td>
                <td>${menu.quanty}</td>
                <td><button class="btn"></button></td>
            </tr>
            
        });
        datatable_menus.innerHTML = content;
    } catch(ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initdatatable();
});