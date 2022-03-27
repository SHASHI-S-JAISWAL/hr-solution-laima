import React, { memo } from 'react';
import { PageWrapper } from '../../components/common/commonContainers';
import ContactCard from './ContactCard';
import contactData from './contactData';
import { CardContainer } from './internals';

const WhyPage = memo(() => (
  <PageWrapper>
    <CardContainer>
      {contactData.map(contact => (
        <ContactCard data={contact} key={contact.Title} />
      ))}
    </CardContainer>
  </PageWrapper>
));

export default WhyPage;
