import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          style={{ marginBottom: '2rem' }}
        />
      </form>
    </section>
  );
};

export default Search;
