
    //pegando o formulario
    const form   = document.getElementById('form');

    //pegando todos os campos onde tem uma classe chamada required
    const campos = document.querySelectorAll('.required');

    //pegar os spans com nome span-required
    const spans  = document.querySelectorAll('.span-required');


    //adicionado um evento no botao para verificar
    // se os campos foram preenchidos.

    form.addEventListener('submit', (event) => {
        event.preventDefault();
       
        nameValidate();
        mainPasswordValidate();
        comparePassword();
        comparecpf();
        //isEmpty();
    });
    

    //vai pegar o indice 0 e adicionar a borda em todos os campos

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }
    
    //tirando o erro e a borda
    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }





    //validação do nome.
    function nameValidate(){

        if(campos[0].value.length > 60)
        {
            setError(0);

        }
        if(campos[0].value.length < 15)
        {
            setError(0);
        }
        
        else
        {
            removeError(0);
        }
    }


    //validacao da senha
    function mainPasswordValidate(){
        if(campos[1].value.length > 8)
        {
            setError(1);
        }
        if(campos[1].value.length < 8){
            setError(1);
        }
        else
        {
            removeError(1);
            comparePassword();
        }
    }

    //comparando a senha
    function comparePassword(){
        if(campos[1].value == campos[2].value && campos[2].value.length >= 8)
        {
            removeError(2);
        }
        else
        {
            setError(2);
        }
    }
 
    //validar cpf

    function comparecpf(){
        if(campos[3].value.length == 11)
        {
            removeError(3);
        }
        else
        {
            setError(3);
        }


    }


    // Função para armazenar dados do formulário no localStorage
     function salvarDadosFormulario() {
    // Obtenha os valores do formulário
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('cpf').value;
    var cpf = document.getElementById('senha').value;
    var endereco = document.getElementById('endereco').value;
    var celular = document.getElementById('celular').value;
    var telefone = document.getElementById('telefone').value;
    var nascimento = document.getElementById('nascimento').value;
  
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
      if (nome === dados.nome && senha === dados.senha) {
        // Redirecione o usuário para outra página
        window.location.href = 'dentro.html';
      } else {
        alert('Email ou senha incorretos');
      }
    } else {
      alert('Nenhum usuário encontrado');
    }
  }
  