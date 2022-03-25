const result = document.getElementById('result')
const submit = document.getElementById('submit')

function binary(e){
  e.preventDefault()
  const input = document.getElementById('number').value
  
  if (input === ''){
    alert('Please enter a decimal number')
  } else if( input < 0){
    alert('Please enter a positive number')
  } else {
    result.style.visibility = 'visible'
  }

  binaryNumber = Number(input).toString(2)
  result.innerText = binaryNumber
}
submit.addEventListener('click', binary)