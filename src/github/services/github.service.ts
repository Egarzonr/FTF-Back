import { Injectable } from '@nestjs/common';
import { GITHUB_CONFIG } from '../configuration/github.config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  async getCommitHistory() {
    const url = `${GITHUB_CONFIG.baseUrl}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/commits`;

    try {
      const { data } = await firstValueFrom(
        this.httpService
          .get(url, {
            headers: { Authorization: `Bearer ${GITHUB_CONFIG.token}` },
          })
          .pipe(
            catchError(() => {
              throw 'An error happened!';
            }),
          ),
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
