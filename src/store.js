import {observable, action} from 'mobx'

class Store {

    @observable list = [];

    @action find() {
        for (let i = 0; i < 10; i++) {
            this.list.push("test" + i);
        }
    }

    @action add(msg){
        this.list.unshift(msg);
    }


}

export default Store;