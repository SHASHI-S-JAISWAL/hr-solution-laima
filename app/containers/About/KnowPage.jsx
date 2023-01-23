import React, { memo } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageParagraph,
} from '../../components/common/commonContainers';
import aboutPageData from './aboutPageData';

const AdmissionOverview = memo(() => (
  <PageWrapper>
    {/* <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      ABOUT US
    </PageTitle> */}
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      WHAT WE DO
    </PageTitle>
    {aboutPageData.whatWeDo.map(i => (
      <PageParagraph
        className="MuiTypography--heading"
        variant="body3"
        gutterBottom
        style={{ whiteSpace: 'pre-line' }}
      >
        {i}
      </PageParagraph>
    ))}
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      OUR VISION
    </PageTitle>
    {aboutPageData.vision.map(i => (
      <PageParagraph
        className="MuiTypography--heading"
        variant="body3"
        gutterBottom
        style={{ whiteSpace: 'pre-line' }}
      >
        {i}
      </PageParagraph>
    ))}
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      OUR MISSION
    </PageTitle>
    {aboutPageData.mission.map(i => (
      <PageParagraph
        className="MuiTypography--heading"
        variant="body3"
        gutterBottom
        style={{ whiteSpace: 'pre-line' }}
      >
        {i}
      </PageParagraph>
    ))}
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      OUR VALUES
    </PageTitle>
    {aboutPageData.value.map(i => (
      <PageParagraph
        className="MuiTypography--heading"
        variant="body3"
        gutterBottom
        style={{ whiteSpace: 'pre-line' }}
      >
        {i}
      </PageParagraph>
    ))}
  </PageWrapper>
));

export default AdmissionOverview;
