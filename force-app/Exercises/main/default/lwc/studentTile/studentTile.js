import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api student = {
        Name: 'Surahman Sada',
        PhotoUrl: '/services/images/photo/0037i000014EUtBAAW',
        Id: '1'
    };
    @api isSelected = false;
    @api get tileSelected() {
        return this.isSelected ? 'tile selected' : 'tile';
    }

    onStudentClick(event){
        alert(this.student.Name);
    }

}