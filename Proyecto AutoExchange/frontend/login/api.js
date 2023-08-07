/* const urlValidacion = "http://localhost:10003/api/auth"



export const logeate = async (login) => {
    try {
        const response = await fetch(`${urlValidacion}/login`,{
            method: 'POST',
            body: JSON.stringify(login),
            headers: { 
                'Content-Type': 'application/json' 
            }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}; */



const urlValidacion = "http://localhost:10003/api/auth";

export const logeate = async (login) => {
    try {
        const response = await fetch(`${urlValidacion}/login`,{
            method: 'POST',
            body: JSON.stringify(login),
            headers: { 
                'Content-Type': 'application/json' 
            }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};
