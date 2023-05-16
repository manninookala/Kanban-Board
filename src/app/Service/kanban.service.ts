import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  
  todoCol  = [
    {
      'task': 'Update your resume or LinkedIn profile'
    },
    {
      'task':'Review and respond to emails'
    },
    {
      'task':'Exercise or go for a walk'
  }
]

inProgress = [
  {
    'task':'Plan your upcoming vacation'
  },
  {
    'task':'Research a new topic or technology'
  },
  {
    'task':'Write a new blog post'
  }
]

completed = [
  {
    'task':'Complete an assignment or project'
  },
  {
    'task':'Organize and clean your workspace'
  },
  {
    'task':'Learn a new skill or take an online course'
    }
  ]

  //lists:any;

  constructor() { }

  pushItem(item : string){
    //console.log("Service function is triggered")
    this.todoCol.push({'task' : item});
    //console.log(this.todoCol)
  }



}

