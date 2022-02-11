const current = {
  pressure_in: 27,
  temp_c: 3.5,
  wind_dir: 'SE',
  precipitation: '0.02',
  humidity: 66,
  cloud: 72,
  last_updated: '2020-02-11 13:00',
};

const location = {
  country: 27,
  lat: 27.48,
  local_time: '2022-02-11 14:08',
  lon: 89.6,
  name: 'Thimphu',
};

const weatherData = () => Promise.resolve({
  data: {
    weather: [
      current,
      location,
    ],
  },
});

export default weatherData;
