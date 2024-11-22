import * as api from '/js/api.js';
const busqueda=document.getElementById("busqueda");
let elimnar_id=null;

const dialog_eliminar=new DialogATCH("dialog-eliminar");
dialog_eliminar.accept(async ()=>{
    let eliminado=await api.tipos_documento.eliminar(elimnar_id)
    if(eliminado){
        await Listar();
    }else{
        alert("Error")
    }
})

async function Listar() {
    let data=await api.tipos_documento.lista();
    data=data.filter(item=>
        item.nombre.trim().toLowerCase().includes(busqueda.value.trim().toLowerCase())
    );
    
    let content="";
    data.forEach((item,index) => {
        content+=`
            <tr>
                <td>${item.nombre}</td>
                <td>
                    <button class="btn-editar" onclick="window.location.href = 'tipos-documento/editar/${item.id}'">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn-eliminar" onclick="Eliminar(${item.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `
    });
    document.querySelector("tbody").innerHTML=content;
}
async function Eliminar(id){
    elimnar_id=id;
    dialog_eliminar.open()
}

window.addEventListener("load",async ()=>{
    await Listar();
});
busqueda.addEventListener("keyup",async ()=>{
    await Listar();
})

//exportar//
window.Eliminar = Eliminar;
export { Eliminar };