import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly gitService: GithubService) {}

  @Get()
  async getCommitHistory() {
    return this.gitService.getCommitHistory();
  }
}
