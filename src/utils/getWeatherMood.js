export function getWeatherMood(code) {
  let mood = "Unknown"

  if (code === 0) {
    mood = "sunny"
  } else if ([1, 2].includes(code)) {
    mood = "partly-cloudy"
  } else if (code === 3) {
    mood = "overcast"
  } else if ([45, 48].includes(code)) {
    mood = "fog"
  } else if ([51, 53, 55].includes(code)) {
    mood = "drizzle"
  } else if ([61, 63, 65, 66, 67,80, 81, 82 ].includes(code)) {
    mood = "rain"
  } else if ([71, 73, 75, 77, 85, 86].includes(code)) {
    mood = "snow"
  } else if ([95, 96, 99].includes(code)) {
    mood = "storm"
  }

  return mood;
}
