import { Tab1Component, Tab1Routes  } from './tab1.component';
import { Tab2Component, Tab2Routes  } from './tab2.component';
import { Tab3Component, Tab3Routes  } from './tab3.component';
import { Routes, RouterModule  } from '@angular/router';


export const routes: Routes = [
  ...Tab1Routes,
  ...Tab2Routes,
  ...Tab3Routes
];

export const routing = RouterModule.forRoot(routes);
