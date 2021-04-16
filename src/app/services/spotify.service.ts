import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo')
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBqF-tfAvqOKYC3xUkxxVYPF2vuAczBbtU-JscCNzV3wNdeLFGNy74sX8ZKXQy4MeibjhDbae5-8jsUfCM'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
      // .subscribe( (data: any) => {
      //   console.log(data);
      // });
  }

  getArtista( termino: string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBqF-tfAvqOKYC3xUkxxVYPF2vuAczBbtU-JscCNzV3wNdeLFGNy74sX8ZKXQy4MeibjhDbae5-8jsUfCM'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20&offset=5`,{headers});
  }
}
