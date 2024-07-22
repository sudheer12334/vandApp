import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

function App() {
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/first-page">First Page</Link>
            </li>
            <li>
              <Link to="/second-page">Second Page</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<FirstPage/>} exact/>
            {/* <FirstPage formData={formData} updateFormData={updateFormData} /> */}
          
          <Route path="/second-page" element={<SecondPage/>} exact/>
            {/* <SecondPage formData={formData} updateFormData={updateFormData} /> */}
          
          <Route path="/third-page" element={<ThirdPage/>} exact/>
            {/* <ThirdPage formData={formData} /> */}
          </Routes>
      </Router>
      //</div>
  );
}
export default App;