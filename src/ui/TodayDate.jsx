const TodayDate = () => {
  const today = new Date();

  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today);

  const dayNumber = today.getDate();

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today);
  
  const year = today.getFullYear();

  const formattedDate = `${dayName}, ${dayNumber} ${monthName} ${year}`;

  return <h4 className="text-lighter">{formattedDate}</h4>;
};

export default TodayDate;
