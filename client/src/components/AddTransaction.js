import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add Calories</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"> Enter food type (for calorie consumed) or <br></br> Enter workout name (for calorie burned) </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter food type / Workout name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - burned, positive - consumed)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Calories</button>
      </form>
    </>
  )
}
