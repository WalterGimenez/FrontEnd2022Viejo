import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillComponent } from './components/skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PageErrorComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProyectComponent,
    FooterComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
