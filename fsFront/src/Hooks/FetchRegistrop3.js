
async function FetchRegistrop2 (telefono) {
    const options = {
        method: "POST",
        body: JSON.stringify({telefono:telefono }),
        headers: { "Content-Type": "application/json" }
      };
    return await fetch("http://localhost:8080/signup", options)
}

export default FetchRegistrop2