import React, { useState } from 'react';
import './App.css';
import data from '../data/data.json';

function App() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (endIndex < data.length) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("No more people!");
    }
  };

  return (
    <div className='outer'>
      <div className='header-section'>
        <h1>PEOPLE DATA</h1>
        <button className='next-button' onClick={goToNextPage} >
          <span>NEXT PERSON</span>
        </button>
      </div>
      {data.length === 0 ? (
        <div className="no-data-message">No data available.</div>
      ) : (
        <div>
          {currentData.map((item, index) => (
            <div key={index} className="card-container">
              <div className="card-number">{startIndex + index + 1}</div>
              <div className="card-name">Name: {item.name}</div>
              <div className="card-location">Location: {item.location}</div>
            </div>
          ))}
        </div>
      )}

      <div className='footer-section'>
        <span><strong>CURRENTLY {currentData.length} PEOPLE SHOWING</strong></span>
      </div>
    </div>
  );
}

export default App;
