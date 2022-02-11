const cities = () => Promise.resolve({
  data: [
    {
      name: 'Afganistan',
      capital: 'Kabul',
      iso3: 'AFG',
    },
    {
      name: 'Brazil',
      capital: 'Brasilia',
      iso3: 'BRA',
    },
  ],
});

export default cities;
