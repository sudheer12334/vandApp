import React from 'react';
import approvedGif from './approved.gif';
import rejectedGif from './rejected.gif';

import './ThirdPage.css';

const ThirdPage = ({ formData }) => {
  const totalScore = calculateTotalScore(formData);

  const getResult = () => {
    if (totalScore > 75) {
      return {
        message: 'Congratulations! We Are Pleased To Inform You That Your Loan Application Has Been Approved.',
        gif: approvedGif,
      };
    } else {
      return {
        message: 'We Regret To Inform You That Your Loan Application Has Been Declined',
        gif: rejectedGif,
      };
    }
  };

  const result = getResult();

  return (
    <div className="thirdbox">
      <img className='zing'src={result.gif} alt="Result Gif" />
      <pre className='zing'>{result.message}</pre>
      
    </div>
  );
};

const calculateTotalScore = (formData) => {
  // Implement logic to calculate the total score based on the provided criteria
  let totalScore = 0;
  // Add score based on validation criteria
  return totalScore;
};

export default ThirdPage;
