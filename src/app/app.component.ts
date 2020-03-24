import { Component } from '@angular/core';
import { ModuleService } from './module.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  Name = 'Judith Cambridge';

  Modules = [{
    'Name': 'Module 1',
    'Tasks': [{ 'TaskName': 'Task 1' },
      { 'TaskName': 'Task 2' }],
    'Title': 'Get to know your dairy farm business'
  }];

    Module = new ModuleService().getData2();


}
