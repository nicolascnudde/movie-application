import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import form from '../form/Form.module.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  let history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuery('');

    history.push('/search/' + query)
  }
  
  const handleChange = (ev) => setQuery(ev.target.value);

  return (
    <div className={form.formContainer}>
      <form className={`${form.form} ${form.formInit} ${form.formAlt}`} onSubmit={handleSubmit}>
        <input type="search" name="search" value={query} onChange={handleChange} placeholder="Search for a movie, tv show or person..." />
      </form>
    </div>
  )
}

export default SearchBar;