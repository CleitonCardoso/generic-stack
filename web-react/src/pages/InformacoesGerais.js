import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Header,
    Image,
    Menu,
    Table,
    Modal,
    Form,
    Message,
    Popup
} from 'semantic-ui-react'

import {
    DateInput,
} from 'semantic-ui-calendar-react';

import 'semantic-ui-css/semantic.min.css'
import '../App.css'
import InforamcoesGeraisService from '../services/InformacoesGeraisService'

const informacoesGeraisService = new InforamcoesGeraisService()

class InformacoesGerais extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedInformacoesGerais: {} };
    }

    closeModal = () => {
        this.setState({
            openModal: false,
            selectedInformacoesGerais: {
            }
        })
    }

    save = () => {
        if (this.state.hasOwnProperty('selectedInformacoesGerais')) {
            informacoesGeraisService.save(this.state.selectedInformacoesGerais, (response) => {
                this.closeModal()
                this.loadContent()
            }, (error) => {
                console.log(error)
            })
        }
    }

    openinformacoesGerais = (informacoesGerais, event) => {
        console.log(informacoesGerais)
        this.setState({
            openModal: true,
            selectedInformacoesGerais: informacoesGerais
        })
    }

    newinformacoesGerais = (event) => {
        this.setState({
            openModal: true,
            selectedInformacoesGerais: {
            }
        })
    }

    loadContent = () => {
        informacoesGeraisService.listAll(response => {
            this.setState({ listaInformacoesGerais: response.data })
        }, () => { }, () => { })
    }

    componentWillMount = () => {
        this.loadContent()
    }

    updateselectedInformacoesGerais = (event, { name, value }) => {
        console.log(name, value);
        if (this.state.hasOwnProperty('selectedInformacoesGerais')) {
            var selectedInformacoesGerais = this.state.selectedInformacoesGerais
            selectedInformacoesGerais[name] = value
            this.setState({
                selectedInformacoesGerais: selectedInformacoesGerais
            })
        }
    }


    render() {
        return (
            <div className='container'>
                <header>
                    <div className='header-content'>
                        <Image src={require('../assets/logomarcaPontoSistemas.png')} size='small' centered/>
                        {/* <Button primary floated='right' as={Link} to='/'>Ofertas</Button> */}
                    </div>
                </header>
                <main>
                    <br />
                    <Menu>
                        <Menu.Item primary onClick={this.newinformacoesGerais.bind(this)} content="Adicionar" />
                    </Menu>
                    <div>
                        <Table striped selectable basic='very'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Código</Table.HeaderCell>
                                    <Table.HeaderCell>Razão Social</Table.HeaderCell>
                                    <Table.HeaderCell>Endereço</Table.HeaderCell>
                                    <Table.HeaderCell>Bairro</Table.HeaderCell>
                                    <Table.HeaderCell>Número</Table.HeaderCell>
                                    <Table.HeaderCell>Cidade</Table.HeaderCell>
                                    <Table.HeaderCell>UF</Table.HeaderCell>
                                    <Table.HeaderCell>CNPJ</Table.HeaderCell>
                                    <Table.HeaderCell>Percentual Multa</Table.HeaderCell>
                                    <Table.HeaderCell>Percentual Desconto</Table.HeaderCell>
                                    <Table.HeaderCell>Percentual Juros</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {this.state.listaInformacoesGerais && this.state.listaInformacoesGerais.map((informacoesGerais, index) =>
                                    <Popup trigger={
                                        <Table.Row onClick={this.openinformacoesGerais.bind(this, informacoesGerais)}>
                                            <Table.Cell>{informacoesGerais.codigoEmpresa}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.razaoSocial}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.endereco}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.bairro}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.numero}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.cidade}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.uf}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.cnpj}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.percMulta}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.percDesconto}</Table.Cell>
                                            <Table.Cell>{informacoesGerais.percJuros}</Table.Cell>
                                        </Table.Row>
                                    } content='Clique para editar' key={index} />
                                )}
                            </Table.Body>
                        </Table>
                    </div>
                    <Modal open={this.state.openModal} >
                        <Modal.Header>{this.state.selectedInformacoesGerais ? this.state.selectedInformacoesGerais.title : 'Novo    '}</Modal.Header>
                        <Modal.Content scrolling>
                            <Message positive color='red' error hidden={!this.state.errorMessage}>
                                <Message.Header>Algo de errado aconteceu :(</Message.Header>
                                <p>
                                    {this.state.errorMessage}
                                </p>
                            </Message>
                            <Form unstackable>
                                <Form.Input
                                    name='razaoSocial'
                                    label='Razão Social'
                                    placeholder='Razão Social'
                                    value={this.state.selectedInformacoesGerais.razaoSocial}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='endereco'
                                    label='Endereço'
                                    placeholder='Endereço'
                                    value={this.state.selectedInformacoesGerais.endereco}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='bairro'
                                    label='Bairro'
                                    placeholder='Bairro'
                                    value={this.state.selectedInformacoesGerais.bairro}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='numero'
                                    label='Número'
                                    placeholder='Número'
                                    value={this.state.selectedInformacoesGerais.numero}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='cidade'
                                    label='Cidade'
                                    placeholder='Cidade'
                                    value={this.state.selectedInformacoesGerais.cidade}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='uf'
                                    label='UF'
                                    placeholder='UF'
                                    value={this.state.selectedInformacoesGerais.uf}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='cnpj'
                                    label='cnpj'
                                    placeholder='cnpj'
                                    value={this.state.selectedInformacoesGerais.cnpj}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='percMulta'
                                    label='Percentual Multa'
                                    placeholder='Percentual Multa'
                                    value={this.state.selectedInformacoesGerais.percMulta}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='percDesconto'
                                    label='Percentual Desconto'
                                    placeholder='Percentual Desconto'
                                    value={this.state.selectedInformacoesGerais.percDesconto}
                                    onChange={this.updateselectedInformacoesGerais} />

                                <Form.Input
                                    name='percJuros'
                                    label='Percentual Juros'
                                    placeholder='Percentual Juros'
                                    value={this.state.selectedInformacoesGerais.percJuros}
                                    onChange={this.updateselectedInformacoesGerais} />
                            </Form>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.closeModal} negative>Cancelar</Button>
                            <Button onClick={this.save} positive>Salvar</Button>
                        </Modal.Actions>
                    </Modal>
                </main>
                {/* <footer> <Header size='small' color='black'>Desenvolvido por <a href='http://cleitoncardoso.github.io/' target='_blank' rel='noopener noreferrer'>Cleiton Cardoso </a></Header></footer> */}
            </div>
        );
    }
}

export default InformacoesGerais;
