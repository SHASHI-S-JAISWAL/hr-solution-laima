import React, { memo } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageParagraph,
} from '../../components/common/commonContainers';
import aboutPageData from './aboutPageData';

const AdmissionOverview = memo(() => (
  <PageWrapper>
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      ABOUT US
    </PageTitle>
    {aboutPageData.knowBishopScott.map(i => (
      <PageParagraph
        className="MuiTypography--heading"
        variant="h7"
        gutterBottom
      >
        {i}
      </PageParagraph>
    ))}
  </PageWrapper>
));

export default AdmissionOverview;
