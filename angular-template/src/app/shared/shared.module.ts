import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SideNavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports:[
    SideNavComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
