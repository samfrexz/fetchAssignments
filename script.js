
let baseUrl = 'https://www.scorebat.com/video-api/v1/'

const myForm = document.querySelector('form');
const myParagraph = document.querySelector('.card-text');

const getFootballApi = async () => {
  const response = await fetch(`${baseUrl}`)
  const data = await response.json()
  return data
  
}

myForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const scoreBat = await getFootballApi()
  //const first = boredApi[0]
  console.log(scoreBat[0].title)
  console.log(scoreBat[0].competition.name)
  console.log(scoreBat[0].videos[0].embed)

  // iterating with the for loop method
  
  for(let index = 0; (index < scoreBat.length-50); index++) {
    myParagraph.innerHTML += `
    <h2>${scoreBat[index].title}</h2>
    <h4>${scoreBat[index].competition.name}</h4>
    <p>${scoreBat[index].videos[0].embed}</p>
    `
  }
  // using the Array forEach method to loop through

  // scoreBat.forEach(score => {
  //   myParagraph.innerHTML += `
  //   <h2>${score.title}</h2>
  //   <h4>${score.competition.name}</h4>
  //   <p>${score.videos[0].embed}</p>
  //   `
  // })

})

