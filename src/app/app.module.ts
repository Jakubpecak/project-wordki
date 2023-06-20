import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { NavigationComponent } from './components/main/shared/navigation/navigation.component';
import { FooterComponent } from './components/main/shared/footer/footer.component';
import { PageNotFoundComponent } from './components/main/shared/page-not-found/page-not-found.component';
import { PopupComponent } from './components/shared/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AboutUsComponent } from './components/main/home/about-us/about-us.component';
import { OfferComponent } from './components/main/home/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    PopupComponent,
    AboutUsComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
