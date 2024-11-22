let  url_api=`${window.location.protocol}//${window.location.hostname}:8080/api/`;

function CrearRecursoApi(endpoint) {
    const url = `${url_api}${endpoint}`;
    
    return {
        async lista() {
            const response = await fetch(url);
            if (!response.ok) {
                return [];
            }
            return response.json();
        },

        async agregar(obj) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });
            if (!response.ok) {
                return null;
            }
            return response.json();
        },

        async buscar(id) {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                return null;
            }
            return response.json();
        },

        async eliminar(id) {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                return null;
            }
            return response.ok;
        },

        async editar(obj) {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });
            if (!response.ok) {
                throw new Error('Error al editar el registro');
            }
            return response.json();
        }
    };
}


const articulos = CrearRecursoApi("articulos");
const entradas = CrearRecursoApi("entradas");
const salidas = CrearRecursoApi("salidas");
const tipos_documento = CrearRecursoApi("tipos-documento");
const unidades_medida = CrearRecursoApi("unidades-medida");
 


export { articulos, entradas, salidas, tipos_documento, unidades_medida };
