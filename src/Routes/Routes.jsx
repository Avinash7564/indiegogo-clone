import DonationPage from '../Components/DonationPage';
import HomePage from '../Components/HomePage';
import DonationPayment from '../Components/DonationPayment'
import ThankYou from '../Components/ThankYou'
import {Route, Switch} from "react-router-dom";

import Body from '../Components/jsx/body';
import Campaign from '../Components/Start_a_compaign';
import Aproject from '../Components/A_project';
import Basic from '../Components/CampaignForm';
import { Whatwedo } from '../Components/jsx/WWD';
 

function Routes() {
    return <>
        <Switch>
    <Route path='/' component={HomePage} exact />
    <Route path="/donationpage" component={DonationPage} exact />
    <Route path="/donationpayment" component={DonationPayment} exact />
    <Route path="/thankyou" component={ThankYou} exact />

    <Route path="/forentrepreneurs" component={Body} exact />
    <Route path="/body" component={Body} exact />
    <Route path="/startcampaign" component={Campaign} exact />
    <Route path="/Start_a_compaign" component={Campaign} exact />
    <Route path="/A_project" component={Aproject} exact />
    <Route path="/CampaignForm" component={Basic} exact />
    <Route path="/Whatwedo" component={Whatwedo} exact />
  </Switch> 
        </>
}

export {Routes}