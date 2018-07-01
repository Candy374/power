/**
 * Created by huangling on 13/06/2018.
 */
const mockService = (data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    });
};

export const getLog = () => mockService([{
    time: '2018-08-09',
    level: 'ERROR',
    content: '啦啦啦'
}, {
    time: '2018-07-09',
    level: 'INFO',
    content: 'eee'
}]);

export const getCustomer = () => mockService([{
    id: '1',
    name: 'jianghong',
    company: 'Convertlab',
    address: '徐家汇',
    mobile: '12031837293',
    machine: ''
}, {
    id: '2',
    name: 'Candy',
}]);

export const getMachine = () => mockService([{
    name: 'XXXX01',
    code: 'THSOQF',
    customer: 'Jianghong',
    status: 'NORMAL'
}, {
    name: 'XXXX02',
    code: 'THSODFEF',
    customer: 'Jianghong',
    status: 'ERROR'
}]);

export const getCode = () => mockService([{
    code: 'THSOQF',
    machine: 'XXXX01'
}, {
    code: 'THSODFEF',
    machine: 'XXXX02'
}, {
    code: 'TSHSDSD',
    machine: ''
}]);