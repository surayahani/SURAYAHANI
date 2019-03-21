import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getSearch(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBXfv5sUOy81M3Tcp55_dZAeMSdVXjS9g094Hvel4wAEeWcp4bbSXHV6DIBzX5Ljg1W5JYOJ2IO_DiBHcOEZoG6Y3u7-YjXyeDGI2O3VbChcKonHRppGakdenadiB80i5dloZobUcwJ8GZ8bpWgKaJmIDX7e87vDw"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getSearch(query);
  }

  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
