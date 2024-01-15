import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import Random from './components/Random'; 

export const App = () => (
  <Router>
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <div className="content">
            <Sidebar />
            <Routes>
              <Route path="/RANDOM_CHALLENGE" element={<Random />} />
            </Routes>
          </div>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  </Router>
);
