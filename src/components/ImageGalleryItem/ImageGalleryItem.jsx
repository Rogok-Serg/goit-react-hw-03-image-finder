import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState(({ isOpenModal }) => ({
      isOpenModal: !isOpenModal,
    }));
  };

  render() {
    const { image } = this.props;
    const { webformatURL, tags, largeImageURL } = image;
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={css.imageItem}
          src={webformatURL}
          alt={tags}
        />
        {this.state.isOpenModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      </li>
    );
  }
}
