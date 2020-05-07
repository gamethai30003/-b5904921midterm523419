import { Component, OnInit } from '@angular/core';


 


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  studentid: string;
  name: string;
  gender: string;
  birthyear: number;
  age: number;
  email: string;
  phone: string;
  img: string;
  address: string;
  comment: string;
  

  constructor() { 
    
  }

  ngOnInit(): void {
    
      this.studentid = 'B5904921',
      this.name= 'Chinnawat Chuanmanee',
      this.gender= 'Male',
      this.birthyear= 1998,
      this.age= 21,
      this.email= 'gamethai30003@gmail.com',
      this.phone= '0855211622',
      this.img= 'https://api.adorable.io/avatars/285/abott@adorable.io.png'
      
     
    
  }
  onUserClick($e){
    alert('SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand');
  }

  getName(){
    return this.name;
  }

   
  

}
