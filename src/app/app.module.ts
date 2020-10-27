import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppStateKey, AppReducer,  } from './reducers';
import { AppEffects } from './effects/index'
import { TruncatePipe } from './truncate.pipe';
import { LandingComponent } from './components/landing/landing.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInforComponent } from './components/product-infor/product-infor.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchBarComponent, ProductListComponent, ProductInforComponent,
    TruncatePipe,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      AppStateKey: AppReducer
    }),
    HttpClientModule,
    StoreModule.forFeature(AppStateKey, AppReducer),
    EffectsModule.forRoot([AppEffects]),
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule, MatCardModule, MatButtonModule, MatPaginatorModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
