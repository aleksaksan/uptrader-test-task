import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Homepage/HomePage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <>
      <header>
        <Link to="/">Project list</Link>
        <Link to="/project">Project</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
