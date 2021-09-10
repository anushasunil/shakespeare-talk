var inputText = document.querySelector("#inputBox")
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#outputBox")


function errorHandling(error)
{
    console.log("error occurred", error)
    alert("server error")
}

function fetchInput(inputValue)
{
    url = "https://api.funtranslations.com/translate/shakespeare.json?text=" + inputText.value
    fetch(url)
    .then(response => response.json())
    .then(function outputTranslated(json){outputText.innerText = json.contents.translated})
    .catch(errorHandling)
}


btnTranslate.addEventListener("click", function click () {
    console.log(inputText.value)
    fetchInput(inputText)
})
