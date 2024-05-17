import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GamesResolver } from './games/games.resolver';
import { GamesService } from './games/games.service';
import { PrismaService } from './prisma.service';
import { GamesModule } from './games/games.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: true,
      // sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    GamesModule,
  ],
  providers: [GamesResolver, GamesService, PrismaService],
})
export class AppModule {}
