import { ExampleService } from './../services/example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  private peopleArray:Array<any> = []
  private redan 
  constructor(private exampleService:ExampleService) { }

  ngOnInit() {
    this.exampleService.getAllPeople()
            .subscribe((data)=>{ 
              this.peopleArray.push(data.json())
            }) 
  }
 
  onClick(){
    console.log(this.redan)
  }

}
