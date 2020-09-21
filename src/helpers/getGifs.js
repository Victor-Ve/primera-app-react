//optner los gif atraves de una api
export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=15&api_key=4Hlg5kdvpZ7JtxswAPz2GtQNBpkJ7zOA`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  //Obtener solo datos importantes de la api
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
