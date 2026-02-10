import { Pagination } from './../../../shared/components/pagination/pagination';
import { Component, inject, signal } from '@angular/core';
import { ProductTable } from '../../../products/components/product-table/product-table';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../products/service/product.service';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable, Pagination],
  templateUrl: './products-admin-page.html',
})
export class ProductsAdminPage {

  productService = inject(ProductService);
  paginationService = inject(PaginationService);

  productPerPage = signal(10)

  productResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.productPerPage(),
    }),
    stream: ({ params }) => {
      return this.productService.getProducts({
        offset: params.page * 9,
        limit: params.limit,
      });
    }
  })

 }
