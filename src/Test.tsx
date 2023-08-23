import {
  Button,
  AppBar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Toolbar,
  Box,
  Container,
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { FC } from 'react'
import { FiCamera } from 'react-icons/fi'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
})

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Test: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <FiCamera />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ paddingBottom: 8, paddingTop: 8 }} maxWidth="xl">
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea>
                    <CardMedia
                      component="div"
                      sx={{ paddingTop: '100%' }}
                      image={`https://source.unsplash.com/random/500×500/?electric-guitar&a=${Math.random()}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h5">
                        PRS SE Custom 24
                      </Typography>
                      <Typography variant="h4" component="h2">
                        €510
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
