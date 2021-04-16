import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo')
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD_NPLry-Q72Idq-M8LXHuZMfVvPRgTrDY3d4V0zzCSyVZjrvigwEmllwfxAogxHEbS7yPgnMjWvytq-3w'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
          .pipe( map( data =>data['albums'].items));
  }

  getArtista( termino: string){
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20&offset=5`,{headers});

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
          .pipe(map(data => data['artists'].items));
  }
}
