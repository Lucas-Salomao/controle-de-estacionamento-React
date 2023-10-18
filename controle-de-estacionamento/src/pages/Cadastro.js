import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cadastro = () => {

    const navigate = useNavigate();
    const jumpHome = () => {
        //navigate programmatically
        navigate('/');
    };
    return (
        <div class="app" >
            <h1>Cadastro de veículos</h1>
            <div id="area">
                <form id="form">
                    <fieldset>
                        <legend>Formulário</legend>
                        <label>
                            Placa do veículo:
                        </label>
                        <input type="text" name="placa" class="form-control" /><br />
                        <label>
                            Nome do proprietário:
                        </label>
                        <input type="text" name="nome" class="form-control" /><br />
                        <label>
                            Número do apartamento:
                        </label>
                        <input type="number" name="apto" class="form-control" /><br />
                        <label>
                            Bloco do apartamento:
                        </label>
                        <input type="text" name="bloco" class="form-control" /><br />
                        <label>
                            Modelo do veículo:
                        </label>
                        <input type="text" name="placa" class="form-control" /><br />
                        <label>
                            Cor do veículo:
                        </label>
                        <input type="text" name="cor" class="form-control" /><br />
                        <label>
                            Número da vaga de estacionamento:
                        </label>
                        <input type="number" name="vaga" class="form-control" /><br />
                        <input type="submit" value="Salvar" class="btn-salvar" />
                        <button type="button" class="btn btn-voltar" id="btn-voltar" onClick={jumpHome}>Voltar</button>
                    </fieldset>
                </form>

            </div>
            <table class="table table-preview" id="table-preview">
                <thead>
                    <tr>
                        <th>Placa do veículo</th>
                        <th>Nome do proprietário</th>
                        <th>Número do apartamento</th>
                        <th>Bloco do apartamento</th>
                        <th>Modelo do veículo</th>
                        <th>Cor do veículo</th>
                        <th>Número da vaga de estacionamento</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <footer class="rodape">
                <p>by Lucas Salomão</p>
            </footer>
        </div >

    );
}

export default Cadastro;