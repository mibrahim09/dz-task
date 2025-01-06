import { ProductDto } from './product.dto';
import { Expose, Type } from 'class-transformer';

class SingleChangeDto {
  @Expose()
  newValue: string;

  @Expose()
  oldValue: string;
}

class ChangesDto {
  @Expose()
  availability: SingleChangeDto;

  @Expose()
  price: SingleChangeDto;
}

export class ProductChangesDto {
  @Expose()
  @Type(() => ProductDto)
  product: ProductDto;

  @Expose()
  @Type(() => ChangesDto)
  changes: ChangesDto;
}
