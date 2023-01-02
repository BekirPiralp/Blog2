import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './Modules/app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
