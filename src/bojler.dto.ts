import { IsInt, Min, IsDefined } from 'class-validator';
export default class newBojlerDto {
  type: string;
  @IsDefined({ message: 'A bojler árának megadása kötelező' })
  @Min(1, { message: 'A bojler árának legalább 1-nek kell lennie' })
  @IsInt({ message: 'A bojler árának egész számnak kell lennie' })
  price: number;
}
