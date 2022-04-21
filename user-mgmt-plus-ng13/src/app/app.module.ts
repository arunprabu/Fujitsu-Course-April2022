import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';

// Decorator
// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    UsersComponent,
    AboutComponent,
    CpbComponent,
    CebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Needed for ngModel to work
  ],
  providers: [],
  bootstrap: [AppComponent] // Step 3: AppModule bootstraps AppComponent // root component - main component
})
export class AppModule { }