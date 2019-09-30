console.log('client side javascript')



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



messageOne.textContent = ''
weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const query = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ""
    fetch('/weather?address='+ query).then((response) => {
    response.json().then((data)=>{
        console.log(data)
        print1 = data.address + " is "+  data.summary 
        if (!data) {
        messageOne.textContent = print1
        messageTwo.textContent = data.temperature + " F and at " + data.latitude + "\n" + "The high temperature is " +  data.high + " and low temperature is " + data.low 
    }
    else {
        messageOne.textContent = "error"
        messageTwo.textContent = ""
    }
    })
})
})