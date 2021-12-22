export const getAllCountries = async (continent) => {
  const result = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?continent=${continent}`);

  return result.json();
};

export const getCountryDetails = async (name) => {
  const result = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${name}`);

  return result.json();
};
