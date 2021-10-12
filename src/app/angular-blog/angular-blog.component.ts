import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-angular-blog',
  templateUrl: './angular-blog.component.html',
  styleUrls: ['./angular-blog.component.css']
})
export class AngularBlogComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
     this.form = new FormGroup({
       email: new FormControl('', [
         Validators.email,
         Validators.required
       ]),
       password: new FormControl('', [
         Validators.required,
         Validators.minLength(4)
       ]),
     })
  }

  singIn() {

  }
}
