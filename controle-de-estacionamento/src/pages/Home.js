import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import minhaImagem from '../img/logo.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const jumpCadastro = () => {
    //navigate programmatically
    navigate('/cadastro');
  };

  const jumpVagas = () => {
    //navigate programmatically
    navigate('/vagas');
  };

  const jumpListar = () => {
    //navigate programmatically
    navigate('/lista');
  };
  
  return (
    <div class="app">
      <header>
        <h1>Controle de Estacionamento</h1>
      </header>
      <div>
        <img src={minhaImagem} width="500" height="500" />
      </div>
      <div>
        <button type="button" class="btn btn-primary" id="btn-cadastro" onClick={jumpCadastro}>Cadastro</button>
        <button type="button" class="btn btn-primary" id="btn-disponivel"onClick={jumpVagas}>Vagas Disponíveis</button>
        <button type="button" class="btn btn-primary" id="btn-listagem"onClick={jumpListar}>Listar Vagas</button>
      </div>
      <footer class="rodape">
        <p>by Lucas Salomão</p>
      </footer>
    </div>
  );
}

export default Home;