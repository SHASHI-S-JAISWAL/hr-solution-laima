import React, { memo } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageParagraph,
} from '../../components/common/commonContainers';
import aboutPageData from './aboutPageData';
import { MissionList, MessageListLine } from './internals';

const VisionMissionPage = memo(() => (
  <PageWrapper>
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      VISION
    </PageTitle>
    {aboutPageData.vision.map(i => (
      <PageParagraph
        className="MuiTypography--heading"
        variant="h7"
        gutterBottom
      >
        {i}
      </PageParagraph>
    ))}
    <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      MISSIONS
    </PageTitle>
    <MissionList>
      {aboutPageData.missions.map(i => (
        <MessageListLine
          className="MuiTypography--heading"
          variant="h7"
          gutterBottom
        >
          {i}
        </MessageListLine>
      ))}
    </MissionList>
  </PageWrapper>
));

export default VisionMissionPage;
