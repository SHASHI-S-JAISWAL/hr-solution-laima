import React, { memo } from 'react';
import { PageWrapper } from '../../components/common/commonContainers';

const EnquiryPage = memo(() => (
  <PageWrapper>
    {/* <PageTitle className="MuiTypography--heading" variant="h4" gutterBottom>
      LOGO
    </PageTitle> */}
    <div>
      <iframe
        src="https://app.formbot.com/forms/46436c35-f348-46ae-8005-72035fe23146"
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
