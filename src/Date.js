import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function MyDateInput() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <label>Select a date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Click to select a date"
      />
    </div>
  );
}

