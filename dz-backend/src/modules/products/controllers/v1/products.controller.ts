import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductServiceV1 } from '../../services/v1/product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { ProductDto } from '../../dto/product.dto';
import { ProductChangesDto } from '../../dto/product-changes.dto';
import { ProductFilterQuery } from '../../dto/queries/product-filter.query';
import { ProductTimeSearchQueryDto } from '../../dto/queries/product-time-search-query.dto';

@ApiTags('Products')
@Controller('/products')
export class ProductsControllerV1 {
  constructor(private readonly service: ProductServiceV1) {}

  @ApiOperation({ summary: 'Get all products paginated' })
  @Get()
  async findProducts(@Query() query: ProductFilterQuery) {
    const result = await this.service.findProducts(query);
    return plainToInstance(ProductDto, result, { excludeExtraneousValues: true });
  }

  @ApiOperation({ summary: 'Get a single product by id' })
  @Get('find/:id')
  async findProductById(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    const result = await this.service.findProductById(id);
    return plainToInstance(ProductDto, result, { excludeExtraneousValues: true });
  }

  @ApiOperation({ summary: 'Get product changes timeline' })
  @Get('changes')
  async findProductSearch(@Query() query: ProductTimeSearchQueryDto) {
    const result = await this.service.findProductSearch(query);
    return plainToInstance(ProductChangesDto, result, { excludeExtraneousValues: true });
  }
}
