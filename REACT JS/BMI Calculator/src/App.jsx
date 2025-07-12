import { useState } from 'react';
import './App.css';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!weight || !height || weight <= 0 || height <= 0) {
      alert('Please enter valid numbers for weight and height.');
      return;
    }

    const result = ((weight / (height * height)) * 703).toFixed(1);
    setBmi(result);

    if (result < 18.5) setStatus('Underweight');
    else if (result < 25) setStatus('Normal');
    else if (result < 30) setStatus('Overweight');
    else setStatus('Obese');
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="bmi-container">
      <h1 className="title">BMI Calculator</h1>

      <form className="bmi-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            id="weight"
            type="number"
            placeholder="e.g. 150"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="height">Height (inches)</label>
          <input
            id="height"
            type="number"
            placeholder="e.g. 65"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn primary">Calculate</button>
          <button type="button" className="btn secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {bmi && (
        <div className={`bmi-result ${status.toLowerCase()}`}>
          <h2>Your BMI: {bmi}</h2>
          <p>Status: <strong>{status}</strong></p>
        </div>
      )}
    </div>
  );
}
