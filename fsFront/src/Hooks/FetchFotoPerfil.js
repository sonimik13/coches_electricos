async function FetchFotoPerfil(imagen, id) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      imagen: imagen,
      id: id
    }),
    headers: {
      "Content-Type": "image/jpeg"
    }
  };
  return await fetch("http://localhost:8080/create/fotoPerfil", options)
}

export default FetchFotoPerfil