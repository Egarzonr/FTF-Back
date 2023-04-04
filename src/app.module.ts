import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';

@Module({
  imports: [GithubModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
