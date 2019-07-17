import { Component } from '@angular/core';
import { Checkbox, TextField, ComponentTypes } from 'gaea';
// import { Checkbox } from 'gaea/lib/models/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eros';

  components = [
    new TextField({
      name: 'my-text-field',
      type: ComponentTypes.TEXT,
      value: 'Hello there!',
      placeholder: 'Replace me'
    }),
    new Checkbox({
      name: 'my-checkbox',
      type: ComponentTypes.CHECKBOX
    })
  ];
}
