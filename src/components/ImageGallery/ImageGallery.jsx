import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { List } from './ImageGallery.styled';
import { fetchImages } from 'components/services/fetchImages';
import PropTypes from 'prop-types';

const initialState = {
  images: null,
  totalHits: 0,
  status: 'idle',
  page: 1,
};

class ImageGallery extends Component {
  state = { ...initialState };

  increasePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName } = this.props;
    const { page } = this.state;

    if (prevProps.searchName !== searchName) {
      this.setState({ ...initialState });
    }

    if (prevState.page !== page || prevProps.searchName !== searchName) {
      this.setState({ status: 'pending' });
      fetchImages(searchName, page)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          const { hits, totalHits } = data;
          if (totalHits === 0) throw new Error('Nothing found');

          this.setState(prevState => {
            return {
              images: prevState.images
                ? [...prevState.images, ...hits]
                : [...hits],
              totalHits,
              status: 'resolved',
            };
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ status: 'rejected' });
        });
    }
  }

  render() {
    const { status, images, totalHits, page } = this.state;
    const { searchName } = this.props;

    if (status === 'pending') return <Loader />;

    if (status === 'resolved')
      return (
        <>
          <List>
            {images.map(image => {
              const { id, webformatURL, largeImageURL } = image;
              const renderData = { id, webformatURL, largeImageURL };
              return (
                <ImageGalleryItem
                  key={id}
                  renderData={renderData}
                  title={`${searchName} picture`}
                />
              );
            })}
          </List>

          {images.length > 0 && totalHits - page * 12 > 0 && (
            <LoadMoreButton onClick={this.increasePage} />
          )}
        </>
      );

    if (status === 'rejected') return <ErrorMessage />;
  }
}

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};

export default ImageGallery;
