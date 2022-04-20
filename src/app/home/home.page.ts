import { Component } from '@angular/core';
import { DataService, Detail } from '../services/data.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat;
  lng;
  time;
  keys;
  Places = [];
  display = false;


  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getDetails(): Detail[] {
    return this.data.getDetails();
  }


  setItem(myKey:string, value: string) {
    Storage.set({ key: myKey, value: value }).then(()=>{
      console.log("current location is now saved");
    });
  }

  showPlaces(){
    Storage.keys().then((res) => {
      if(res.keys.length > 0){
        res.keys.forEach(myKey => {
          Storage.get({ key: myKey })
          .then((res) => {
            this.Places.push(res.value)
          });
        });
      }else {
        console.log("No Data")
      }
    });
  }

  getLocation(){  
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      this.time = res.timestamp;
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      let place = `Timestamp: ${this.time} | Latitude: ${this.lat} | Longitude: ${this.lng}`;
      this.Places.push(place);
      this.setItem(this.time, place);
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

  deletePlace(index){
    Storage.keys().then((res) => {
      if(res.keys.length > 0){
        Storage.remove({key: res.keys[index]})
        this.Places.splice(index, 1);
      }else {
        console.log("Location not available")
      }
    });
  }

}
