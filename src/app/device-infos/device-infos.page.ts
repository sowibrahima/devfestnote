import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;
const { Network } = Plugins;

@Component({
  selector: 'app-device-infos',
  templateUrl: './device-infos.page.html',
  styleUrls: ['./device-infos.page.scss'],
})
export class DeviceInfosPage implements OnInit {

  device:any
  connectionStatus:any  
  constructor() { }

  ngOnInit() {
    this.initDevice(); 
      
  }

  async initDevice(){
    this.device = await Device.getInfo();
    this.connectionStatus = await Network.getStatus();
    console.log(this.connectionStatus)
  }

}
