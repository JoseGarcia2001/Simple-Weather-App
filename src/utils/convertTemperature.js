const kelvinToCelsius = (tempInKelvin) => {
  const kelvin = 273.15;
  const tempInCelsius = Math.floor(tempInKelvin - kelvin);

  return tempInCelsius;
};

export default kelvinToCelsius;
