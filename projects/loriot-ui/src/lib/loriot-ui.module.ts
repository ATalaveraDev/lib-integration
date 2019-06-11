import { NgModule } from '@angular/core';
import { LoriotUiComponent } from './loriot-ui.component';
import { ButtonModule } from './button/button.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [LoriotUiComponent],
  imports: [ButtonModule],
  exports: [
    LoriotUiComponent,
    ButtonComponent
  ]
})
export class LoriotUiModule { }
