import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from './Servicios/Api';
import './styles.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  handleSearchSubmit = async query => {
    await this.setState({ query, page: 1, images: [] });
    this.fetchImages();
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const newImages = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
      }));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = largeImageURL => {
    this.setState({ showModal: true, selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              onClick={() => this.handleImageClick(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {showModal && (
          <Modal onClose={this.handleCloseModal} src={selectedImage} />
        )}
      </div>
    );
  }
}

export default App;


