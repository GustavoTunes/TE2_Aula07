import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    RootComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
