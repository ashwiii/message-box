import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myForm!:FormGroup
  formvalue:any
  itemarray: any[]=[]
  todoitem:string = '';
  todoitem2: any[]=[]

  todoitemsarray:any[]=[]
  todoitemsarrayay:any[]=[]

  constructor( ) { }

  ngOnInit(): void {
    
  
    const localdata = localStorage.getItem('todoitems')
    if(localdata != null){
      this.todoitemsarray = JSON.parse(localdata);
    }
    
    

  }
  // sendmail(){
   
  //   localStorage.setItem('message',JSON.stringify(this.myform.value[0])) 
  //   console.log(this.myform.value);
    
  // }
  onitemadd(){
    
    this.todoitemsarray.push({email:this.itemarray,message:this.todoitem2})
    localStorage.setItem('todoitems',JSON.stringify(this.todoitemsarray))
  }

  clearsent(){
    localStorage.removeItem('todoitems')
    
  }
  savemessage(){
    this.todoitemsarrayay.push({email:this.itemarray,message:this.todoitem2})
    localStorage.setItem('todoitems3',JSON.stringify(this.todoitemsarrayay))
  }

}