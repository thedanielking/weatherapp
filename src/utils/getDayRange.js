export function getDayRange(hourly, day) {
  const { time, temperature_2m, weather_code } = hourly;

  return time
    .map((t, i) => {
        const dateObject = new Date(t)
        const dayName = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
    //   const date = t.split("T")[0]; // e.g. "2025-09-23"
      const hour = new Date(t).getHours();
      

      if (dayName === day && hour >= 15 && hour <= 22) {
        return {
          hour: hour > 12 ? hour - 12 : hour,
          temp: temperature_2m[i].toFixed(0),
          code: weather_code[i],
        };
      }
      return null;
    })
    .filter(Boolean);
}
