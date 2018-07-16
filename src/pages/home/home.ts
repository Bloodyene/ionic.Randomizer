import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService } from "../../services/storage-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  players: string[];
  stagedPlayers: string[] = [];
  playerToAdd: string;
  constructor(public navCtrl: NavController, public storageService: StorageService) {
    this.players = this.storageService.getPlayerList();
  }

 

  addPlayer(){
    this.storageService.addPlayer(this.playerToAdd);
    this.players.push(this.playerToAdd);
    this.playerToAdd = '';
  }

  removePlayer(player: string){
    this.storageService.removePlayer(player);
    this.players = this.players.filter(p => p != player)
  }

  stagePlayer(index: number){
    if (this.stagedPlayers.length < 4) {
      this.stagedPlayers.push(this.players.splice(index ,1)[0]);
    }
  }

  unstagePlayer(index: number){
    this.players.push(this.stagedPlayers.splice(index, 1)[0]);
  }

  randomiseTeams(){
    this.stagedPlayers = this.shuffle(this.stagedPlayers);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}
