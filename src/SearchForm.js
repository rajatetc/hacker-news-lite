import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch, toggleTheme } = useGlobalContext()
  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div>
        <h2>search hacker news</h2>
        <input
          type='text'
          className='form-input'
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <button className='btn' onClick={toggleTheme}>
          <i className='fas fa-adjust'></i>
        </button>
      </div>
    </form>
  )
}

export default SearchForm
