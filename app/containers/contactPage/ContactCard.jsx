import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const styles = muiBaseTheme => ({
  card: {
    minWidth: 340,
    maxWidth: 340,
    // margin: 20,
    margin: 'auto',
    marginBottom: 30,
    borderRadius: 12,
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  mobileCard: {
    maxWidth: 340,
    // margin: 20,
    margin: 30,
    marginBottom: 30,
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    // paddingTop: '56.25%',
    maxWidth: '100%',
    height: 120,
  },
  content: {
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: 600,
  },
  subheading: {
    lineHeight: 1.8,
    display: 'block',
  },
});

ContactCard.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.any,
};

function ContactCard(props) {
  const { classes, data } = props;
  const { title, address, phoneNo, mapLink, image } = data;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography
          className="MuiTypography--heading"
          variant="h4"
          gutterBottom
        >
          {title}
        </Typography>
        <CardMedia className={classes.media} image={image} />
        <Typography
          className="MuiTypography--subheading"
          variant="h7"
          gutterBottom
          // variant="caption"
          style={{ display: 'block' }}
        >
          <Typography className={classes.heading} style={{ display: 'inline' }}>
            Address -{' '}
          </Typography>
          {address}
        </Typography>
        <Typography
          className="MuiTypography--subheading"
          variant="h7"
          gutterBottom
          // variant="caption"
          style={{ display: 'block' }}
        >
          <Typography className={classes.heading} style={{ display: 'inline' }}>
            Contact no -{' '}
          </Typography>
          {phoneNo}
        </Typography>

        <Typography
          className="MuiTypography--subheading"
          variant="h7"
          gutterBottom
          // variant="caption"
          style={{ display: 'block' }}
        >
          <Typography className={classes.heading} style={{ display: 'inline' }}>
            <a href={mapLink}>Driving Direction</a>
          </Typography>
        </Typography>
        {/* <Divider className={classes.divider} light /> */}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(ContactCard);
