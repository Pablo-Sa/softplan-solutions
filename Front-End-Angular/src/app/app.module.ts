import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { Interceptor } from "./interceptors/interceptor.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import {
  BreakPointRegistry,
  FlexLayoutModule,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  LayoutAlignStyleBuilder,
  LayoutStyleBuilder,
  MediaMarshaller,
  PrintHook,
  ShowHideStyleBuilder,
  StylesheetMap,
  StyleUtils,
  ɵMatchMedia,
} from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Interceptor,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    StyleUtils,
    LayoutAlignStyleBuilder,
    StylesheetMap,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    PrintHook,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    ShowHideStyleBuilder,
    FlexOrderStyleBuilder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
