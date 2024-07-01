import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SaleTicketComponent } from './components/sale-ticket/sale-ticket.component';
import { SendNegotiationComponent } from './components/send-negotiation/send-negotiation.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: "tickets",
        component: HomeComponent
    },
    {
        path: "",
        component: LandingPageComponent
    },
    {
        path: "sign-in",
        component: SignInComponent
    },
    {
        path: "sign-up",
        component: SignUpComponent
    },
    {
        path: "sale",
        component: SaleTicketComponent
    },
    {
        path: "negotiation",
        component: SendNegotiationComponent
    }




];
