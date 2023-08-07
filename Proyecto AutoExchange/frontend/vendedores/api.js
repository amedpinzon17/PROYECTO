const url = "http://localhost:10002/vendedores";

export const getVendedores = async () =>{
    try{
        const datos = await fetch(`${url}/all`);
        const result = await datos.json();
        return result;
    }catch(error){
        console.log(error);
    }
}