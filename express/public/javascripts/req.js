// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
// const xhr = new XMLHttpRequest()
function clickme(){
    let btnVal = document.getElementById('span')

    const xhr = new XMLHttpRequest()
    xhr.open('GET','http://localhost:8000/webpack/src/data.json')
    xhr.onreadystatechange = ()=>{
        if(xhr.status === 200 && xhr.readyState ===4){
            console.log(xhr.response)
            btnVal.innerHTML =xhr.response
        }
    }
    xhr.send()
}