import { MyDataService } from './my-data-service';
import { SERVER_PORT } from './server-constants';
import { DataService } from './data-service';
import * as express from 'express';
import * as bodyParser from 'body-parser';

class ServerApp{
    private readonly app = express()
    constructor(private dataService:DataService){
    }

    init(){
        this.app.use(bodyParser.json());

        this.app.get('/api/getAllPeople', (req,res)=>{
            this.dataService.getAllPeople()
              .then((peopleArray)=>{
                res.send(peopleArray)
              },(error)=>{
                  res.send('undefined')
              })
        })

        this.app.listen(SERVER_PORT,()=>{})
    }
}

let serverApp:ServerApp = new ServerApp(new MyDataService());
serverApp.init();