import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholderforsearchbox, changeEvent}) => (
    <input className='search' type='search' placeholder={placeholderforsearchbox} onChange={changeEvent} />
);