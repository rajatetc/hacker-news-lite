import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
function App() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <button className='btn'>
          <a
            href='https://github.com/rajatetc/hacker-news-lite'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
        </button>
      </div>
    </>
  )
}

export default App
