import React, { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Calendar = () => {
const [date, setDate] = useState(new Date());
  const onDayClick = date => {
      setDate(date);
  };
//   const [days, setSelectedDays] = useState([]);
//     const selectedDays = (days, selected) => {
//         setSelectedDays(days);
//     };
//     if (selected) {
//       const selectedIndex = selectedDays.findIndex(selectedDay =>
//         DateUtils.isSameDay(selectedDay, days)
//       );
//       selectedDays.splice(selectedIndex, 1);
//     } else {
//       selectedDays.push(days);
//     }
    
    // handleDayClick(day, { selected }) {
    //     const { selectedDays } = this.state;
    //     if (selected) {
    //         const selectedIndex = selectedDays.findIndex(selectedDay =>
    //             DateUtils.isSameDay(selectedDay, day)
    //         );
    //         selectedDays.splice(selectedIndex, 1);
    //     } else {
    //         selectedDays.push(day);
    //     }
    //     this.setState({ selectedDays });
    // }

    
        return (
            <div>
                <DayPicker
                    onDayClick={onDayClick} value={date}
                />
                {console.log(date)}
                {date.toString()}
            </div>
        );
    
}

export default Calendar;