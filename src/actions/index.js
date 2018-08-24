/**
 * Created by huangling on 13/06/2018.
 */
import axios from 'axios';
import * as Mock from './mock';
let mock = true;

const Service = {
    getLog: () => {

    },
    getCustomer: () => {

    },
    getMachine: () => {

    },
    getBatchList: () => {
        return axios.get('/codeBatch')
    },
    getCodeList: (batchId) => {
        return axios.get(`/codeBatch/${batchId}/codes`)
    },
    addCode: () => {
        return axios.post('/codeBatch', data)
    },
    exportCode: (batchId) => {
        return axios.get(`/codeBatch/${batchId}/export`)
    },
    getTypeList: () => {

    },
    addType: (data) => {
        // {
        //     "name": "第一批",
        //     "count": 100,
        //     "deviceType":1
        // }
        return axios.get('/deviceType', data)
    },
    importType: (data) => {
        return axios.post('/deviceType/upload', data)
    },
    getMetas: () => {
        return axios.get('/meta/fields')
    },
    removeType: (typeId, protocolId) => {
        return axios.delete(`/deviceType/${typeId}/protocol/${protocolId}`)
    },
    updateType: (id) => {
        return axios.put(`/deviceType/${id}`)
    }
};

if (mock) {
    Object.assign(Service, Mock);
}

export default Service;