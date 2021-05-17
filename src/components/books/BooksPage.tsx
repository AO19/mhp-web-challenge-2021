import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAllBooks } from '../../helpers/fetchHooks';
import getIdfromUrl from '../../helpers/getIdfromUrl';
import { Book } from '../../types';

const BooksPage = () => {
  const [selectedBook, setSelectedBook] = useState<Book>();
  const { data } = useAllBooks();
  return (
    <div className='books'>
      <div className='books__scroller'>
        <ul className='books__scroller-list'>
          <h2>All books in #</h2>
          {data?.map((book) => (
            <li
              className={`books__scroller-item ${
                selectedBook?.url === book?.url ? 'active-book' : ''
              }`}
              onClick={() => setSelectedBook(book)}
              key={getIdfromUrl(book?.url)}
            >
              {getIdfromUrl(book?.url)}.&nbsp;{book?.name}
            </li>
          ))}
        </ul>
        <div className='quick-links'>
          <Link to='/'>Home</Link>
          <Link to='/houses'>Houses</Link>
          <Link to='/characters'>Characters</Link>
        </div>
      </div>
      <div className='books__details'>
        {selectedBook ? (
          <div className='books__details--selection'>
            <h1>{selectedBook?.name}</h1>
            <h2>
              Book&nbsp;{getIdfromUrl(selectedBook?.url)} (
              {selectedBook?.numberOfPages} pages) -{' '}
              {new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(
                new Date(selectedBook?.released)
              )}
            </h2>
            <h2>
              by&nbsp;
              {selectedBook?.authors.map((author) => (
                <span>&nbsp;{author},</span>
              ))}
            </h2>
            <h2>
              Published by {selectedBook?.publisher} in {selectedBook?.country}
            </h2>
            <h2>
              Order with {selectedBook?.isbn} as a {selectedBook?.mediaType}
            </h2>
          </div>
        ) : (
          <h2>Please select a book</h2>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
