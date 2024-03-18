import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessae';
import { requestPictures, requestPicturesByQuery } from '../services/api';

function App() {
  const [pictures, setPictures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await requestPictures();
        setPictures(data)
        console.log(data)
      } catch (error) {
        setIsError(true);
        console.log(error)
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
        const data = await requestPicturesByQuery(searchQuery);
        setPictures(data);
      } catch (error) {
        console.error('Error fetching pictures by query:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataByQuery();
  }, [searchQuery]);

  const onSetsearchquery = (query) => {
    setSearchQuery(query);
    console.log(query)
  };

  return (
    <>
      <SearchBar onSetsearchquery={onSetsearchquery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery pictures={pictures} />
    </>
  );
}

export default App;
