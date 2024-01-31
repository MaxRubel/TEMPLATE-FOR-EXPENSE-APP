import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { businessIcon, foodIcon, lodgingIcon, carIcon, flightIcon } from '../../public/icons';

const expenses = [
  {
    name: 'Dinner at Fancytown',
    amount: 23.5,
    description: 'It was good',
    date: '11-05-24',
    categories: ['business', 'dining'],
  },
  {
    name: 'Flight to Florida',
    amount: 400.5,
    description: 'It was long',
    date: '11-03-24',
    categories: ['business', 'flights'],
  },
  {
    name: 'Hilton Hotel',
    amount: 2500,
    description: 'It was nice',
    date: '11-03-24',
    categories: ['business', 'lodging'],
  },
  {
    name: 'Rental Car',
    amount: 250,
    description: 'Hertz Rental',
    date: '11-03-24',
    categories: ['business', 'rentalCar'],
  },
  {
    name: 'Lunch',
    amount: 40,
    description: 'hamburger spot',
    date: '11-04-24',
    categories: ['business', 'dining'],
  },
];

const trip = {
  name: 'Business Trip to Florida',
  description: 'Went to golf with the boss',
  date: '11-20-24',
};

export default function ViewTrip() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [expenseArr, setExpenseArr] = useState(expenses);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    setTotalAmount((prevValue) => totalAmount);
  }, [expenses]);

  return (
    <>
      <div class="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="card-header">
          <div>
            <h5>{trip.name}</h5>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: '15%',
            }}
          >
            <h6 style={{ marginBottom: '0%', fontSize: '20px' }}>
              Total: ${totalAmount.toLocaleString()}
            </h6>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{trip.date}</h5>
          <p className="card-text">{trip.description}</p>
          <a href="#" class="btn btn-secondary">
            Edit Trip
          </a>
        </div>
      </div>
      // ----------expense--cards------------
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {expenseArr.map((item) => (
          <div className="card border-dark mb-3" style={{ width: '18rem' }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'right' }}
              className="card-header"
            >
              <div> {item.name}</div>
              <div style={{ display: 'flex', gap: '5%', justifyContent: 'flex-end' }}>
                {item.categories.map((category) => (
                  <div style={{ textAlign: 'right' }}>
                    {category === 'business' && businessIcon}
                    {category === 'flights' && flightIcon}
                    {category === 'dining' && foodIcon}
                    {category === 'rentalCar' && carIcon}
                    {category === 'lodging' && lodgingIcon}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                <i>{item.date}</i>
              </p>
              <h5 className="card-title">${item.amount}</h5>
              <p className="card-text">{item.description}</p>
              <div style={{ display: 'flex', gap: '3%' }}>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
