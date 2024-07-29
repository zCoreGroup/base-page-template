import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, X, Instagram, YouTube } from '@mui/icons-material';
import { FooterData } from "@/types";
import { content, contentTitle, footerContentStyle } from './style';

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  const informationText = data.informationText.split("\n");

  return (
    <Box sx={footerContentStyle}>
      <Grid container spacing={4} direction="row" justifyContent="center" alignItems="flex-start">

        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-start" height="100%">
            <Typography variant="h6" gutterBottom sx={contentTitle}>
              Locations
            </Typography>
            <Typography flexGrow={1} sx={content}>
              {data.streetAddress}
            </Typography>
            <br></br>
            <Typography flexGrow={1} sx={content}>
              {data.city}
            </Typography>
            <Typography flexGrow={1} sx={content}>
              {data.state}
            </Typography>
            <Typography flexGrow={1} sx={content}>
              {data.zip}
            </Typography>
            <Link href={`tel:${data.phone}`} color="inherit" underline="none">
              <Typography flexGrow={1} sx={content}>{data.phone}</Typography>
            </Link>
            <Link href={`mailto:${data.email}`} color="inherit" underline="none">
              <Typography flexGrow={1} sx={content}>{data.email}</Typography>
            </Link>
            <Typography variant="h6" gutterBottom sx={contentTitle}>
              {data.informationTitle}
            </Typography>
            {informationText.map((text) => (
              <Typography key={text} sx={content}>
                {text}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-start" height="100%">
            <Typography variant="h6" gutterBottom sx={contentTitle}>
              Get Connected
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link href={data.linkFB} target="_blank" color="inherit">
                <Facebook />
              </Link>
              <Link href={data.linkX} target="_blank" color="inherit">
                <X />
              </Link>
              <Link href={data.linkIG} target="_blank" color="inherit">
                <Instagram />
              </Link>
              <Link href={data.linkYT} target="_blank" color="inherit">
                <YouTube />
              </Link>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Footer;