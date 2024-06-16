import { IsString, IsInt, IsDecimal, IsNotEmpty } from 'class-validator';

export class CreateFacturaDto {
  @IsString()
  @IsNotEmpty()
  mercado: string;

  @IsString()
  @IsNotEmpty()
  propietario: string;

  @IsInt()
  @IsNotEmpty()
  numero_local: number;

  @IsString()
  @IsNotEmpty()
  concepto: string;

  @IsString()
  @IsNotEmpty()
  mes: string;

  @IsDecimal()
  @IsNotEmpty()
  monto: number;

  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  DNI: string;

  @IsString()
  @IsNotEmpty()
  permiso_operacion: string;
}
