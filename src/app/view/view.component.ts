import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data;
  constructor(public service:DataService) { }

  ngOnInit() {
    this.data = this.service.getData()
    console.log(this.data)
  }

}
