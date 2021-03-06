import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResposiveImageDirective } from './directives/responsive-image/resposive-image.directive';
import { AboutComponent } from './components/about/about.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TechsComponent } from './components/techs/techs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationDirective } from './directives/navigation/navigation.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollapseDirective } from './directives/collapse/collapse.directive';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResposiveImageDirective,
    AboutComponent,
    IntroComponent,
    GalleryComponent,
    TechsComponent,
    ContactComponent,
    FooterComponent,
    NavigationDirective,
    NavbarComponent,
    CollapseDirective,
    ContactFormComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
