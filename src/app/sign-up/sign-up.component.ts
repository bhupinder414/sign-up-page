import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  FirstName:String;
  LastName:String;
  DOB:Date;
  Address:String;
  Email:String;
  AlternateEmail:String;
  MobileNo:number;

  onSubmit(form:NgForm)
  {
    if(form.invalid)
    {
       console.log("form state Invalid Found")
       return;
    }
    else
    {
    this.FirstName=form.value.FirstName;
    this.LastName=form.value.LastName;
    this.Email=form.value.Email;
    this.AlternateEmail=form.value.AlternateEmail;
    this.DOB=form.value.DOB;
    this.MobileNo=form.value.MobileNo;
    this.Address=form.value.Address;
    // console.log(this.FirstName);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
