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
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function App() {

  let pictrs;

  const [pictures, setPictures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false); 



  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await requestPictures();
        setPictures(data);
        setShowContent(true);
      } catch (error) {
        setHasMore(false)
        setShowContent(false)
        setIsError(true);
        console.error('Error fetching pictures:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);




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
        setHasMore(data.results.length > 0);
        setPage(1)
      } catch (error) {
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


 
  // Функція для відкриття модального вікна з обраним зображенням
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    pictrs.style.color = '#f00';
  }

  // Функція для закриття модального вікна
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
      {hasMore && searchQuery && <LoadMoreBar onClick={onLoadMore} />}
      <Modal
        onAfterOpen={afterOpenModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={customStyles}
      >
        {selectedImage && (
          <ImageModal image={selectedImage} onCloseModal={closeModal} />
        )}
      </Modal>
    </>
  );
}

export default App;