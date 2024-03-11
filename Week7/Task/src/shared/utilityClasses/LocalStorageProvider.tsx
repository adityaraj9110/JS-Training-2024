

class LocalStorageProvider{
    getItem <T>(key:string):T{
        const savedItem: T  = JSON.parse(localStorage.getItem(key) ?? JSON.stringify(""));
        return savedItem;
    }
    setItem<T>(key:string,data:T){
        localStorage.setItem(key,JSON.stringify(data));
    }
    removeItem(key:string){
        localStorage.removeItem(key);
    }
}
export const localStorageProvider = new LocalStorageProvider(); 