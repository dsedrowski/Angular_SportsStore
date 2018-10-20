import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGurad } from "./storeFirst.guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGurad] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGurad] },
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGurad] },
      { path: "admin", loadChildren: "app/admin/admin.module#AdminModule", canActivate: [StoreFirstGurad] },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pl-PL" }, StoreFirstGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }
