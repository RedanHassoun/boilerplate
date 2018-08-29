import { DataService } from './data-service';
declare var Promise: any;

export class MyDataService implements DataService{
    getAllPeople(){
        let promise = new Promise((resolve,reject)=>{
            resolve('{ "name" : "redan" }')
        })
        return promise
    }
}