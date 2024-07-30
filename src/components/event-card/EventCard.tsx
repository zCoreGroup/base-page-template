import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material'

export default function EventCard() {
  return (
    <Card sx={{ display: 'flex', maxWidth: 600 }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component='img'
            sx={{ height: '100%', objectFit: 'cover' }}
            image='/images/lizard.jpg'
            title='green iguana'
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
