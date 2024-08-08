import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image='/images/space_force_command.jpeg' title='Space Force Command Ceremony' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Space Force Ceremony
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 7,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          U.S. Space Force Col. Jack D. Fulmer II, outgoing Space Delta 10 commander, delivers remarks during the Delta
          10 change of command at Patrick Space Force Base, Florida, Aug. 7, 2024.
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
    </Card>
  )
}
