import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier-graphique',
  templateUrl: './mon-premier-graphique.component.html',
  styleUrls: ['./mon-premier-graphique.component.css']
})
export class MonPremierGraphiqueComponent implements OnInit {
  public mongraphique = {
    type : 'bar',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public mesdonnees = {
    etiquettes : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    data : [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Série B' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
