import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationQuery } from "../../../../types/pagination.query";

export class ProductFilterQuery extends PaginationQuery {
  @ApiPropertyOptional({ description: 'Filter by product name', type: String })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Filter by minimum price', type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  priceFrom?: number;

  @ApiPropertyOptional({ description: 'Filter by maximum price', type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  priceTo?: number;

  @ApiPropertyOptional({ description: 'Product availability status', type: String })
  @IsOptional()
  @IsString()
  availability?: string;

  @ApiPropertyOptional({ description: 'Filter by provider', type: String })
  @IsOptional()
  @IsString()
  provider?: string;
}
