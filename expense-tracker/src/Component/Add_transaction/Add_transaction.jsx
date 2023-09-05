import { useState} from "react";
import { add } from "../../features/reducer";
import { useDispatch } from 'react-redux';



const Add_transaction = () => {
  const [formData, setFormData] = useState({
    text: '',
    amount: '',
  })
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const {text,amount} = formData

    if(text === ''  || amount === ''){
        alert('cool');
        return;
    }

    dispatch(add({text, amount}));
  }

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <div className="add">
      <h3>Add transaction</h3>
      <hr />
      <form className="form" onSubmit={handleSubmit} >
        <div className="text">
          <label htmlFor="text">Text</label><br />
          <input onChange={onChange} value={formData.text} name="text" placeholder="Enter text........." />
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <p>(negative - expense) - (positive - income)</p>
          <input onChange={onChange} name='amount' value={formData.amount} type="text" placeholder='Enter amount........' />
        </div>
        <div className="add">
          <button className='btn'type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  )
}

export default Add_transaction