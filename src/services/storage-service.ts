import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class StorageService {
    constructor(){}

    public setPlayerList(players: string[]){
        localStorage.setItem('players', JSON.stringify(players));
    }

    public addPlayer(player: string){
        let players:string[] = [];
        if(localStorage.getItem('players')){
            players = JSON.parse(localStorage.getItem('players'));
        }
        console.log(players)
        players.push(player);
        this.setPlayerList(players);
    }

    removePlayer(player: string){
        if (localStorage.getItem('players')) {
            let players: string[] = JSON.parse(localStorage.getItem('players'));
            players = players.filter(p => p != player)
            this.setPlayerList(players)
        }
    }

    public getPlayerList(){
        return JSON.parse(localStorage.getItem('players'))
    }
}