
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar() {

  let login = document.querySelector('#login')
  let loginLabel = document.querySelector('#loginLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    login: '',
    senha: ''
    
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(login.value == item.loginCad && senha.value == item.senhaCad){
       
      userValid = {
         //nome: item.nomeCad,
         login: item.loginCad,
         senha: item.senhaCad,
         //cpf: item.cpfCad
       }    
    }
  })
  
  if(login.value == userValid.login && senha.value == userValid.senha){

    window.location.href = 'dentro.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    
  } else {
    loginLabel.setAttribute('style', 'color: red')
    
    login.setAttribute('style', 'border-color: red')
    
    senhaLabel.setAttribute('style', 'color: red')
    
    senha.setAttribute('style', 'border-color: red')
   
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Login ou senha incorretos'
    login.focus()

  }
} 




