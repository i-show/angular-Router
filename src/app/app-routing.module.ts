import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    {
        path: 'product',
        component: ProductComponent,
        loadChildren: './product/product.module#ProductModule'
    },

    { path: 'employee', component: EmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
