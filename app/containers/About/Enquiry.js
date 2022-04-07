import React, { memo } from 'react';
import { PageWrapper } from '../../components/common/commonContainers';

const EnquiryPage = memo(() => (
  <PageWrapper>
    {/* <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      LOGO
    </PageTitle> */}
    <div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSegwO7U08mF2AGs6N6kINwuhDxusXrtWMWlJFs_KIF45BxzuA/viewform?embedded=true"
        width="100%"
        height="800px"
        frameBorder="0"
        title="Enquiry"
      >
        Loading…
      </iframe>
    </div>
  </PageWrapper>
));

export default EnquiryPage;
