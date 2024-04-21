import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

export default function SearchBar({onSubmit}){
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className='input'
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}

