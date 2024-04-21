import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const accessKey = 'DoNcpsYpjca-7sSF9nnM1KURCbJfGaK5XPBofFIq1ek';
  const apiUrl = 'https://api.unsplash.com/search/photos';

  const fetchImages = () => {
    setLoading(true);
    axios.get(apiUrl, {
      params: { query, page, per_page: 12 },
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    })
    .then(response => {
      setImages(prevImages => [...prevImages, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  };

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    if (query === '') return;

    fetchImages();
  }, [query]);

  return (
    <div>
       <SearchBar onSubmit={handleSubmit}  /> 
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal 
          isOpen={true} 
          onRequestClose={() => setSelectedImage(null)} 
          imageUrl={selectedImage} 
        />
      )}
    </div>
  );
};

export default App;
