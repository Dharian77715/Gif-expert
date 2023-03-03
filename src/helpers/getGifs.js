export const getGifs= async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FxtCNoocu7Q32ykpdwAeUS7YMg1KAcnv&q=Valorant=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_mediun
    }))
        return gifs;

}