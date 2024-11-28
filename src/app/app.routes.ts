import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SaleTicketComponent } from './components/sale-ticket/sale-ticket.component';
import { SendNegotiationComponent } from './components/send-negotiation/send-negotiation.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './service/AuthGuard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyTicketsComponent } from './pages/my-tickets/my-tickets.component';

export const routes: Routes = [
    {path: "",redirectTo: "home", pathMatch: "full"},
    {
        path: "home",
        component: LandingPageComponent
    },

    {path:'',canActivate:[AuthGuard], children:[
        {
            path: "sale",
            component: SaleTicketComponent
        },
        {
            path: "negotiation",
            component: SendNegotiationComponent
        },
        {
            path: "my-tickets",
            component: MyTicketsComponent
        },
        {
            path: "tickets",
            component: HomeComponent
        }
    ]},
    {path:'', children:[
        {
                path: "sign-in",
                component: SignInComponent
        },
        {
                path: "sign-up",
                component: SignUpComponent
        }
    ]},
    {
        path:"**", component: PageNotFoundComponent
    }

];
