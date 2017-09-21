import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DndModule, DragDropService, DragDropConfig} from "ng2-dnd";
import { ProfessorComponent } from './professor/professor.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';

export const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'prof', component: ProfessorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DndModule.forRoot(),
    MdMenuModule
  ],
  providers: [DragDropService, DragDropConfig, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
