import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
     provideHttpClient(),
     provideNzI18n(en_US)
  ]
});
