import axios from 'axios'
import {
    API_ROOT
} from './api-config'

const serverUrl = API_ROOT


export default class InformacoesGeraisService {

    save = (informacoesGerais, successCallback, errorCallback) => {
        axios({
            method: 'post',
            url: serverUrl + '/informacoes-gerais',
            headers: {
                'Content-Type': 'application/json'
            },
            data: informacoesGerais
        }).then(response => {
            successCallback(response)
        }).catch(error => {
            errorCallback(error)
        })
    }

    listAll = (successCallback, errorCallback) => {
        axios({
            method: 'get',
            url: serverUrl + '/informacoes-gerais',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            successCallback(response)
        }).catch(error => {
            errorCallback(error)
        })
    }
}