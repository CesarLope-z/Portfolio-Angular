import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Portfolio'
    },
    {
        path: 'more',
        component: DetailsComponent,
        title: 'More details'
    },
    {
        path: 'more/:id',
        component: DetailsComponent,
        title: 'About Project'
    }
];
