import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'we-gaea',
  template: `
    <we-basic-renderer [components]="components"></we-basic-renderer>
  `,
  styles: []
})
export class GaeaComponent implements OnInit {

  @Input()
  components: any[];

  constructor() { }

  ngOnInit() {
  }

}
