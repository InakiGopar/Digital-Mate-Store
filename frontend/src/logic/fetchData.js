export async function getData(url) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('No se pudo obtener los datos');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw new Error('Error al obtener los datos');
    }
    
}