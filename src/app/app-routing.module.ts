import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterceptComponent } from './projects/intercept/intercept.component';
import { TransferCreditComponent } from './projects/transfer-credit/transfer-credit.component';

export const appRoutes: Routes = [{
  path: 'intercept',
  component: InterceptComponent
}, {
  path: 'transfer-credit',
  component: TransferCreditComponent
}, {
  path: '**',
  redirectTo: '/transfer-credit'
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
