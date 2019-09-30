console.log('client side javascript')



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



messageOne.textContent = ''
weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ""
    fetch('/weather?address='+ location).then((response) => {
    response.json().then((data)=>{
        console.log(data)
        print1 = data.address + " is like "+  data.summary 
        messageOne.textContent = print1
        messageTwo.textContent = data.temperature + " F and at" + data.latitude

    })
})
})