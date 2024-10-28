import React, { useState } from 'react';
import axios from 'axios';

function Calculator() {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://localhost:8080/calc/calculate', {
        option1: parseInt(option1),
        option2: parseInt(option2),
        option3: parseInt(option3),
      });
      setResult(response.data.weighted_average);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };
  
  

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <label>
          Option 1:
          <select value={option1} onChange={(e) => setOption1(e.target.value)}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Option 2:
          <select value={option2} onChange={(e) => setOption2(e.target.value)}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Option 3:
          <select value={option3} onChange={(e) => setOption3(e.target.value)}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Weighted Average: {result}</div>}
    </div>
  );
}

export default Calculator;
