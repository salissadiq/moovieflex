const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: 'b358cabb53202950aa5d86ef3ae2415a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig