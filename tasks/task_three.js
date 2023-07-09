const details = {
  name: 'Toochi',
  age: 23,
  location: 'texas',
  relationship: 'single'
}
for (const key in details) {
  // if(details.hasOwnProperty(key))
  console.log(`key: ${key} = value: ${details[key]}`)
}
