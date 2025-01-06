import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductTimeSearchQueryDto } from '../../dto/product-time-search-query.dto';
import { ProductFilterQuery } from '../../dto/product-filter.query';
import { ProductServiceV1 } from '../../services/v1/product.service';

@Controller('/products')
export class ProductsControllerV1 {
  constructor(private readonly service: ProductServiceV1) {}

  @Get()
  findProducts(@Query() query: ProductFilterQuery) {
    return this.service.findAll();
  }

  @Get(':id')
  findProductById(@Param('id') id: string) {
    return {};
  }

  @Get('changes')
  findProductSearch(@Query() searchQuery: ProductTimeSearchQueryDto) {}
}
