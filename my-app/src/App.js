import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';

export const App = () => (
  <div className="App">
    <Header />
    <div className="Content">
      <Sidebar />
    </div>
  </div>
);