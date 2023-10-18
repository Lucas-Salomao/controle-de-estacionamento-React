import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Vagas = () => {

    const navigate = useNavigate();
    const jumpHome = () => {
        //navigate programmatically
        navigate('/');
    };

    return (
        <div class="app">
            <h1>Vagas Disponíveis</h1>
            <table class="table table-disponivel">
                <thead>
                    <tr>
                        <th>Número da vaga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>456</td>
                    </tr>
                    <tr>
                        <td>789</td>
                    </tr>
                    <tr>
                        <td>012</td>
                    </tr>
                    <tr>
                        <td>345</td>
                    </tr>
                    <tr>
                        <td>678</td>
                    </tr>
                    <tr>
                        <td>901</td>
                    </tr>
                    <tr>
                        <td>234</td>
                    </tr>
                    <tr>
                        <td>567</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-primary" id="btn-voltar" onClick={jumpHome}>Voltar</button>
            <footer class="rodape">
                <p>by Lucas Salomão</p>
            </footer>
        </div>
    );
}

export default Vagas;