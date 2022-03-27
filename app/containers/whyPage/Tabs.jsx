import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabData from './tabsData';
import { MessageListLine, MessageList, MessageBox } from './internals';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <MessageList
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        backgroundColor: '#ffd580',
        borderRadius: '12px',
      }}
    >
      {value === index && <MessageBox sx={{ p: 3 }}>{children}</MessageBox>}
    </MessageList>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', margin: '0 20px', alignSelf: 'center' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          // display: 'flex',
          // flexDirection: 'row',
          // justifyContent: 'space-between',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="why bishop scott"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabData.map((t, index) => (
            <Tab
              label={t.Title}
              {...a11yProps(index)}
              key={t.Title}
              style={{ fontWeight: 700, marginRight: '20px' }}
            />
          ))}
        </Tabs>
      </Box>
      {tabData.map((t, index) => (
        <TabPanel value={value} index={index} key={`${t.Title}-panel`}>
          {t.messages.map(m => (
            <MessageListLine>{m}</MessageListLine>
          ))}
        </TabPanel>
      ))}
    </Box>
  );
}
