/* eslint-disable import/prefer-default-export */
export const getAllCountries = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };
  const result = await fetch('https://covid-193.p.rapidapi.com/statistics', options);
  return result.json();
};
