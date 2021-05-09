async function FetchEditarCard (tarjeta, token){

    const options = {
        method:"PUT",
        body: JSON.stringify(tarjeta),
        headers:{
            "Content-Type": "application/json",
            "Authorization": token
        }
    };
    return await fetch("http://localhost:8080/edit/card", options)
}

export default FetchEditarCard;