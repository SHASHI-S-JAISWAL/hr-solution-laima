import React, { memo } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageParagraph,
} from '../../components/common/commonContainers';
import overviewData from './overviewData';

const AdmissionOverview = memo(() => (
  <PageWrapper>
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      Overview
    </PageTitle>
    {overviewData.map(i => (
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
