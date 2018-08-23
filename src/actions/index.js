/**
 * Created by huangling on 13/06/2018.
 */
import axios from 'axios';
import * as Mock from './mock';
let mock = true;

const Service = mock ? Mock : {
    getLog: () => {

    },
    getCustomer: () => {

    },
    getMachine: () => {

    },
    getCode: () => {
        return axios.get('/codeBatch')
    },
    addCode: () => {
        return axios.post('/codeBatch', data)
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

export default Service;