import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-messages',
  templateUrl: './saved-messages.component.html',
  styleUrls: ['./saved-messages.component.css']
})
export class SavedMessagesComponent implements OnInit {


  itemarrayay: any[]=[]
  todoitemem:string = '';
  todoitemem2: any[]=[]

  todoitemsarrayay:any[]=[]
  itemarray4: any[]=[]
  todoitem:string = '';
  todoitem4: any[]=[]
  itemarray: any[]=[]
  todoitem3: any[]=[]
  itemarray2: any[]=[]

  todoitemsarray:any[]=[]


  constructor() { }

  ngOnInit(): void {
    const localdata = localStorage.getItem('todoitems3')
    if(localdata != null){
      this.todoitemsarrayay = JSON.parse(localdata);
    }
  }

  // onitemadd(){
  //   this.todoitemsarrayay.push({email:this.itemarrayay,message:this.todoitemem2})
  //   localStorage.setItem('todoitems2',JSON.stringify(this.todoitemsarrayay))
  // }

  
  // onitemadd(){
  //   this.todoitemsarray.push({email:this.itemarray2,message:this.todoitem3})
  //   localStorage.setItem('todoitems',JSON.stringify(this.todoitemsarray))
  // }

  clearsent(){
    localStorage.removeItem('todoitems3')
  }
  // savemessage(){
  //   this.todoitemsarrayay.push({email:this.itemarray4,message:this.todoitem4})
  //   localStorage.setItem('todoitems3',JSON.stringify(this.todoitemsarrayay))
  // }

}


