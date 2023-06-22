import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from "@angular/router";

import { provideState, provideStore } from "@ngrx/store";

import { AppComponent } from 'src/app/app.component'
import { AppRoutes } from "./app/app-routing";
// import { AppRoutes } from "@app/app-router";

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(AppRoutes),
        importProvidersFrom(BrowserAnimationsModule),
    ]
});