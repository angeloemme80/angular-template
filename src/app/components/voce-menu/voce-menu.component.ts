import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voce-menu',
  templateUrl: './voce-menu.component.html',
  styleUrls: ['./voce-menu.component.scss']
})
export class VoceMenuComponent implements OnInit{

  @Input()
  testo:any;


  constructor(private router: Router){
    console.log('DENTRO costruttore');
    
  }

  ngOnInit(){
    console.log('DENTRO ngOnInit', this.testo.voce);
  }

  btnClick (valore:string) {
    //alert(valore);
    let urlDaNavigare: string;
    (valore==='Scegli') ? urlDaNavigare = "ricorso-scegli" : urlDaNavigare = "provvedimento-apri";
    this.router.navigateByUrl(urlDaNavigare);
  };

}