import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResposiveImageDirective } from './directives/responsive-image/resposive-image.directive';
import { AboutComponent } from './components/about/about.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TechsComponent } from './components/techs/techs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
