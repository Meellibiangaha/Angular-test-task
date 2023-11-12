import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'core/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('app/home/pages/home-page/home-page.module').then(m => m.HomeModule) },
    //lazy loading через loadChildren,
    { path: 'home', loadChildren: () => import('app/home/pages/home-page/home-page.module').then(m => m.HomeModule) },
    { path: 'inventory', loadChildren: () => import('app/home/pages/inventory-page/inventory-page.module').then(m => m.InventoryModule), canActivate: [AuthGuard] },
    { path: 'reports', loadChildren: () => import('app/home/pages/reports-page/reports-page.module').then(m => m.ReportsModule), canActivate: [AuthGuard] },
    { path: 'billings', loadChildren: () => import('app/home/pages/billings-page/billings-page.module').then(m => m.BillingModule), canActivate: [AuthGuard] },
    { path: 'profile', loadChildren: () => import('app/home/pages/profile-page/profile-page.module').then(m => m.ProfilePageModule), canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
