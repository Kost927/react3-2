import React, { Component } from "react";
import "./App.module.css";
// import axios from 'axios';
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import galleryApi from "../servises/galleryApi";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false
  };

  componentDidMount() {
    // this.setState({
    //   loading: true
    // });
    // this.fetchGallery("");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.page);
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchGallery();
    }
  }

  fetchGallery = () => {
    galleryApi
      .fetchGalleryWithQuery(this.state.searchQuery, this.state.page)
      .then(
        gallery => this.setState(prevState => ({ gallery: [...prevState.gallery, ...gallery], page: prevState.page + 1 })),
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        })
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchSormSubmit = query => {
    this.setState({ searchQuery: query });
    this.setState({gallery: []});
  };

  openModalFn = image => {
    this.setState({ modalSrc: image.largeImageURL });
    this.setState({ modalOpen: true });
  };

  onClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen, modalSrc } = this.state;
    return (
      <>
        {modalOpen && <Modal modalSrc={modalSrc} onClose={this.onClose} />}
        <Searchbar onSubmit={this.handleSearchSormSubmit} />
        <ImageGallery
          fetchGallery={this.fetchGallery}
          loading={this.state.loading}
          error={this.state.error}
          gallery={this.state.gallery}
        >
          <ImageGalleryItem gallery={this.state.gallery} showModal={this.openModalFn} modalOpen={modalOpen} />
        </ImageGallery>
      </>
    );
  }
}
export default App;
