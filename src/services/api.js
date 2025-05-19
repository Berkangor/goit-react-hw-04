import axios from 'axios';

const ACCESS_KEY = 'C0UMTmS2kRvs3nfbppITYW3GEJfeO3V4CQt4nQpncbI';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: ACCESS_KEY,
      },
    });

    if (!response.data || !response.data.results) {
      throw new Error('No images found or response is malformed.');
    }

    return {
      images: response.data.results,
      totalPages: Math.ceil(response.data.total / perPage),
    };
  } catch (error) {
    // Hata durumunu logluyoruz
    console.error('Error fetching images:', error);

    // Uygulama için daha anlamlı bir hata mesajı döndürüyoruz
    throw new Error(error.response ? error.response.data.error : 'Failed to fetch images.');
  }
};
