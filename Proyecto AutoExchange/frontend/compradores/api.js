const url = "http://localhost:10002/compradores";

export const getComprador = async () => {
    try{
        const data = await fetch(`${url}/all`);
        const result = await data.json();
        return result;
    }catch(error){
        console.log(error);
    }
}