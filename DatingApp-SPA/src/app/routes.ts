import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthSkipTestsGuard } from './_guards/auth--skip-tests.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    { path: '' , component: HomeComponent},
    // { path: 'members' , component: MemberListComponent},

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthSkipTestsGuard],
        children: [
            { path: 'members' , component: MemberListComponent,
                resolve: {users: MemberListResolver}},
            { path: 'members/:id' , component: MemberDetailComponent, 
                resolve: {user: MemberDetailResolver}},
            { path: 'messages' , component: MessagesComponent},
            { path: 'lists' , component: ListsComponent},


        ]
    },
    
    { path: '**' , redirectTo: '', pathMatch: 'full'},
];
