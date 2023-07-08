import { Component } from 'react';
// import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchData } from './api/api';
//
export class App extends Component {
  state = {
    searcheQuery: '',
    page: 1,
    modal: { isOpen: false, visibleData: null },
    dataImages: [],
    isLoading: false,
    error: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searcheQuery } = this.state;
    if (prevState.searcheQuery !== searcheQuery) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchData(searcheQuery);
        this.setState({ dataImages: data.hits });
        console.log('data: ', data);
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleFormSubmit = searcheQuery => {
    this.setState({ searcheQuery });
    console.log('searcheQuery: ', searcheQuery);
  };
  render() {
    const { dataImages, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <h1>Loading...</h1>}
        <ImageGallery images={dataImages} />
      </>
    );
  }
}
