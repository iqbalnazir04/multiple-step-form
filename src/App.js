import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import image1 from './images/iqbal.jpeg'
import image2 from './images/shoaib.JPG'
import image3 from './images/imran.jpeg'
import image4 from './images/iftikhar.jpg'
import image5 from './images/iqball.jpeg'
import image6 from './images/shoaib2.JPG'
import Memories from './memories'
import Footer from './footer'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './socialIcons.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "darkcyan",
    color: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + "/images/background.JPG"})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },

  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  Box: {

    fontSize: "0.7rem"
  },
  social: {
    margin: "0 1rem"
  },
  heading: {
    textAlign: "center",
    fontSize: "2.3rem"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" >
            Friends
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box className={classes.heading}>FRIENDS FOR EVER</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          List of Friends
        </Typography><hr />
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mirza Iqbal
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hey this is Mirza Iqbal, i'm an Electrical Engineer and a Web Developer. I done by B.Tech from Baba Ghulam Shah Badshah University located at Rajouri in Jammu and Kashmir.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={image5} />
                  <Box ml={2} className={classes.Box}>
                    <Typography variant="subtitle2" component="p">
                      Mirza Iqbal
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      DOB: July 10, 1996
                    </Typography>
                    <div className="social-container">
                      <a
                        href="https://www.facebook.com/prince.sultan.7509836/"
                        className="facebook social"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>

                      <a
                        href="https://www.instagram.com/mirza.iqbal_/"
                        className="instagram social"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
                  </Box>
                </Box>

              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Shoaib Mir
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hey, this is Shoaib Mir, i'm an Electrical Engineer and a Web Developer. I done by B.Tech from Baba Ghulam Shah Badshah University located at Rajouri in Jammu And Kashmir.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={image6} />
                  <Box ml={2} className={classes.Box}>
                    <Typography variant="subtitle2" component="p">
                      Shoaib Mir
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      DOB: Feb 17, 1998
                    </Typography>
                    <div className="social-container">


                      <a
                        href="https://www.facebook.com/shoaibmircom"
                        className="facebook social"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>

                      <a
                        href="https://www.instagram.com/shoaibmircom/"
                        className="instagram social"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
                  </Box>
                </Box>

              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mohd Imran Tantray
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hey, this is Mohd Imran Tantray, i'm an Electronics Engineer. I done by B.Tech from Baba Ghulam Shah Badshah University located at Rajouri in Jammu and Kashmir.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={image3} />
                  <Box ml={2} className={classes.Box}>
                    <Typography variant="subtitle2" component="p">
                      Mohd Imran
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      DOB: July 10, 1998
                    </Typography>
                    <div className="social-container">


                      <a
                        href="https://www.facebook.com/prince.sultan.7509836/"
                        className="facebook social"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>

                      <a
                        href="https://www.instagram.com/mirza.iqbal_/"
                        className="instagram social"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
                  </Box>
                </Box>

              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image4}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Iftikhar Hussain
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hey, this is Iftikhar Hussain, i'm an Electrical Engineer and a Blogger. I done by B.Tech from Baba Ghulam Shah Badshah University located at Rajouri in Jammu and Kashmir.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={image4} />
                  <Box ml={2} className={classes.Box}>
                    <Typography variant="subtitle2" component="p">
                      Iftikhar Hussain
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      DOB: Mar 01, 1996
                    </Typography>
                    <div className="social-container">


                      <a
                        href="https://www.facebook.com/profile.php?id=100021717828450"
                        className="facebook social"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>

                      <a
                        href="https://www.instagram.com/iftikhar_hussain13/"
                        className="instagram social"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
                  </Box>
                </Box>

              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Memories />

      <Footer />
    </div>
  );
}

export default App;
