import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api selectedStudentId = '';
    @api student = {
        Name: 'Surahman Sada',
        PhotoUrl: '/services/images/photo/0037i000014EUtBAAW',
        Id: '1'
    };
    // @api isSelected = false;
    // @api get tileSelected() {
    //     return this.isSelected ? 'tile selected' : 'tile';
    // }
    @api get tileSelected() {
        return (this.selectedStudentId===this.student.Id) ? "tile selected" : "tile";
    }
    onStudentClick(){
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
        });
        this.dispatchEvent(evt);
        }

}