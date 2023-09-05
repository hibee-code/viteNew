import { useSelector } from 'react-redux'

const Balance = () => {
  const data = useSelector((state) => state.trackReducer.tracks);
  const income = data
      .filter((track) => parseInt(track.amount > 0))
      .reduce((arr, cur) => arr += parseInt(cur.amount), 0);
  return (
    <>
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <div className='your_bal'>
        <h4>Your Balance</h4>
        <h2>$260.00</h2>
      </div>
      <div className='statement'></div>
          <div className='income'>
            <h4>Income</h4>
            <h2>${income}</h2>
          </div>
          <div className='expenses'>
            <h4>Expenses</h4>
            <h2>$240</h2>
          </div>
      </div>
    </>
  )
}

export default Balance