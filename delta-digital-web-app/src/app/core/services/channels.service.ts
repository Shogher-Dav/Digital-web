import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChannel } from '../interfaces/IChannel';
import { IChannelData } from '../interfaces/IChannelData';

@Injectable({
    providedIn: 'root'
})



export class ChannelsService {

    private baseUrl = environment.baseUrl;
 


    constructor(private httpClient: HttpClient) {
    }

    getChannels(page?: number): Observable<IChannelData> {
        return this.httpClient.get<IChannelData>(`${this.baseUrl}/api/delta-digital-media-microservice/channel/channels`,
            {
                params: {
                    'page': page || 0,
                }
            });
    }

    getFavoriteChannels(page?: number): Observable<IChannelData> {
        return this.httpClient.get<IChannelData>(`${this.baseUrl}/api/delta-digital-media-microservice/favorite/channels`,
            {
                params: {
                    'page': page || 0,
                }
            });
    }


    getChannelById(id: string): Observable<IChannel> {
        return this.httpClient.get<IChannel>(`${this.baseUrl}/api/delta-digital-media-microservice/channel/${id}`);
    }

    getChannelLogo(id: string) {
        return this.httpClient.get<any>(`${this.baseUrl}/api/delta-digital-media-microservice/channel/logo/${id}`);

    }

    addChannelToFavorite(id: string) {
        return this.httpClient.post<any>(`${this.baseUrl}/api/delta-digital-media-microservice/favorite/channel/${id}`, {});
    }
    removeChannelFromFavorite(id: string) {
        return this.httpClient.delete<any>(`${this.baseUrl}/api/delta-digital-media-microservice/favorite/channel/${id}`);
    }


    searchChannelsName(name: string): Observable<IChannelData>{
        return this.httpClient.get<IChannelData>(`${this.baseUrl}/api/delta-digital-media-microservice/channel/search`,
        {
            params: {
                'name': name
            }
        });
    }




}