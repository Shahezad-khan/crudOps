import React, { useState } from 'react';
import Shahebaaz from './Shahebaaz';
import Shahezaad from './Shahezaad';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toasty from './Toast'; // Import the Toast container

function MenuTabs() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('shahebaaz');

  // Function to handle tab switching with toast notification
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Show the correct toast based on the clicked tab
    if (tabName === 'shahebaaz') {
      toast.success('Welcome Shahebaaz!');
    } else if (tabName === 'shahezad') {
      toast.success('Welcome Shahezad!');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Menu Tabs */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => handleTabClick('shahebaaz')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'shahebaaz' ? '#007BFF' : '#f0f0f0',
            color: activeTab === 'shahebaaz' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Shahebaaz
        </button>
        <button
          onClick={() => handleTabClick('shahezad')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'shahezad' ? '#007BFF' : '#f0f0f0',
            color: activeTab === 'shahezad' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Shahezad
        </button>
      </div>

      {/* Toast Container */}
      <Toasty />

      {/* Content based on the active tab */}
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        {activeTab === 'shahebaaz' && (
          <div>
            <Shahebaaz />
          </div>
        )}
        {activeTab === 'shahezad' && (
          <div>
            <Shahezaad />
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuTabs;
