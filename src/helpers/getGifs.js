export const getGifs = async (category, limit = 10) => {
    const api_key = 'mnLv4vAWHhTuqGQYqoZSczbfNaXe3A1a';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=${ limit }`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};
