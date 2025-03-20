import React, { createContext, useState, useEffect, useContext } from 'react';
import newsData from './newsData.json';

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNews(newsData.newsItems);
    setCollections(newsData.collections);
    setLoading(false);
  }, []);

  const getFeaturedNews = () => news.filter(item => item.featured);

  const getNewsById = (id) => news.find(item => item.id === id);

  const getNewsByCategory = (category) => news.filter(item => item.category === category);


  const getCollectionById = (id) => collections.find(collection => collection.id === id);

  const getCollectionNews = (collectionId) => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return [];
    return collection.newsIds.map(id => getNewsById(id)).filter(Boolean);
  };

  const value = {
    news,
    collections,
    loading,
    getFeaturedNews,
    getNewsById,
    getNewsByCategory,
    getCollectionById,
    getCollectionNews
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default NewsContext;