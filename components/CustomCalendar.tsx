import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  date: string;
  description: string;
  time?: string;
}

interface CustomCalendarProps {
  upcomingEvents: Event[];
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ upcomingEvents }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const daysCells: JSX.Element[] = [];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthName = months[currentMonth.getMonth()];
  const daysInCurrentMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  const filteredEvents = upcomingEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentMonth.getMonth() && 
           eventDate.getFullYear() === currentMonth.getFullYear();
  });

  for (let day = 1; day <= daysInCurrentMonth; day++) {
    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const hasEvent = filteredEvents.some(event => new Date(event.date).toDateString() === currentDate.toDateString());
  
    daysCells.push(
      <div 
        key={day} 
        className={`text-center p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
          hasEvent ? 'bg-blue-100 dark:bg-blue-900' : 'dark:bg-gray-800'
        }`}
      >
        <span className="dark:text-gray-300">{day}</span>
        {hasEvent && <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mx-auto mt-1"></div>}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex-1">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="text-gray-600 dark:text-gray-400 hover:text-[#4361ee] dark:hover:text-[#6d86f1]">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{monthName} {currentMonth.getFullYear()}</h2>
            <button onClick={handleNextMonth} className="text-gray-600 dark:text-gray-400 hover:text-[#4361ee] dark:hover:text-[#6d86f1]">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-semibold text-gray-600 dark:text-gray-400">{day}</div>
            ))}
            {daysCells}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Upcoming Events</h3>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <p className="font-semibold text-[#4361ee] dark:text-[#6d86f1]">{event.date}</p>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                {event.time && <p className="text-gray-500 dark:text-gray-400 text-sm">{event.time}</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No events this month</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;