import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodol } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  public dataid!:number; 
  public employee!: datamodol;
  constructor(private activatedroute:ActivatedRoute, private router:Router, private api:ApiService){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id");
     console.log("Data Id is ",this.dataid)

    })
    this.api.fetchdata(this.dataid).subscribe((data:datamodol)=>{
      this.employee=data;
    })
    
  }

  update(){
    this.api.updateemployee(this.employee,this.dataid).subscribe((res:datamodol)=>{
      this.router.navigate(["/"])
    })
  }
}
