import React, { memo } from 'react';
import {
  PageParagraph,
  PageTitle,
  PageWrapper,
} from '../../components/common/commonContainers';
import aboutPageData from './aboutPageData';

const TeamPage = memo(() => (
  <PageWrapper>
    {aboutPageData.team.map(i => (
      <>
        <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
          {i.name}
        </PageTitle>
        {i.text.map(j => (
          <PageParagraph
            className="MuiTypography--heading"
            variant="h7"
            gutterBottom
          >
            {j}
          </PageParagraph>
        ))}
      </>
    ))}
  </PageWrapper>
));

export default TeamPage;
