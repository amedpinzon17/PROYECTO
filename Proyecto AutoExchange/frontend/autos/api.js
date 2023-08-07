const url = "http://localhost:10002/autos";


export const getAutos = async () => {
    try{
        const datos = await fetch(`${url}/all`);
        const result = await datos.json();
        return result;
    }catch(error){
        console.log(error);
    }
}