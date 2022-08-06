import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './authentication/auth.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    AuthorizationModule,
    SharedModule,
    MenuModule,
    MovieModule,
    ActorModule,
  ],
})
export class AppModule {}
