import React, { Component } from "react";
import "./App.module.css";
// import axios from 'axios';
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import galleryApi from "../servises/galleryApi"

class App extends Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
  };



  componentDidMount() {
    this.setState({
      loading: true
    });
    this.fetchGallery('dog')
    
  }

  fetchGallery = query =>{

    galleryApi
    .fetchGalleryWithQuery(query)
    .then(gallery =>this.setState({gallery}))
    .catch(error => this.setState({error}))
    .finally(() => this.setState({loading: false}))
  }

  render() {

    return (
      <>
        <Searchbar onSubmit={this.fetchGalleryApi}/>
        <ImageGallery 
        loading={this.state.loading}
        error={this.state.error}
        gallery={this.state.gallery}>
          <ImageGalleryItem gallery={this.state.gallery}/>
        </ImageGallery>
      </>
    );
  }
}
export default App;
