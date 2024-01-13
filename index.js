
function greeting(name) {

  const date = new Date()
  const hours = date.getHours()
  console.log(hours)

  let greet 
  if (hours >= 0 && hours < 12) {
    greet = 'morning'
  }
  else if (hours >= 12 && hours < 17) {
    greet = 'afternoon'
  }
  else if (hours >= 17 && hours < 20) {
    greet = 'evening'
  }
  else {
    greet = 'night'
  }

  document.querySelector('h1').innerText = `Good ${greet}, ${name}!`
}

greeting('Github')