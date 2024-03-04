import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodol } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  employeeform!: FormGroup;//adddata
  data: undefined | datamodol[];//get data
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],

    })
    this.getemployee();

  }//add data
  addemployee(data: datamodol) {
    //console.log(data);
    this.api.addemployee(data).subscribe((res => {
      this.employeeform.reset();

    }))
    this.getemployee();
  }
  getemployee() {
    this.api.getemployee().subscribe(res => {
      this.data = res;
      console.log(this.data);

    })
  }
  delete(id: number) {
    this.api.deleteemployee(id).subscribe(() => {
      this.getemployee();
    });
  }
}
