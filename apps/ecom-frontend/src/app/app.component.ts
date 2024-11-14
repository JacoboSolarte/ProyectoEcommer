import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';  
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


@Component({
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, NavbarComponent, FooterComponent], 
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
})
export class AppComponent implements OnInit {
  
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);  

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far'; 
    this.faIconLibrary.addIcons(...fontAwesomeIcons);  
  }
}
