import React, { useState, useEffect } from 'react';

function ImageGallery() {
  // State to store fetched data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State to track the current page and items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of images to show per page

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result); // Store all fetched data
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Pagination logic: Get the current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page when the user clicks on pagination buttons
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / itemsPerPage)));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Conditional rendering based on loading and error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Image Gallery */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {currentItems.map((item) => (
          <div key={item.id} style={{ margin: '10px' }}>
            <img
              src={item.url}
              alt={item.title}
              style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={prevPage} disabled={currentPage === 1} style={buttonStyle}>
          Previous
        </button>
        <span style={{ margin: '0 20px', fontWeight: 'bold' }}>Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} style={buttonStyle}>
          Next
        </button>
      </div>
    </div>
  );
}

// Button style for pagination
const buttonStyle = {
  padding: '10px 20px',
  margin: '0 5px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

// Disable the button when needed
const disabledButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#ccc',
  cursor: 'not-allowed',
};

export default ImageGallery;
