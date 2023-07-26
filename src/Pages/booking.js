import React, {useState} from "react"; 


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
function updateTimes(date) {
  // Clear the existing times
  const timesContainer = document.getElementById("res-date");
  timesContainer.innerHTML = "";

  // Fetch data from the API based on the selected date
  function fetchData(date){
    fetch(date)
    .then((date) => {
      // Process the fetched data and populate the times container
      const times = date.times; // Assuming the API response has a times property

      times.forEach((time) => {
        const timeElement = document.createElement("div");
        timeElement.textContent = time;
        timesContainer.appendChild(timeElement);
      });
    })
    .catch((error) => {
      // Handle the error
      console.error("Failed to fetch data:", error);
    });
}

// Example usage:
const selectedDate = "2022-01-01";
updateTimes(selectedDate);


function fetchAPI(date){
  const response = {
      date: '2022-10-01',
      availableTimes: [
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
          "5:00 PM",
      ],
    };
  
    // Check if the provided date matches the response date
    if (date === response.date) {
      // Return the array of available reservation times
      return response.availableTimes;
    } else {
      // If the provided date does not match the response date, return an empty array
      return [];
    }
}

const FetchAPI = () => {
  const [data, setData] = useState(null);

  // Your API fetching logic here

  return (
    <div>
      {/* JSX code */}
    </div>
  );
};



function submitAPI(formData){
  const response = {
      success: true,
    };
  
    // Check if the data was successfully submitted
    if (response.success) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  const formData = {
    //
  }

  
}


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

  const InitializeTimes = () => {
    const [InitializeTimes, setInitializeTimes] = useState([
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
    
    return InitializeTimes;
  };

  const Times = () => {
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


  return (
    <div className='Booking'> 
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

function ConfirmedBooking(props) {
  return (
    <div>
      <h1>Booking Confirmation</h1>
      <h2>{props.message}</h2>
      <p>Your booking has been confirmed.</p>
      <ConfirmedBooking message="Booking confirmed!" />
    </div>
  );
}
function submitForm(formData) {
  fetch("submitAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if(data === true) {
      window.location.href = "booking-confirmed.html";
    } else {
      // handle the response data if it's not true
    }
  })
  .catch(error => {
    // handle the error
  });
}

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = React.useState({
    // initialize form data
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form inputs */}
      <button type="submit">Submit</button>
    </form>
  );
};