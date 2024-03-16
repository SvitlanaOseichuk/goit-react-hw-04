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
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await requestPictures();
        console.log(data)
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataByQuery = async () => {
      if (search === null) return;

      try {
        setIsLoading(true);
        const data = await requestPicturesByQuery(search);
        setPictures(data);
      } catch (error) {
        console.error('Error fetching pictures by query:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataByQuery();
  }, [search]);

  const onSubmit = (query) => {
    setSearch(query);
    console.log(query)
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery pictures={pictures} />
    </>
  );
}

export default App;
