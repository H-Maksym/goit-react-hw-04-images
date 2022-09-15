import React, { Component } from 'react';

import { toastConfigs } from 'config/notifyConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Circles } from 'react-loader-spinner';

//* Components
import fetchImage from 'services';

import Title from 'components/Title';
import Box from 'components/Box';
import Button from 'components/Button';

import SearchBar from 'components/SearchBar';
import SearchForm from 'components/SearchForm';
import ImageGallery from 'components/ImageGallery';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  LOADED: 'loaded',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    totalHits: 0,
    status: Status.IDLE,
  };

  /**set contacts from Locale Storage */
  async componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchValue !== prevState.searchValue
    ) {
      await this.getImages();
    }
  }

  /** event handler filter*/
  handleFormSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.elements.query.value;

    //componentShouldUpdate()
    if (
      searchValue.trim() !== this.state.searchValue ||
      this.state.page !== 1
    ) {
      this.setState({
        searchValue,
        page: 1,
        images: [],
        totalHits: 0,
      });
    }

    e.target.reset();
  };

  /** calculated value for filter*/
  getImages = async () => {
    const { searchValue, page } = this.state;
    this.setState({ status: Status.PENDING });
    try {
      console.log(this.state.status);
      console.log('before', this.state.images.length);
      console.log('before', this.state.totalHits);

      if (this.state.images.length > this.state.totalHits) {
        this.setState({ status: Status.LOADED });
        toast.info('Everything is loaded');
        return;
      }

      const data = await fetchImage(searchValue, page);

      if (this.state.page === 1) {
        if (data.totalHits === 0) {
          toast.info(
            `Nothing was found for your query - "${this.state.searchValue}"`
          );
          this.setState({ status: Status.RESOLVED });
          return;
        }
        toast.success(`${data.totalHits} pictures were found`, toastConfigs);
        this.setState({ totalHits: data.totalHits });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        status: Status.RESOLVED,
      }));

      if (data.hits.length < 180) {
        this.setState({ status: Status.LOADED });
        toast.info('Everything is loaded');
      }
    } catch (error) {
      this.setState({ status: Status.REJECTED });
      toast.error('oops :( Something wrong, try again');
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  /** render*/
  render() {
    const { images, status } = this.state;
    console.log(status);

    return (
      <>
        <Box py={0} as="section">
          <Box m="0 auto" px={15} py={0}>
            <ToastContainer />
            <Title>Image Gallery</Title>
            <SearchBar>
              <SearchForm onClick={this.handleFormSubmit} />
            </SearchBar>

            {status === Status.PENDING && (
              // <Box position="fixed" top="50vh" left="50vw">
              <Circles
                height="150"
                width="150"
                color=" #3f51b5"
                ariaLabel="circles-loading"
                wrapperStyle={{
                  position: 'fixed',
                  bottom: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  zIndex: '100',
                }}
                visible={true}
              />
              // </Box>
            )}

            {images.length > 0 && (
              <>
                <ImageGallery images={images} />
                <Box py="20px" display="flex" justifyContent="center">
                  {status !== Status.LOADED && (
                    <Button onClick={this.loadMore}>Load more</Button>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </>
    );
  }
}
