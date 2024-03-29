import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessae';
import { requestPictures, requestPicturesByQuery } from '../services/api';
import LoadMoreBar from './LoadMoreBtn/LoadMoreBar';
import ImageModal from './ImageModal/ImageModal';


function App() {


  const [pictures, setPictures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 



  useEffect(() => {
    
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        const data = await requestPicturesByQuery(searchQuery, page);
        setPictures(prevPictures => {
          if (!Array.isArray(prevPictures)) {
            return [...data.results];
          }
          return [...prevPictures, ...data.results];
        });
        setShowContent(true);
        setShowBtn(data.total_pages && data.total_pages !== page)
      } catch (error) {
        setShowContent(false)
        console.error('Error fetching pictures by query:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataByQuery();
  }, [searchQuery, page]);



  const onSetsearchquery = (query) => {
    setSearchQuery(query.trim() === '' ? null : query);
    setShowContent(query.trim() !== ''); 
    setPictures(null);
    setPage(1);
  };



  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }


 
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSetsearchquery={onSetsearchquery} hasResults={pictures !== null} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {showContent && searchQuery && <ImageGallery pictures={pictures} onImageClick={openModal} />}
      {showBtn && searchQuery && <LoadMoreBar onClick={onLoadMore} />}
      {selectedImage && (
        <ImageModal 
          isOpen={modalIsOpen} 
          onCloseModal={closeModal} 
          image={selectedImage} 
        />
      )} 
      </>
  );
}

export default App;
