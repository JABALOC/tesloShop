import { Routes } from "@angular/router";
import { AdminLayout } from "./layouts/admin-dashboard-layout/admin-ashboard-layout";
import { ProductAdminPage } from "./pages/product-admin-page/product-admin-page";

export const adminDashboardRoutes: Routes = [{

  path: '',
  component: AdminLayout,
  children: [
    {
      path: 'products',
      component: ProductAdminPage,
    },
    {
      path: 'product/:id',
      component: ProductAdminPage,
    },
    {
      path: '**',
      redirectTo: 'products',
    },
  ]
}];

export default adminDashboardRoutes;
