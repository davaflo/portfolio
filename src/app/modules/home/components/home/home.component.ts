import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= 1024;
  }

  isDarkTheme$ = new Observable<boolean>();
  screenWidth = window.innerWidth;
  isMobile = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.theme;
    this.isMobile = this.screenWidth <= 1024;
  }
}
