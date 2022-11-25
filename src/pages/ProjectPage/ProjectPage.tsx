import React from 'react';
import { useParams } from 'react-router-dom';

export const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <>
      <div className="page-title">
        <h1>Projects name</h1>
        <button>New task</button>
      </div>
      <div className="desk-container">
        <div className="desk-item">
          <h2>Queue</h2>
          
        </div>
        <div className="desk-item">
          <h2>Development</h2>
          
        </div>
        <div className="desk-item">
          <h2>Done</h2>
          
        </div>
      </div>
    </>
  );
};
