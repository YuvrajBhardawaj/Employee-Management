import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { TasksComponent } from './components/admin/tasks/tasks.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MytasksComponent } from './components/employee/mytasks/mytasks.component';
import { ProfileComponent } from './components/employee/profile/profile.component';
import { WelcomeComponent } from './components/employee/welcome/welcome.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { AllempComponent } from './components/admin/employees/allemp/allemp.component';
import { EmpTasksComponent } from './components/admin/employees/emp-tasks/emp-tasks.component';
import { AddEmpComponent } from './components/admin/add-emp/add-emp.component';
import { AddTasksComponent } from './components/admin/add-tasks/add-tasks.component';

export const routes: Routes = [
    {
        path:"auth",
        component:SidebarComponent,
        children:[
            {
                path:"admin",
                component:AdminComponent,
                children:[
                    {
                        path:"tasks",
                        component:TasksComponent
                    },
                    {
                        path:"employees",
                        children:[
                            {
                                path:":id",
                                component:EmpTasksComponent
                            },
                            {
                                path:"",
                                component:AllempComponent
                            }
                        ]
                    },
                    {
                        path:"addTask",
                        component:AddTasksComponent
                    },
                    {
                        path:"addEmployees",
                        component:AddEmpComponent
                    },
                    {
                        path:"",
                        component:WelcomeComponent
                    }
                ]
            },
            {
                path:"employee",
                component:EmployeeComponent,
                children:[
                    {
                        path:"tasks",
                        component:MytasksComponent
                    },
                    {
                        path:"profile",
                        component:ProfileComponent
                    },
                    {
                        path:"",
                        component:WelcomeComponent
                    }
                ]
            },
            
        ]
    },
    {
        path:"",
        component:SiginComponent
    }
];