import Add_transaction from "./Component/Add_transaction/Add_transaction"
import Balance from "./Component/Balance/Balance"
import History from "./Component/History/History"
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Balance />
      <History />
      <Add_transaction />
    </div>
  )
}

export default App
