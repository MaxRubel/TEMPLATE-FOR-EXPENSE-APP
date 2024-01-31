/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

const initialState = { amount: '', description: '', date: '' };

function Home() {
  const [formInput, setFormInput] = useState(initialState);
  // const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="expenseForm" onSubmit={handleSubmit}>
      <div
        style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="text-center my-4"
      >
        <h2 style={{ marginBottom: '8%' }}>Create Expense</h2>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          className="form-control"
          style={{ marginBottom: '3%' }}
          value={formInput.amount}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          className="form-control"
          style={{ marginBottom: '3%' }}
          onChange={handleChange}
        ></input>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          style={{ marginBottom: '6%' }}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          Submit{' '}
        </button>
      </div>
    </form>
  );
}

export default Home;
