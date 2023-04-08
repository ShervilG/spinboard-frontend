import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBirthdayComponent } from './birthday-container/list-birthday/list-birthday.component';
import { BirthdayContainerComponent } from './birthday-container/birthday-container.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ListBirthdayComponent,
    BirthdayContainerComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class BirthdayModuleModule { }
