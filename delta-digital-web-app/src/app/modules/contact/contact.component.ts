import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  contactGroup: FormGroup;
  private unsubscribe$ = new Subject<void>();

  private map: L.Map;
  private coord: L.LatLngExpression = [40.19997139643391, 44.498658829421785]; // Yerevan Hrachya Qochar poxoc

  private initMap(): void {
    this.map = L.map('map', {
      center: this.coord,
      zoom: 16
    });
    const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 18,
      minZoom: 10
    });

   let myIcon = L.divIcon({
      className: 'custom-div-icon',
            html: "<div style='background-color:#dc3545;'></div> <i class='fas fa-map-marker-alt'></i>",
            iconSize: [1000, 1000],
            iconAnchor: [15, 42]
        });

    L.marker(this.coord, { icon: myIcon }).addTo(this.map);


    tiles.addTo(this.map);

  }



  constructor(
    private fb: FormBuilder,
    private mainService: MainService) {
    this.contactGroup = this.fb.group({
      appEmail: ['', Validators.required],
      appPhone: [''],
      description: ['', Validators.required],
      facebook: [''],
      instagram: [''],
      title: ['', Validators.required],
      twitter: [''],
      whatsApp: ['']
    });
  }

  ngOnInit(): void {
    this.initMap();


  }


  contact() {
    const msg = {
      appEmail: "shogh.dav@gmail.com",
      appPhone: "",
      description: "harcer",
      facebook: "",
      instagram: "",
      title: "Harc",
      twitter: "",
      whatsApp: ""
    }
    this.mainService.contactUs(msg).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }



}
