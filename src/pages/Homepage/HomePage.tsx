import React, { useState, useEffect } from 'react';
import { Project, ProjectListMock } from './ProjectListMock';

export const HomePage = () => {
  const [projectList, setProjectList] = useState<Project[]>(ProjectListMock);

  useEffect(() => {
    console.log(projectList);
  }, [])
  

  return (
    <>
      <div className="page-title">
        <h1>Projects</h1>
        <button>Create project</button>
      </div>
      <div className="proj-container">
        {projectList.map((proj)=>(
          <div className="proj-item" key={proj.id}>{proj.name}</div>
        ))}
      </div>
    </>
  );
};
