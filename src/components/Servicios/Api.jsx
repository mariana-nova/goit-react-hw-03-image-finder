import axios from 'axios';

const API = '38636697-a067b0bdc1785a479f29e70f7'; 

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API}&image_type=photo&orientation=horizontal&per_page=}`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export { fetchImages };