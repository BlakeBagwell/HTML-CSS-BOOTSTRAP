function tipCalc(bill, service) {
  if (service == 'good') {
    console.log(bill + bill * 0.2);
  }
  else if (service == 'fair') {
    console.log(bill + bill * 0.15);
  }
  else if (service == 'bad') {
    console.log(bill + bill * 0.1);
  }
}

tipCalc(360, 'good');
