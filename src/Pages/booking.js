import React, {useState} from "react"; 




function Booking() {

const [field, setField] = useState("");

const reducer =(state, setTime) =>{
  if (setTime.type ==='res-date') return {availableTimes: state.availableTimes + 1};
  if (setTime.type ==='res-date') return {availableTimes: state.availableTimes + 1};
  if (setTime.type ==='res-date') return {availableTimes: state.availableTimes + 1};
  return state
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  const handleChange = (event) => {
    setField(event.target.value);
  };


  const [availableTimes, setAvailableTimes] = useState([
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]);

  const initializeTimes = () => {
    const [initializeTimes, setInitializeTimes] = useState([
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ]);
    
    return initializeTimes;
  };

  const updateTimes = () => {
    const [updateTimes, setUpdateTimes] = useState([
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ]);
    
    return updateTimes;
  };


  return (
    <div className='App'> 
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
       <label for="res-date">Choose date</label>
        <input type="date" id="res-date"></input><br></br>
        <label for="res-time">Choose time</label>
        <select value={field} onChange={handleChange} className="field">
        <option value="">Select a time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select><br></br>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"></input><br></br>
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   </div>
   <input type="submit" value="Make Your reservation"></input>
      </form>
    </div>
    

  );
}

export default Booking;


function initializeTimes(props) {
  const times = [
    { id: 1, label: '9:00 AM', available: true },
    { id: 2, label: '10:00 AM', available: true },
    { id: 3, label: '11:00 AM', available: true },
    { id: 4, label: '12:00 PM', available: true},
    { id: 5, label: '1:00 PM', available: true},
    { id: 6, label: '2:00 PM', available: true},
    { id: 7, label: '3:00 PM', available: true},
    { id: 8, label: '4:00 PM', available: true},
    { id: 9, label: '5:00 PM', available: true},
  ];
  
  return times;
}

