import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductTimeSearchQueryDto {
  @ApiProperty({ description: 'Start date for the search', type: String, format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  from: Date;

  @ApiProperty({ description: 'End date for the search', type: String, format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  to: Date;
}
