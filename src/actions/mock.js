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

const codeObj = {
    total: 10,
    rows: [{
        "id":1,
        "name": "第一批",
        "count": 100,
        "isExport": false, // todo: 需要吗？
        "dateCreated":"2018-08-22 20:50:56",
        "deviceType":1,
        //todo: 创建者
    }]
};

export const getBatchList = () => mockService(codeObj);

export const addCode = (code) => {
    const codeList = codeObj.rows;
    code.id = codeList[codeList.length - 1].id + 1;
    code.dateCreated = new Date().getTime();
    codeList.push(code);
    return mockService();
};

const typeList = [{
    "id":1,
    "name": "name",
    "description": "姓名",
    "isPassive": true,
    "dateCreated":"2018-08-22 20:50:56",
    "lastUpdated":"2018-08-22 20:50:56",
    "datePublish":"2018-08-22 20:50:56",
    "status":0
}, {
    id: 'type2',
    name: 'asf23',
    prefix: 'pp2',
    model: 'xxxx',
    desc: 'xxx1231',
    createDate: new Date().getTime(),
    status: 'draft'
}];

export const getTypeList = () => mockService(typeList);

export const addType = (type) => {
    type.id = new Date().getTime();
    type.createDate = new Date().getTime();
    typeList.push(type);
    return mockService();
};

export const importType = () => {
    return mockService({
        "name": "name",
        "description": "姓名",
        "isPassive": true,
        "protocol":[
            {
                "name":"实时消息",
                "label":{0:"A0"},
                "sendProtocol":"",
                "receiveProtocol":[],
                "isUpdate":false
            }, {
                "name":"设备参数",
                "label":{0:"A3"},
                "sendProtocol":"",
                "receiveProtocol":[],
                "isUpdate":true
            }
        ]
    })
};

export const getMetas = () => {
    return mockService([
        {
            "label": "电压",
            "name": "voltage",
            "unit": "v",
            "chart": "line"
        }
    ]);
};
export const updateType = () => {
    return mockService({
        "id":1,
        "name": "name",
        "description": "姓名",
        "isPassive": true,
        "dateCreated":"2018-08-22 20:50:56",
        "lastUpdated":"2018-08-22 20:50:56",
        "datePublish":"2018-08-22 20:50:56",
        "status":0          //0为未发布，1为发布
    });
};