/**
 * Created by huangling on 13/06/2018.
 */
import axios from 'axios';

export default {
    getLog: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([{
                    time: '2018-08-09',
                    level: 'ERROR',
                    content: '啦啦啦'
                }, {
                    time: '2018-07-09',
                    level: 'INFO',
                    content: 'eee'
                }])
            }, 2000);
        });
    }
}