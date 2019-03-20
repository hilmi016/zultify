import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQDJFfO0iWS8jaXSjMyL1qHvnqNwTYR0DvkvuS3XA2QI9LA1tSOf7wR3-npXzEe7gYkzwod-DGw9jpUK2Ab03_EPLUdGhchRKZZ_HKqtLg3y-mhk3Z9sf3sVxc73tGfvoAg-MU3RCA2nUjq0b3bBexbOiC8rjCiKxg"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
