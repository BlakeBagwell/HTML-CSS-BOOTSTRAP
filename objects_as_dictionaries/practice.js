var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

console.log(phonebookDict.Elizabeth);

phonebookDict.Kareem = '938-489-1234';

console.log(phonebookDict.Kareem);

delete phonebookDict.Alice;

console.log(phonebookDict.Alice);

phonebookDict.Bob = '968-345-2345';

console.log(phonebookDict.Bob);

var personName = 'Elizabeth';

// vv subscript notation can be used dynamically with a variable
//and dot notation cannot, so we use subscript here.
console.log(phonebookDict[personName]);
// vv this loops allows us look at each key in the dictionary, each key (in this case) being associated with the variable 'people', and then we use phonebookDict[personName] to print the value (in this case the associted phone number) of the respective key
for (var people in phonebookDict) {
  console.log(people + phonebookDict[personName]);
}
