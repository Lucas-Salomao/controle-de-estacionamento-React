import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

class Form_Cadastro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            placa: "",
            nome: "",
            apto: 0,
            bloco: "",
            modelo: "",
            cor: "",
            vaga: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    showAlert(){
        let msg="Cadastro realizado com sucesso!\nPlaca:"+this.state.placa+"\nNome do Proprietário:"+this.state.nome+"\nNúmero do Apartamento:"+this.state.apto+"\nBloco:"+this.state.bloco+"\nModelo:"+this.state.modelo+"\nCor:"+this.state.cor+"\nNúmero da Vaga:"+this.state.vaga;
        alert(msg);
    };

    render() {
        return (
            <div>
                <div id="area">
                    <form id="form">
                        <fieldset>
                            <legend>Formulário</legend>
                            <label>
                                Placa do veículo:
                            </label>
                            <input type="text" name="placa" class="form-control" value={this.state.placa} onChange={this.handleInputChange}/><br />
                            <label>
                                Nome do proprietário:
                            </label>
                            <input type="text" name="nome" class="form-control" value={this.state.nome} onChange={this.handleInputChange} /><br />
                            <label>
                                Número do apartamento:
                            </label>
                            <input type="number" name="apto" class="form-control" value={this.state.apto} onChange={this.handleInputChange}/><br />
                            <label>
                                Bloco do apartamento:
                            </label>
                            <input type="text" name="bloco" class="form-control" value={this.state.bloco} onChange={this.handleInputChange}/><br />
                            <label>
                                Modelo do veículo:
                            </label>
                            <input type="text" name="modelo" class="form-control" value={this.state.modelo} onChange={this.handleInputChange}/><br />
                            <label>
                                Cor do veículo:
                            </label>
                            <input type="text" name="cor" class="form-control" value={this.state.cor} onChange={this.handleInputChange}/><br />
                            <label>
                                Número da vaga de estacionamento:
                            </label>
                            <input type="number" name="vaga" class="form-control" value={this.state.vaga} onChange={this.handleInputChange}/><br />
                        </fieldset>
                        <input type="button" value="Salvar" class="btn-salvar" onClick={this.showAlert}/>
                    </form>
                </div>
            </div>
        );
    }

}

class Table_Cadastro extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

const Cadastro = () => {
    const navigate = useNavigate();
    const jumpHome = () => {
        //navigate programmatically
        navigate('/');
    };

    return (
        <div class="app" >
            <h1>Cadastro de veículos</h1>
            
            <Form_Cadastro/>
            <button type="button" class="btn btn-primary" id="btn-voltar" onClick={jumpHome}>Voltar</button>
            <Table_Cadastro />
            <footer class="rodape">
                <p>by Lucas Salomão</p>
            </footer>
        </div >

    );
}

export default Cadastro;