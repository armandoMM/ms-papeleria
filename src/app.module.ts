import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { EstadosModule } from './modules/estados/estados.module';
import { TiposModule } from './modules/tipos/tipos.module';

@Module({
  imports: [
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'papeleria-anita-db.mysql.database.azure.com',
      port: 3306,
      username: 'papelaria',
      password: 'p@p3_2023!',
      database: 'papeleria',
      // entities: [__dirname + '/**/*/*.entity{.ts,.js}'],
      retryDelay: 5000,
      autoLoadEntities: true,
      synchronize: true,
    }),
    EstadosModule,
    TiposModule,
  ],
})
export class AppModule {}
