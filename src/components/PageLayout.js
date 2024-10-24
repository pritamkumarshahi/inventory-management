import React from 'react';

import "../styles/PageLayout.css";

const PageLayout = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-tile">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error: Somthing went wrong</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return <div className="content">{children}</div>;
};

export default PageLayout;
