import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ProductRepositoryV1 {
  abstract findAll(): Promise<any>;

  abstract markStaleProducts(): Promise<void>;
}
