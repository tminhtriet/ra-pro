import { Route } from '@angular/router';
import { TemplateComponent } from './index';

import { DashboardRoutes } from './body/dashboard/dashboard.routes';

export const TemplateRoutes: Route[] = [
    {
        path: "secure",
        component: TemplateComponent,
        children: [
            ...DashboardRoutes
        ]
    }
]