
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TestComponent } from './test/test.component';
import {SqlTestComponent} from './sql-test/sql-test.component';

const routes: Routes = 
[
  {path:"jscript_test",component:TestComponent, data: {json_location: "./test_info/jscript_test.json"}},
  {path:"sql_test",component:SqlTestComponent, data:{json_location: "./test_info/sql_test.json"}}
];

@NgModule
(
  {
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule{}

export const RoutingComponent = [TestComponent, SqlTestComponent];

