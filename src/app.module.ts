import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { EstadosModule } from './modules/estados/estados.module';
import { TiposModule } from './modules/tipos/tipos.module';
import { MarcasModule } from './modules/marcas/marcas.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { SucursalesModule } from './modules/sucursales/sucursales.module';
import { VentasModule } from './modules/ventas/ventas.module';
import { ProductosVentaModule } from './modules/productos_venta/productos_venta.module';
import { ProductosModule } from './modules/productos/productos.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'papeleria-anita-db.mysql.database.azure.com',
      port: 3306,
      username: 'papelaria',
      password: 'p@p3_2023!',
      database: 'papeleria',
      // entities: [__dirname + '/**/*/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    EstadosModule,
    TiposModule,
    MarcasModule,
    CategoriasModule,
    ProveedoresModule,
    SucursalesModule,
    VentasModule,
    ProductosVentaModule,
    ProductosModule,
  ],
})
export class AppModule {}
