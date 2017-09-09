import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  droppedItems = [];
  c1_students = [];
  c2_students = [];
  c3_students = [];

  students: Object[] = [
    {id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "June"}, {id: 4, name: "Jacob"},
    {id: "5", name: "Joey"}, {id: "6", name: "Johnny"}, {id: "7", name: "Jade"}, {id: "8", name: "Jason"},
    {id: "9", name: "Jessica"}, {id: "10", name: "Jamie"}, {id: "11", name: "Jorah"}, {id: "12", name: "Jocelyn"}, {id: "13", name: "Jacob"}, {id: "14", name: "Jake"}];


  constructor() { 
    console.log("Professor component called")
  }

  ngOnInit() {
  }


  onItemDrop(event: any, courseNo: number) {
    this.droppedItems.push(event.dragData);

    switch(courseNo){

      case 1:
      case 2:
      case 3:
        if(this.c3_students.indexOf(event.dragData) === -1)
          this.c3_students.push(event.dragData);
        break;
    }
    return event.dragData;
  }

  getColor(student:any) {

    if(this.droppedItems.indexOf(student) > -1) {
      return 'grey';
    }

    return 'white';
  }

  isAvailable(student:any){

    if(this.droppedItems.hasOwnProperty(student.id))
      return 'false';

    return 'true';
  }

  removeTA(student:any, courseNo: number){

    let index: number;

    switch(courseNo){

      case 1:
      case 2:
      case 3:
        index = this.c3_students.indexOf(student);
        if (index > -1){
          this.c3_students.splice(index, 1);
          this.droppedItems.splice(this.droppedItems.indexOf(student), 1)
        }

        break;
    }

    console.log("After removal: " + JSON.stringify(this.c3_students));
    console.log("Dropped items: " + JSON.stringify(this.droppedItems));
  }

}
