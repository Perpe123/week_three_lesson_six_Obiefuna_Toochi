const identity = {
  name: 'Toochi Obiefuna'
}
const interests = {
  hobby: 'dancing'
}
const occupation = {
  job: 'developer'
}
const mergedObj = Object.assign({}, identity, interests, occupation)
console.log(mergedObj)
