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
      'Authorization':'Bearer BQBadMFsU4694TrmlX4bC5Vhr0GSjGRdDNg-41PbGNd98DHj6MjdjvkzfKHZgS__1ZLnezmfdalTsQ32Icw'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
          .pipe( map( data =>data['albums'].items));
  }

  getArtistas( termino: string){
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20&offset=5`,{headers});

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
          .pipe(map(data => data['artists'].items));
  }

  getArtista( id: string){
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20&offset=5`,{headers});

    return this.getQuery(`artists/${ id }`);
         // .pipe(map(data => data['artists'].items));
  }

  getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
           .pipe(map(data => data['tracks']));
  }
}
