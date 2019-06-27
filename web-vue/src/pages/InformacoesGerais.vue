<template>
  <div class="container">
    <header>
      <div class="header-content">
        <img
          alt="Vue logo"
          src="../assets/logomarcaPontoSistemas.png"
          class="ui small centered image"
        >
        <!-- <sui-image src="../assets/logo.png" size="small" centered/> -->
        <!-- <sui-button floated="left" content="Left floated" /> -->
      </div>
    </header>
    <main>
      <br>
      <!-- MENU  -->
      <sui-menu>
        <sui-menu-item link name="adicionar" @click.native="openModal">Adicionar</sui-menu-item>
      </sui-menu>
      <div>
        <!-- TABLE -->
        <sui-table basic="very" striped>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Código</sui-table-header-cell>
              <sui-table-header-cell>Razão Social</sui-table-header-cell>
              <sui-table-header-cell>Endereço</sui-table-header-cell>
              <sui-table-header-cell>Bairro</sui-table-header-cell>
              <sui-table-header-cell>Número</sui-table-header-cell>
              <sui-table-header-cell>Cidade</sui-table-header-cell>
              <sui-table-header-cell>UF</sui-table-header-cell>
              <sui-table-header-cell>CNPJ</sui-table-header-cell>
              <sui-table-header-cell>Percentual Multa</sui-table-header-cell>
              <sui-table-header-cell>Percentual Desconto</sui-table-header-cell>
              <sui-table-header-cell>Percentual Juros</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row
              v-for="informacoesGerais in this.listaInformacoesGerais"
              v-bind:key="informacoesGerais.codigoEmpresa"
            >
              <sui-table-cell>{{informacoesGerais.codigoEmpresa}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.razaoSocial}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.endereco}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.bairro}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.numero}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.cidade}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.uf}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.cnpj}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.percMulta}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.percDesconto}}</sui-table-cell>
              <sui-table-cell>{{informacoesGerais.percJuros}}</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </div>
      <!-- MODAL -->

      <sui-modal v-model="open">
        <sui-modal-content scrolling>
          <sui-form>
            <sui-form-field>
              <label>Razão Social</label>
              <input placeholder="Razão Social" v-model="selectedInformacoesGerais.razaoSocial">
            </sui-form-field>
            <sui-form-field>
              <label>Endereço</label>
              <input placeholder="Endereço" v-model="selectedInformacoesGerais.endereco">
            </sui-form-field>
            <sui-form-field>
              <label>Bairro</label>
              <input placeholder="Bairro" v-model="selectedInformacoesGerais.bairro">
            </sui-form-field>
            <sui-form-field>
              <label>Número</label>
              <input placeholder="Número" type="number" v-model="selectedInformacoesGerais.numero">
            </sui-form-field>
            <sui-form-field>
              <label>Cidade</label>
              <input placeholder="Cidade" v-model="selectedInformacoesGerais.cidade">
            </sui-form-field>
            <sui-form-field>
              <label>UF</label>
              <input placeholder="UF" v-model="selectedInformacoesGerais.uf">
            </sui-form-field>
            <sui-form-field>
              <label>CNPJ</label>
              <input placeholder="CNPJ" v-model="selectedInformacoesGerais.cnpj">
            </sui-form-field>
            <sui-form-field>
              <label>Percentual Multa</label>
              <input
                placeholder="Percentual Multa"
                type="number"
                v-model="selectedInformacoesGerais.percMulta"
              >
            </sui-form-field>
            <sui-form-field>
              <label>Percentual Desconto</label>
              <input
                placeholder="Percentual Desconto"
                type="number"
                v-model="selectedInformacoesGerais.percDesconto"
              >
            </sui-form-field>
            <sui-form-field>
              <label>Percentual Juros</label>
              <input
                placeholder="Percentual Juros"
                type="number"
                v-model="selectedInformacoesGerais.percJuros"
              >
            </sui-form-field>
          </sui-form>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button negative @click.native="closeModal">cancelar</sui-button>
          <sui-button positive @click.native="salvar">Salvar</sui-button>
        </sui-modal-actions>
      </sui-modal>
    </main>
    <!-- {/* <footer> <Header size='small' color='black'>Desenvolvido por <a href='http://cleitoncardoso.github.io/' target='_blank' rel='noopener noreferrer'>Cleiton Cardoso </a></Header></footer> */} -->
  </div>
</template>

<script type = "text/javascript" >
import InformacoesGeraisService from "../services/InformacoesGeraisService.js";

const informacoesGeraisService = new InformacoesGeraisService();

export default {
  data: function() {
    return {
      listaInformacoesGerais: [],
      open: false,
      selectedInformacoesGerais: {}
    };
  },
  created: function() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      informacoesGeraisService.listAll(
        response => {
          this.listaInformacoesGerais = response.data;
        },
        () => {},
        () => {}
      );
    },
    openModal: function() {
      this.open = true;
    },
    closeModal: function() {
      this.open = false;
    },
    salvar: function() {
      informacoesGeraisService.save(
        this.selectedInformacoesGerais,
        response => {
          this.selectedInformacoesGerais = {};
          this.loadData();
          this.closeModal();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
