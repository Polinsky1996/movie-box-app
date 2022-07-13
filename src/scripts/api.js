const API_KEY = '418a79dd1223be1fe79840f231fedf5a';
const BASE_URL = new URL('https://api.themoviedb.org');

const setError = async (err) => {
    let error;

    if (err instanceof Error) {
        error = err.message;
    }
    else {
        error = await err.json()

        if (err.status != 401 && err.status != 404) {
            error = error.errors.join(' ')
        }
        else {
            const {status_message : message} = error;

            error = message
        }
    }

    return new Error('Error is ' + error);
}

const fetchResources = (url) => {
    return fetch(url)
            .then( response => {
                if (response.ok) {
                    return response.json()
                }
                else{
                    return Promise.reject(response)
                }
            })
            .catch( async err => {
                const error = await setError(err);

                throw error
            })   
}

const getMultiResult = async (query, page) => {
    const MULTI_URL = new URL ('/3/search/multi', BASE_URL);

    MULTI_URL.searchParams.append('api_key', API_KEY);
    MULTI_URL.searchParams.append('query', query);
    MULTI_URL.searchParams.append('page', page);
    MULTI_URL.searchParams.append('include_adult', false);

    const listMovies = await fetchResources(MULTI_URL);

    return listMovies
}

const searchInCategory = async (category, query, page = 1) => {
    const CATEGORY_URL = new URL (`/3/search/${category}`, BASE_URL);

    CATEGORY_URL.searchParams.append('api_key', API_KEY);
    CATEGORY_URL.searchParams.append('query', query);
    CATEGORY_URL.searchParams.append('page', page);

    const listResultCategory = await fetchResources(CATEGORY_URL);

    return listResultCategory
}

const getMovieDetails = async (id) => {
    const MD_URL = new URL (`/3/movie/${id}`, BASE_URL);

    MD_URL.searchParams.append('api_key', API_KEY);

    const movieDetails = await fetchResources(MD_URL);

    return movieDetails
}

const getImages = async (path, resolution) => {
    const IMG_URL = (`https://image.tmdb.org/t/p/w${resolution}/${path}`);
    return IMG_URL
}

const getGenresList = async (type) => {
    const GENRE_URL = new URL (`/3/genre/${type}/list`, BASE_URL);

    GENRE_URL.searchParams.append('api_key', API_KEY);

    const listGenres = await fetch(GENRE_URL)
        .then( response => response.json())
        .catch( err => console.log(err));
        

    return listGenres
}

export {
    searchInCategory,
    getMovieDetails,
    getMultiResult,
    getGenresList,
    getImages
}