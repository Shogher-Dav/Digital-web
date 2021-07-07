import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { HeaderModule } from 'src/app/shell/header/header.module';
import { QuestionsListComponent } from './questions-list/questions-list.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HeaderModule
  ],
  exports: [
    QuestionsComponent,
    QuestionsListComponent
  ]
})
export class QuestionsModule { }
