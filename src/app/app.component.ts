import { AfterViewInit, Component } from '@angular/core';


declare var flowy: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
	spacing_x = 40;
	spacing_y = 100;

	constructor() { }

	ngAfterViewInit(): void {
		const canvas = document.getElementById("canvas");
		flowy(canvas, this.onGrab, this.onRelease, this.onSnap, this.onRearrange, this.spacing_x, this.spacing_y);		
	}

	onGrab(block: any) {
		console.log('On Grab .....', block);
	}

	onRelease() {
		console.log('On Release .....');
	}

	onSnap(block: any, first: any, parent: any) {
		console.log('On Snap ....', block, first, parent);
		return true;
	}

	onRearrange(block: any, parent: any){
		console.log('On Rearrange ....', block, parent);
		return true;
	}
}
