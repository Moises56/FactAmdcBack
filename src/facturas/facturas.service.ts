import { Injectable, ForbiddenException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFacturaDto: CreateFacturaDto) {
    const newFactura = await this.prisma.factura.create({
      data: createFacturaDto,
    });

    return {
      data: newFactura,
      message: 'Factura creada con éxito',
      status: HttpStatus.CREATED,
    };
  }

  async findAll() {
    //obtener todas las facturas y ordenarlas por fecha de creación de forma descendente
    const facturas = await this.prisma.factura.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    // ahora el campo de mercado es un objeto id, por lo que se debe hacer un join con la tabla mercado para obtener el nombre del mercado
    for (const fact of facturas) {
      console.log(fact.mercado);
      const mercado = await this.prisma.mercado.findUnique({
        where: { id: fact.mercado },
      });
      // console.log(mercado.nombre_mercado);
      fact.mercado = mercado.nombre_mercado;
      // console.log(fact.mercado);
    }

    return {
      data: facturas,
      message: 'Lista de facturas',
      status: HttpStatus.OK,
    };
  }

  async findOne(id: string) {
    const factura = await this.prisma.factura.findUnique({
      where: { id },
    });
    if (!factura) {
      throw new ForbiddenException('La factura no existe');
    }
    return {
      data: factura,
      message: 'Factura encontrada',
      status: HttpStatus.OK,
    };
  }

  async update(id: string, updateFacturaDto: UpdateFacturaDto) {
    const factura = await this.prisma.factura.findUnique({
      where: { id },
    });
    if (!factura) {
      throw new ForbiddenException('La factura no existe');
    }

    const updatedFactura = await this.prisma.factura.update({
      where: { id },
      data: updateFacturaDto,
    });

    return {
      data: updatedFactura,
      message: 'Factura actualizada con éxito',
      status: HttpStatus.OK,
    };
  }

  async remove(id: string) {
    const factura = await this.prisma.factura.findUnique({
      where: { id },
    });
    if (!factura) {
      throw new ForbiddenException('La factura no existe');
    }

    await this.prisma.factura.delete({
      where: { id },
    });

    return {
      message: 'Factura eliminada con éxito',
      status: HttpStatus.OK,
    };
  }
}
