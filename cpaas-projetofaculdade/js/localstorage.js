/*
// Função para armazenar dados do formulário no localStorage
function salvarDadosFormulario() {
  // Obtenha os valores do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('senha').value;
  var senha = document.getElementById('cpf').value;
  var senha = document.getElementById('endereco').value;
  var senha = document.getElementById('celular').value;
  var senha = document.getElementById('telefone').value;
  var senha = document.getElementById('nascimento').value;

  // Crie um objeto para armazenar os dados
  var dados = {
    nome: nome,
    senha: senha,
    cpf: cpf,
    endereco: endereco,
    celular: celular,
    telefone: telefone,
    nascimento:nascimento,
  };

  // Armazene os dados no localStorage
  localStorage.setItem('dadosFormulario', JSON.stringify(dados));
}

// Função para verificar o login e redirecionar o usuário
function fazerLogin() {
  // Obtenha os valores do formulário de login
  var email = document.getElementById('nome').value;
  var senha = document.getElementById('senha').value;

  // Obtenha os dados armazenados no localStorage
  var dadosArmazenados = localStorage.getItem('dadosFormulario');

  if (dadosArmazenados) {
    // Converta os dados em um objeto JavaScript
    var dados = JSON.parse(dadosArmazenados);

    // Verifique se o email e a senha estão corretos
    if (email === dados.email && senha === dados.senha) {
      // Redirecione o usuário para outra página
      window.location.href = 'html/dentro.html';
    } else {
      alert('Email ou senha incorretos');
    }
  } else {
    alert('Nenhum usuário encontrado');
  }
}
*/