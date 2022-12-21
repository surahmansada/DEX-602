import { LightningElement } from 'lwc';

export default class Challenge_currentDateTime extends LightningElement {

    currentDate = new Date();
	updateDate() {
		this.currentDate = new Date();
	}
	
	
	connectedCallback() {
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		setInterval(() => {
			this.currentDate = new Date();
		}, 1000);
	}
}