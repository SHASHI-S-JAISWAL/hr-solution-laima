import React, { memo } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageParagraph,
  LogoImg,
} from '../../components/common/commonContainers';
import aboutPageData from './aboutPageData';
import Logo from '../../assets/logo.jpeg';

const AdmissionOverview = memo(() => (
  <PageWrapper>
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      LOGO
    </PageTitle>
    <LogoImg src={Logo} />
    {/* {aboutPageData.knowBishopScott.map(i => ( */}
    <PageParagraph className="MuiTypography--heading" variant="h7" gutterBottom>
      {aboutPageData.logo}
    </PageParagraph>
    {/* ))} */}
  </PageWrapper>
));

export default AdmissionOverview;
