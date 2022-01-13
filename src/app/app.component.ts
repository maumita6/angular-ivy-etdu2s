import { Component, OnInit, VERSION } from '@angular/core';
import { FormFields, Config } from './fields';
import { DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formFields: FormFields = {} as FormFields;

  name = 'Angular - Trigger change from Parent to child input';
  pValue = 'Default value from parent';
  config;
  prop;
  constructor(public dataService: DataService) {}
  ngOnInit(): void {
    this.formFields.InpText = '';
  }

  updateChild() {
    let parentValue = this.formFields.InpText;
    this.pValue = parentValue;
    console.log(parentValue);
  }

  // showConfig() {
  //   this.dataService.getConfig().subscribe(
  //     (data) =>
  //       (this.config = {
  //         heroesUrl: data.title,
  //       })
  //   );
  // }
  // showConfig() {
  //   // this.dataService.getConfig()
  //   //   .subscribe((data: Config) => this.config = {
  //   //       title: data.title,
  //   //       id:  data.id,
  //   //       completeddate: data.completed,
  //   //   });

  // }
  showConfig() {
    this.dataService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }
}
