/**
 *
 * App
 *
 * This component is the skeleton xparound the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/footer copy/Footer';

import GlobalStyle from '../../global-styles';
import WhyPage from '../whyPage';
// import ContactPage from '../contactPage';
import OverViewPage from '../admissionOverView';
import { KnowPage, VisionMissionPage, LogoPage } from '../About';
import EnquiryPage from '../About/Enquiry';
import TeamPage from '../About/TeamPage';
import FoundersPage from '../About/FoundersPage';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Laima HR Solutions"
        defaultTitle="Laima HR Solutions"
      >
        <meta name="description" content="Laima HR Solutions" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={KnowPage} />
        <Route exact path="/about/logo" component={LogoPage} />
        <Route exact path="/about/team" component={TeamPage} />
        <Route exact path="/about/founders" component={FoundersPage} />
        <Route
          exact
          path="/about/vision-and-missions"
          component={VisionMissionPage}
        />
        {/* <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={HomePage} /> */}
        <Route path="/enquiry" component={EnquiryPage} />
        <Route path="/about/enquiry" component={EnquiryPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/why-bishop-scott" component={WhyPage} />
        <Route path="/contact" component={EnquiryPage} />
        <Route path="/admissions/overview" component={OverViewPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
