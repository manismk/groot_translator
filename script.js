const translateButton=document.querySelector('.btn-transalte')
const enteredText=document.querySelector('#enteredText')
const outputText=document.querySelector('#outputText')
var  url="https://api.funtranslations.com/translate/groot.json"

translateButton.addEventListener('click',translate);

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time")
}

function translate(){
  if(enteredText.value===''){
    alert('Enter the text and click translate')
  }
  else{
    url=url+"?text="+enteredText.value;
    const encodedUrl = encodeURI(url);
    fetch(url).then(response =>response.json())
    .then(json=>{
      const jsonOutput=json.contents.translated;
      outputText.innerText=jsonOutput;
    })
    .catch(errorHandler);
  }
}