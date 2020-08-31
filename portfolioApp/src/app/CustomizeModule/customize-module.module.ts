import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FypComponent } from './fyp/fyp.component';
import { InternshipComponent } from './internship/internship.component';
import { JobExprComponent } from './job-expr/job-expr.component';
import { SkillsComponent } from './skills/skills.component';

import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';

import { DxDrawerModule, DxTreeViewModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    FypComponent,
    InternshipComponent, 
    JobExprComponent, 
    SkillsComponent,
    
    BasicInfoComponent,
    EducationalBackgroundComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DxDrawerModule,
    DxTreeViewModule
  ],
  exports: [
    FypComponent,
    InternshipComponent, 
    JobExprComponent, 
    SkillsComponent,
    
    BasicInfoComponent,
    EducationalBackgroundComponent,
    MenuComponent
  ]
})
export class CustomizeModuleModule { }
