
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let nomeMaterno = document.querySelector('#nomeMaterno')
let labelNomeMaterno = document.querySelector('#labelNomeMaterno')
let validNomeMaterno = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let login = document.querySelector('#login')
let labelLogin = document.querySelector('#labelLogin')
let validLogin = false


let nascimento = document.querySelector('#nascimento')
let labelNascimento = document.querySelector('#labelNascimento')
let validNascimento = false
/*
let sexo = document.querySelector('#labelSexo')
let labelSexo = document.querySelector('#labelsexo')
let validSexo = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false


let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro= false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade= false

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false*/

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let celular = document.querySelector('#celular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', () => {
  //se for menor q 2 fica vermelho
  if(nome.value.length <= 14){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 15 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

//nome materno

nomeMaterno.addEventListener('keyup', () => {
  if(nomeMaterno.value.length == " "){
    labelNomeMaterno.setAttribute('style', 'color: red')
    labelNomeMaterno.innerHTML = 'Nome *preencha esse campo!'
    nome.setAttribute('style', 'border-color: red')
    validNomeMaterno = false
  } else {
    labelNomeMaterno.setAttribute('style', 'color: green')
    labelNomeMaterno.innerHTML = 'NomeMaterno'
    nomeMaterno.setAttribute('style', 'border-color: green')
    validNomeMaterno = true
  }
})

//validação da senha e confirma senha.
senha.addEventListener('keyup', () => {
  if(senha.value.length != 8){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira exatamente 8 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
    
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

//validar cpf
cpf.addEventListener('keyup', () => {
  //se for menor q 2 fica vermelho
  if(cpf.value.length != 14){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'Cpf *Insira apenas 11 caracteres'
    cpf.setAttribute('style', 'border-color: red')
    validCpf = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'cpf'
    cpf.setAttribute('style', 'border-color: green')
    validCpf = true
  }
})

//validar login
login.addEventListener('keyup', () => {
  //se for menor q 2 fica vermelho
  if(login.value.length != 6){
    labelLogin.setAttribute('style', 'color: red')
    labelLogin.innerHTML = 'Login *Insira exatamente 6 caracteres'
    cpf.setAttribute('style', 'border-color: red')
    validLogin = false
  } else {
    labelLogin.setAttribute('style', 'color: green')
    labelLogin.innerHTML = 'Login'
    login.setAttribute('style', 'border-color: green')
    validLogin = true
  }
})


// validar nascimento
nascimento.addEventListener('keyup', () => {
  if(nascimento.value.length == " "){
    labelNascimento.setAttribute('style', 'color: red')
    labelNascimento.innerHTML = 'nascimento *preencha esse campo!'
    nascimento.setAttribute('style', 'border-color: red')
    validNascimento = false
  } else {
    labelNascimento.setAttribute('style', 'color: green')
    labelNascimento.innerHTML = 'Nascimento'
    nascimento.setAttribute('style', 'border-color: green')
    validNascimento = true
  }
})
/*
//ver se campo sexo foi preenchido
sexo.addEventListener('keyup', () => {
  if(sexo.value.length == " "){
    labelSexo.setAttribute('style', 'color: red')
    labelSexo.innerHTML = 'Sexo *preencha esse campo!'
    sexo.setAttribute('style', 'border-color: red')
    validSexo = false
  } else {
    labelSexo.setAttribute('style', 'color: green')
    labelSexo.innerHTML = 'Sexo'
    sexo.setAttribute('style', 'border-color: green')
    validSexo = true
  }
})

//ver se campo cep foi preenchido

cep.addEventListener('keyup', () => {
  if(cep.value.length < "8"){
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = 'cep *preencha esse campo!'
    cep.setAttribute('style', 'border-color: red')
    validCep = false
  } else {
    labelCep.setAttribute('style', 'color: green')
    labelCep.innerHTML = 'cep'
    cep.setAttribute('style', 'border-color: green')
    validCep = true
  }
})

//endereco
endereco.addEventListener('keyup', () => {
  if(endereco.value.length == " "){
    labelEndereco.setAttribute('style', 'color: red')
    labelEndereco.innerHTML = 'endereco *preencha o campo!'
    cep.setAttribute('style', 'border-color: red')
    validEndereco = false
  } else {
    labelEndereco.setAttribute('style', 'color: green')
    labelEndereco.innerHTML = 'endereco'
    labelEndereco.setAttribute('style', 'border-color: green')
    validEndereco = true
  }
})

//bairro
bairro.addEventListener('keyup', () => {
  if(bairro.value.length == " "){
    labelBairro.setAttribute('style', 'color: red')
    labelBairro.innerHTML = 'bairro *preencha o campo!'
    bairro.setAttribute('style', 'border-color: red')
    validBairro = false
  } else {
    labelBairro.setAttribute('style', 'color: green')
    labelBairro.innerHTML = 'bairro'
    labelBairro.setAttribute('style', 'border-color: green')
    validBairro = true
  }
})

//cidade
cidade.addEventListener('keyup', () => {
  if(cidade.value.length == " "){
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'cidade *preencha o campo!'
    cidade.setAttribute('style', 'border-color: red')
    validCidade = false
  } else {
    labelCidade.setAttribute('style', 'color: green')
    labelCidade.innerHTML = 'cidade'
    labelCidade.setAttribute('style', 'border-color: green')
    validCidade = true
  }
})

//estado
estado.addEventListener('keyup', () => {
  if(estado.value.length == " "){
    labelEstado.setAttribute('style', 'color: red')
    labelEstado.innerHTML = 'estado *preencha o campo!'
    estado.setAttribute('style', 'border-color: red')
    validEstado = false
  } else {
    labelEstado.setAttribute('style', 'color: green')
    labelEstado.innerHTML = 'estado'
    labelEstado.setAttribute('style', 'border-color: green')
    validEstado = true
  }
})*/

//telefone

telefone.addEventListener('keyup', () => {
  //se for menor q 2 fica vermelho
  if(telefone.value.length  != 18){
    labelTelefone.setAttribute('style', 'color: red')
    labelTelefone.innerHTML = 'telefone *Insira o numero corretamente'
    telefone.setAttribute('style', 'border-color: red')
    validTelefone = false
  } else {
    labelTelefone.setAttribute('style', 'color: green')
    labelTelefone.innerHTML = 'telefone'
    telefone.setAttribute('style', 'border-color: green')
    validTelefone = true
  }
})

//celular
celular.addEventListener('keyup', () => {
  if(celular.value.length != 19){
    labelCelular.setAttribute('style', 'color: red')
    labelCelular.innerHTML = 'celular *Insira o numero corretamente'
    celular.setAttribute('style', 'border-color: red')
    validCelular = false
  } else {
    labelCelular.setAttribute('style', 'color: green')
    labelCelular.innerHTML = 'celular'
    celular.setAttribute('style', 'border-color: green')
    validCelular = true
  }
})

//verificar se os campos foram preenchidos
function cadastrar(){
    if(validNome && validNomeMaterno && validSenha && validConfirmSenha && 
      validCpf && validLogin && validNascimento/* && validSexo && validCep && 
      validEndereco && validBairro && validCidade && validEstado */&& validTelefone 
      && validCelular){

    //transforma em json e chama o localStorage
    //ou transforma ou cria um array vazio

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    //array de objetos
    listaUser.push(
    {
      nomeCad: nome.value,
      nomeMaternoCad: nomeMaterno.value,
      senhaCad: senha.value,
      cpfCad: cpf.value,
      loginCad: login.value,
      nascimentoCad: nascimento.value,
      /*sexoCad: sexo.value,
      cepCad: cep.value,
      enderecoCad: valid.endereco,
      bairroCad: valid.bairro,
      cidadeCad: validCidade,
      estadoCad: validEstado,*/
      telefoneCad: validTelefone,
      celularCad: validCelular
      
    }
    )
    
    //guardar e criar registro no localstorage
    localStorage.setItem('listaUser', JSON.stringify(listaUser))


    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        //mudar a pagina
        window.location.href = 'login.html'
    }, 3000) //3segundos
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=> {
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})

