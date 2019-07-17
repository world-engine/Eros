import { NgModule } from '@angular/core';
import { GaeaComponent } from './gaea.component';
import { BasicRendererComponent } from './basic-renderer/basic-renderer.component';

@NgModule({
  declarations: [GaeaComponent, BasicRendererComponent],
  imports: [
  ],
  exports: [GaeaComponent]
})
export class GaeaModule { }
