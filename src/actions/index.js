/**
 * Created by huangling on 13/06/2018.
 */
import axios from 'axios';
import * as Mock from './mock';
let mock = true;

let USER;
const Service = {
    getUser: () => {
        if (!USER) {
            USER = axios.get('/user/current').then((user) => {
                USER = user;
                return user;
            });
        }
        return USER;
    },
    getLog: () => {
        return axios.get('/auditLog')
    },
    getCustomer: () => {

    },
    resetPassword: (companyId, userId, password) => {
        // todo: why companyId?
        return axios.post(`/company/${companyId}/users/${userId}/resetPassword`, { password })
    },
    getMachineList: () => {

    },
    getMachineStatus: (id, protocolId) => {
        return axios.get(`/machine/${id}/${protocolId}/data`)
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
        return axios.get('/deviceType');
    },
    getProtocolListList: () => {
        return axios.get('/deviceType/protocol');
    },
    addType: (data) => {
        return axios.post('/deviceType', data)
    },
    addProtocolType: (typeId, data) => {
        return axios.post(`/deviceType/${typeId}/protocol`, data)
    },
    deleteType: (id) => {
        return axios.delete('/deviceType/' + id)
    },
    publishType: (id) => {
        return axios.post('/deviceType/' + id + '/publish')
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