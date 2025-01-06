import { IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiPropertyOptional({ description: 'Page number', type: Number })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number;

  @ApiPropertyOptional({ description: 'Max elements in one page', type: Number })
  @Type(() => Number)
  @IsInt()
  @Min(10)
  @Max(50)
  count: number;
}
