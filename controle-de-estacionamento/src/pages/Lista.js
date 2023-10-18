import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Lista = () => {

    const navigate = useNavigate();
    const jumpHome = () => {
        //navigate programmatically
        navigate('/');
    };

    return (
        <div class="app">
            <h1>Listagem de veículos</h1>
            <table class="table table-listagem" id="table-listagem">
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
                    <tr num-vaga="123">
                        <td>ABC-1234</td>
                        <td>João da Silva</td>
                        <td>101</td>
                        <td>A</td>
                        <td>Fiat Uno</td>
                        <td>Prata</td>
                        <td>123</td>
                    </tr>
                    <tr num-vaga="456">
                        <td>DEF-5678</td>
                        <td>Maria Souza</td>
                        <td>202</td>
                        <td>B</td>
                        <td>Volkswagen Gol</td>
                        <td>Branco</td>
                        <td>456</td>
                    </tr>
                    <tr num-vaga="789">
                        <td>GHI-9012</td>
                        <td>José Santos</td>
                        <td>303</td>
                        <td>C</td>
                        <td>Chevrolet Onix</td>
                        <td>Preto</td>
                        <td>789</td>
                    </tr>
                    <tr num-vaga="12">
                        <td>JKL-3456</td>
                        <td>Ana Maria</td>
                        <td>404</td>
                        <td>D</td>
                        <td>Renault Kwid</td>
                        <td>Vermelho</td>
                        <td>12</td>
                    </tr>
                    <tr num-vaga="345">
                        <td>MNO-7890</td>
                        <td>Pedro Paulo</td>
                        <td>505</td>
                        <td>E</td>
                        <td>Hyundai HB20</td>
                        <td>Azul</td>
                        <td>345</td>
                    </tr>
                    <tr num-vaga="678">
                        <td>PQR-1234</td>
                        <td>Luciana Ferreira</td>
                        <td>606</td>
                        <td>F</td>
                        <td>Toyota Corolla</td>
                        <td>Cinza</td>
                        <td>678</td>
                    </tr>
                    <tr num-vaga="901">
                        <td>STU-5678</td>
                        <td>Carlos Silva</td>
                        <td>707</td>
                        <td>G</td>
                        <td>Honda Civic</td>
                        <td>Verde</td>
                        <td>901</td>
                    </tr>
                    <tr num-vaga="234">
                        <td>VWX-9012</td>
                        <td>Antônio Santos</td>
                        <td>808</td>
                        <td>H</td>
                        <td>Nissan Sentra</td>
                        <td>Bege</td>
                        <td>234</td>
                    </tr>
                    <tr num-vaga="567">
                        <td>YZA-3456</td>
                        <td>Bianca Oliveira</td>
                        <td>909</td>
                        <td>I</td>
                        <td>Jeep Renegade</td>
                        <td>Vermelho</td>
                        <td>567</td>
                    </tr>
                    <tr num-vaga="890">
                        <td>ABC-7890</td>
                        <td>Daniel Pereira</td>
                        <td>1010</td>
                        <td>J</td>
                        <td>Ford EcoSport</td>
                        <td>Branco</td>
                        <td>890</td>
                    </tr>
                </tbody>
            </table><br />
            <span>Número da vaga:</span>
            <input type="text" class="input-num-vaga" id="num-vaga" ></input>
            <button type="button" class="btn btn-primary" id="btn-excluir">Excluir</button><br/>
            <button type="button" class="btn btn-primary" id="btn-voltar" onClick={jumpHome}>Voltar</button>

            <footer class="rodape">
                <p>by Lucas Salomão</p>
            </footer>
        </div>
    );
}

export default Lista;