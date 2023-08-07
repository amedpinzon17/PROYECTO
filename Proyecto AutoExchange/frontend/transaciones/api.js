const url = "http://localhost:10002/transacciones";

export const getTransacciones = async () => {
    try{
        const datos = await fetch(`${url}/all`);
        const result = await datos.json();
        return result;
    }catch(error){
        console.log(error);
    }
}