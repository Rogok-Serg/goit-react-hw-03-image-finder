import React from 'react';
import { Api } from './Api/Api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  <>
    <Api />
    <Button />
    <ImageGallery />
    <ImageGalleryItem />
    <Loader />
    <Modal />
    <Searchbar />
  </>;
};
