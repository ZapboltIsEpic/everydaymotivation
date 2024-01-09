import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <div className="Content">
          <Sidebar />
        </div>
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);