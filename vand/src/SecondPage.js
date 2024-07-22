import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './SecondPage.css';
 
  const SecondPage = () => {
    const [formData, setFormData] = useState({
      Age: '',
      Income:'',
      'Cibil Score': '',
      'Business Continuity':'' ,
      'Minimum Sales Turnover': '',
      'Minimum Sales':''
 
    });
   
    const [formErrors, setFormErrors] = useState({
      Age: '',
      Income:'',
      'Cibil Score': '',
      'Business Continuity':'' ,
      'Minimum Sales Turnover': '',
      'Minimum Sales':'',
    });
    const navigate = useNavigate();
   
    const validateForm = () => {
      let isValid = true;
      const newFormErrors = { ...formErrors };
   
      for (const key in formData) {
        if (formData[key].trim() === '') {
          newFormErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
          isValid = false;
        } else {
          newFormErrors[key] = '';
        }
      }
      setFormErrors(newFormErrors);
      return isValid;
    };
   
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
   
    const handleSubmit = (e) => {
      e.preventDefault();
   
      if (validateForm()) {
       
        console.log('Form Data:', formData);
        const age=parseInt(formData.Age , 10);
        if(age < 18){
          alert('Loan is rejected');
        }
        else{
         navigate('/third-page');
        }
      } else {
        console.log('Please fill the form.');
      }
    };
   
  return (
    <div class="secondimage">
      <div className='bbb'>
      <div id='para2'>
        <h2>WELCOME TO CITY BANK</h2><p>Get the peace of mind by knowing all the details about your loan 
        using CITY Bank Loan Eligibility Calculator</p></div>
      <form class="box">
        <h1>CHECK YOUR ELIGIBILITY</h1>
        <div className='content'>
        <div class="sss">
        <label className='age' >
          Age
        </label>
        <input  type="number" name="Age" onChange={handleChange} value={formData.Age} />
        <div className="error">{formErrors.Age}</div>
        </div>
        <div class='sss'>
        <label className='income'>
          Income
        </label>
        <input  type="number" name="Income" onChange={handleChange} value={formData.Income}/>
        <div className="error">{formErrors.Income}</div>
 
        </div>
        <div class="sss">
        <label className='cibil'>
          Cibil Score
        </label>
        <input  type="number" name="Cibil Score" onChange={handleChange} value={formData["Cibil Score"]} />
        <div className="error">{formErrors["Cibil Score"]}</div>
 
        </div>
        <div class="sss">
        <label className='buss'>
          Business Continuity
        </label>
        <input  type="number" name="Business Continuity" onChange={handleChange} value={formData["Business Continuity"]} />
        <div className="error">{formErrors["Business Continuity"]}</div>
 
        </div>
        <div class="sss">
        <label className='salesturn'>
          Minimum Sales Turnover
        </label>
        <input type="number" name="Minimum Sales Turnover" onChange={handleChange} value={formData["Minimum Sales Turnover" ]} />
        <div className="error">{formErrors["Minimum Sales Turnover"]}</div>
 
        </div>
        <div class="sss">
        <label className='minsales'>
          Minimum Sales
        </label>
        <input  type="number" name="Minimum Sales" onChange={handleChange} value={formData["Minimum Sales"]} />
        <div className="error">{formErrors["Minimum Sales"]}</div>
        </div >
        </div>
        <div id='button'>
            <button class='slide' onClick={handleSubmit}>
                ENTER
            </button>
        </div>
      </form>
      </div>
 
    </div>
  );
};
 
export default SecondPage;