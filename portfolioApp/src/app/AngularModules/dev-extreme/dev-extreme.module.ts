import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxDataGridModule,
  DxTemplateModule,
  DxBulletModule,
  DxFormModule,
  DxButtonModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxTabPanelModule,
  DxTreeViewModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxNumberBoxModule,
  DxAutocompleteModule,
  DxPopupModule,
  DxMenuModule,
  DxCheckBoxModule,
  DxDrawerModule,
  DxToolbarModule,
  DxListModule,
  DxActionSheetModule,
  DxPopoverModule,
  DxScrollViewModule,
  DxDateBoxModule
} from 'devextreme-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, /**** DevEx ******/
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxTabPanelModule,
    DxTreeViewModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxNumberBoxModule,
    DxAutocompleteModule,
    DxPopupModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule,
    DxActionSheetModule,
    DxPopoverModule,
    DxScrollViewModule,
    DxDateBoxModule
  ],
  exports: [
    /**** DevEx ******/
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    DxTabPanelModule,
    DxTreeViewModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxNumberBoxModule,
    DxAutocompleteModule,
    DxPopupModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule,
    DxActionSheetModule,
    DxPopoverModule,
    DxScrollViewModule,
    DxDateBoxModule
  ],
})
export class DevExtremeModule { }
