import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})
export class ProfessorComponent implements OnInit {

  droppedItems = [];

  courses = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[]};
  courseKeys = Object.keys(this.courses);

  students: any;
  profCourses: any;

  constructor(private dataService: DataService) { 
    dataService.getStudents().subscribe(x => {this.students = x});
    dataService.getProfCourses().subscribe(x => {this.profCourses = x});
  }

  ngOnInit() {}

  onItemDrop(event: any, courseNo: number) {
    this.droppedItems.push(event.dragData);
    this.courses[courseNo].push(event.dragData);
    return event.dragData;
  }

  getColor(student:any) {
    if(this.droppedItems.indexOf(student) > -1) 
      return 'grey';
    return 'white';
  }

  isAvailable(student:any){
    if(this.droppedItems.indexOf(student) > -1){
      console.log(student.name + ": " + "false");
      return false;
    }
    return true;
  }

  removeTA(student:any, courseNo: number){
   this.courses[courseNo].splice(this.courses[courseNo].indexOf(student), 1);
    this.droppedItems.splice(this.droppedItems.indexOf(student), 1)
  }

  getTAs(courseNo: number){
    return this.courses[courseNo];
  }
}
