import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GamesResolver } from './games/games.resolver';
import { GamesService } from './games/games.service';
import { PrismaService } from './prisma.service';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    GamesModule,
  ],
  providers: [GamesResolver, GamesService, PrismaService],
})
export class AppModule {}
