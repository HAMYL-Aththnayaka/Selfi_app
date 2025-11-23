import { useContext } from 'react';

import { BookContext } from '../context/BooksContext'; 

export function useBooks() {
  

  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error('useBooks must be used within a BookProvider');
  }

  return context;
}