/**
 * Created by huangling on 13/06/2018.
 */
const mockService = (data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 200);
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
    location: '124.23.232.13',
    code: 'THSOQF',
    count: '123',
    status: 'NORMAL',
    id: '123',
    lastUpdate: new Date().toLocaleString(),
    registerTime: '218-02-03',
    type: 't1'
}, {
    location: '167.13.232.133',
    code: 'THSOQF',
    count: '13',
    status: 'ERROR',
    id: '1233',
    lastUpdate: new Date().toLocaleString(),
    registerTime: '218-02-03',
    type: 't2'
}]);

const codeList = [{
    id: '1',
    name: 'test1',
    num: 100,
    date: '2018-07-02',
    type: 'type1',
    creator: 'JiangHong'
}, {
    id: '2',
    name: 'test2',
    num: 150,
    date: '2018-08-02',
    type: 'type2',
    creator: 'JiangHong'
}, {
    id: '3',
    name: 'test3',
    num: 50,
    date: '2018-08-12',
    type: 'type3',
    creator: 'JiangHong'
}];

export const getCode = () => mockService(codeList);

export const setCode = (list) => {
    list.id = new Date().getTime();
    codeList.push(list);
    return mockService();
};