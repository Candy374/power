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

    },
    setCode: () => {

    }
};

export default Service;