import React, { useState } from 'react';
import Shahebaaz from './Shahebaaz' 

function MenuTabs() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('shahebaaz');

  // Function to handle tab switching
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
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

      {/* Content based on the active tab */}
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        {activeTab === 'shahebaaz' && (
          <div>
            <Shahebaaz/>
          </div>
        )}
        {activeTab === 'shahezad' && (
          <div>
            <h2>Shahezad</h2>
            <p>This is the content for Shahezad tab.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuTabs;
