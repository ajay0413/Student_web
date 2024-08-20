import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bodycomp from './Component/Bodycomp';
import StudentForm from './Component/StudentForm'; // Import your StudentForm component
import DisplayData from './Component/DisplayData'; // Import your DisplayData component

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Define a route for Bodycomp or any other default route */}
        <Route path="/" element={<Bodycomp />} />
        {/* Define a route for the StudentForm */}
        <Route path="/form" element={<StudentForm />} />
        {/* Define a route for the DisplayData */}
        <Route path="/display" element={<DisplayData />} />
      </Routes>
    </Router>
  );
}