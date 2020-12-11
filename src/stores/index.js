import MainStore from './mainStore';

class RootStore{
    constructor(){
        this.mainStore = new MainStore();
    }
}

const rootStore = new RootStore();

export default rootStore;