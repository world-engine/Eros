import { Component, OnInit, Input } from '@angular/core';
import { Seed } from '../models/seed';
import { identity } from 'rxjs';

@Component({
  selector: 'we-basic-renderer',
  templateUrl: './basic-renderer.component.html',
  styleUrls: ['./basic-renderer.component.css']
})
export class BasicRendererComponent implements OnInit {

  @Input()
  components: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.components);
  }

}
