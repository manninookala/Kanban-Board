import { Component } from '@angular/core';
import { KanbanService } from 'src/app/Service/kanban.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  formGroup: FormGroup;
  addInput = '';

  constructor(private ks: KanbanService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      task: ['', Validators.required],
    });
  }

  addItem() {
    if (this.formGroup?.valid) {
      const task = this.formGroup?.get('task')?.value;
     

      this.ks.pushItem(task);
      this.addInput = '';
    }
  }
}
