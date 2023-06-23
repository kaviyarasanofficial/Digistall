import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Home', component: HomepageComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Service', component: ServicesComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
