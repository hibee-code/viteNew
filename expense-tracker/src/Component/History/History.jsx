 import { useSelector } from 'react-redux';

const listStyling = (amount) => {
  return {
    listSttyle: 'none',
    display: 'flex',
    backgroundColor: 'white',
    boxShadow: '0 0 5px 0 #808080',
    padding: '10px',
    justifyContent: 'space-between',
    border: '0',
    borderRightWidth: '5px',
    borderRightColor: amount < 0 ? 'red' : 'green',
    borderRightStyle: 'solid',
    marginBottom: '10px',
  }
}
const History = () => {
  const data = useSelector((state)  => state.trackReducer.tracks);
  return (
    <>
      <h3>History</h3>
      <hr />
      <ul>
        {
          data.map((track, index) => {
          return( <li key={index} style={listStyling(track.amount)}>
            <span>{track.text}</span>
            <span>{track.amount}</span>
        </li>
          )})
         
        }
          
      </ul>
    </>
  )
}

export default History