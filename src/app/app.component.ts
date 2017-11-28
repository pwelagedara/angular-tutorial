import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger("myAnimation", [

  		state("inactive", style({
  			backgroundColor: "#eee"
  		})
  		),

  		state("active", style({
  			backgroundColor: "#ffcc00"
  		})
  		),

  		transition("active => inactive", // use <=> for applying animation in both ways
  			animate("2000ms ease-in")
  		),

  		transition("inactive => active",
  			animate("2000ms ease-in")
  		)
  	]
  	),

  	trigger("myAnimation2", [

  		state("inactive", style({
  			backgroundColor: "#eee"
  		})
  		),

  		state("active", style({
  			backgroundColor: "#ffcc00"
  		})
  		),

  		transition("active <=> inactive",[
  			style({
  				transform: "translateX(40px)"
  			}),
  			animate("2000ms ease-in")
  		]
  		)

  	]
  	)

  ]
})

export class AppComponent {

  someProperty;
  
  constructor(private dataService:DataService) {
     this.someProperty = dataService.myData();
  }

  title = 'app';

  myFunction(count) {
  	console.log(count.value);
  }

  alertStatus(status) {
  	if (status == "danger") {
  		return true;
  	}
  }

  property1 = true;
  property2 = true;
  property3 = false;

  myClasses  = {
  	danger: this.property1,
  	safe: this.property2,
  	changed: this.property3
  };

  myStyles = {
  	'color': 'green',
  	'font-weight': 'bold'
  }

  myWeight = "bold";


  myWeightBoolean = false;

  logoUrl = "https://content.linkedin.com/content/dam/brand/site/img/logo/logo-tm.png";

  buttonState = true;

  toggleLogo(event) {
  	console.log("I got clicked");
  	console.log(event);
  }

  buttonState2 = true;
  toggleLogo2() {
  	this.buttonState2 = this.buttonState2? false: true;
  }


  typed: string = "";

  keyPress (event) {
  	this.typed = event;
  }

  typed2: string = "";

  keyPress2 (event) {
  	this.typed2 = event;
  }

  animationState = "inactive";

  animate() {
  	this.animationState = (this.animationState === "inactive")? "active": "inactive";
  }

  animationState2 = "inactive";

  animate2() {
  	this.animationState2 = (this.animationState2 === "inactive")? "active": "inactive";
  }
}
