import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

export default function EventCard() {
  return (
    <Card sx={{ display: 'flex', maxWidth: 600, height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={6} sx={{ height: '100%' }}>
          <CardMedia
            component='img'
            sx={{ height: '100%', objectFit: 'cover' }}
            image='/images/space_force_fly_over.jpeg'
            title='Space Force Fly Over Event'
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant='h5' component='div'>
              U.S. Air Force Ceremony
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 4, // Limit to 3 lines
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              MC-130 Commando aircraft fly over the U.S. Air Force Academy Assumption of Command ceremony held at the
              Academy, Colo., Aug. 2, 2024. Lt. Gen. Tony Bauernfeind, previously U.S. Air Force Special Operations
              Command’s top general and a command pilot with thousands of hours in the MC-130, became the 22nd Academy
              superintendent during the ceremony. (U.S. Air Force photo by Trevor Cokley)
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'start' }}>
            <Button
              sx={{
                padding: 0,
                maxWidth: 'fit-content',
                maxHeight: 'fit-content',
              }}
            >
              Share
            </Button>
            <IconButton aria-label={'learn-more-button'}>
              <ArrowForward />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
