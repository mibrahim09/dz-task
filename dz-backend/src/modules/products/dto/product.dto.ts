import { Expose } from 'class-transformer';

export class ProductDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  price: number;

  @Expose()
  currency: string;

  @Expose()
  availability: string;

  @Expose()
  createdAt: string;
}
