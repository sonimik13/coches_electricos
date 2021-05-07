
async function FetchRegistrop2 (nombre,apellido,email, pass) {
    const options = {
        method: "POST",
        body: JSON.stringify({ 
          nombre:nombre,
          apellido:apellido,
          email: email,
          pass: pass
         }),
        headers: { "Content-Type": "application/json" }
      };
    return await fetch("http://localhost:8080/signup", options)
}

export default FetchRegistrop2