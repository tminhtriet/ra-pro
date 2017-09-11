import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';

import { TemplateComponent } from './template.component';
import { FooterComponent, MenuComponent, HeaderComponent } from '../shared/index';
import { DashboardComponent } from './body/dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        MyDatePickerModule
    ],
    declarations: [TemplateComponent, FooterComponent, MenuComponent, HeaderComponent, DashboardComponent],
    exports: [TemplateComponent, FooterComponent, MenuComponent, HeaderComponent]
})

export class TemplateModule {}