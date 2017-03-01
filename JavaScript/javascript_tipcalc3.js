function tipCalc(bill, service, numPeople) {
  if (service == 'good') {
    console.log((bill + bill * 0.2) / numPeople);
  }
  else if (service == 'fair') {
    console.log((bill + bill * 0.15) / numPeople);
  }
  else if (service == 'bad') {
    console.log((bill + bill * 0.1) / numPeople);
  }
}

tipCalc(360, 'good', 3);
