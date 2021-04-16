import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify service listo')
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBsJCyEeIyE4Qf5l58VORN07g7e26UMRXVMqkwgvbiVPAILgu9dUF1iNKi7uQU7pmPx-IzsueiFoP68Hgw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
      // .subscribe( (data: any) => {
      //   console.log(data);
      // });
  }
}
