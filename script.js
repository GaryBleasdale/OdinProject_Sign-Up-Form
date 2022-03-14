let password =document.body.querySelector('#password');
let confirmPassword = document.body.querySelector('#confirm-password')
let submitButton = document.body.querySelector("button")
let input = document.body.querySelectorAll('input')

submitButton.addEventListener('click', function(){
  let passValue = password.value; 
  let confPassValue= confirmPassword.value
  if (passValue != "" && confPassValue!=""){
    if (passValue === confPassValue){
      console.log('both equal')
      submitButton.disabled=false;
      input[5].setCustomValidity("")
    } else {

      input[5].value = ''
      input[5].placeholder ='Please make sure your passwords match'
      input[5].setCustomValidity("Invalid field.")
    }
  }
})

