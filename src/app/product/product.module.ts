import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitComponent } from './fruit/fruit.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'fruit', component: FruitComponent },
      { path: 'vegetables', component: VegetablesComponent },
    ]
  }
];

@NgModule({

  declarations: [
    FruitComponent,
    VegetablesComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
})

export class ProductModule {
}
