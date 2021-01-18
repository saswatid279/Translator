var inputtext=document.querySelector("#input")
var translatebtn=document.querySelector("#btn-translate")
var outputtext=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/ferb-latin.json"

function getUrl(text)
{
    console.log(url+"?"+"text="+text)
    return url+"?"+"text="+text
}

function errorHandler()
{
    console.log("An error occured")
    alert("Server Error has occured try after sometime")
}

function clickHandler1()
{
    var text1=inputtext.value
    console.log(text1)
    // fetch(getUrl(text1)).then(res => res.json()).then(json => console.log(json))
    fetch(getUrl(text1)).then(response => response.json()).then(json =>{
        var translatedtext=json.contents.translated 
        console.log(translatedtext)
        outputtext.innerText=translatedtext }).catch(errorHandler)
}

translatebtn.addEventListener("click",clickHandler1)
