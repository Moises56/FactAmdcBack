import { Module } from '@nestjs/common';
import { MarketsModule } from './markets/markets.module';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { LocalesModule } from './locales/locales.module';
import { FacturasModule } from './facturas/facturas.module';

@Module({
  imports: [
    MarketsModule,
    UsersModule,
    AuthModule,
    PrismaModule,
    LocalesModule,
    FacturasModule,
  ],
})
export class AppModule {}
