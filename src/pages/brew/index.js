import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import List, { ListItem, ListItemText } from 'material-ui/List';

import VolzbrewAppBar from '../../components/VolzbrewAppBar';

import backgroundImage from '../../imgs/milledGrains.jpg';

import logoSVG from '../../imgs/logoW.svg';

const styles = {
    headerGrid: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '340px'
    },
    mainHeaderText: {
        paddingTop: '140px',
        textAlign: 'center',
        color: 'white'
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        maxWidth: '400px',
        margin: '0 auto'
    },
    contentWrap: {
        width: '80vw',
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '24',

    },
    logoContainer: {
        paddingTop: 60,
        textAlign: 'center'
    },
    logoSVG: {
        width: '100%',
        maxWidth: '637px'
    },

};


export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <MuiThemeProvider theme={theme}>


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>
                    <Grid item xs={12} style={styles.headerGrid}>
                        {/* FishY test adding in logo.
                        <div style={styles.logoContainer} ><img style={styles.logoSVG} src={`${logoSVG}`} /></div> */}

                        <Typography variant="display2" style={styles.mainHeaderText}>
                            Homebrewing Basics
                            </Typography>
                        <Typography variant="headline" style={styles.headerText}>
                            Brewing Made Simple
                            </Typography>
                        {/* <Typography variant="subheading" style={styles.headerText}>
                        Making good beer cheap
                            </Typography> */}
                    </Grid>

                </Grid>
                <div className="contentWrap86">
                    <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>
                        <Grid item xs={2} style={{backgroundColor:'white',height:'100%'}}>

                            <List component="nav">
                                <ListItem button>
                                    <ListItemText primary="Overview" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="1. Make Wort" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="2. The Boil" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="3. Cooling the Wort and Pitching the Yeast" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="4. Fermentation" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="5. Carbonation" />
                                </ListItem>
                            </List>

                        </Grid>
                        <Grid item xs={4}>
                        <Typography variant="subheading" gutterBottom>
                                        {/* Volzbrew is dedicated to teaching an affordable way to brew at home. */}
                                        Homebrewing is NOT hard.
                                        <br />
                                        <br />
                                        Only four ingredients are needed to make beer: <b>water, grain, hops, and yeast.</b>
                                        <br />
                                        <br />
                                        Brewers combine these ingredients in countless ways to brew their favorite beers and create their own recipes.
                                        <br />
                                        <br />
                                        <i> Volz Brew Tip: Having the right brewing equipment makes homebrewing easier and much more enjoyable. Good, durable equipment doesn’t cost a fortune! Check out what we use: <a href="#" style={{textDecoration:'underline solid blue'}}>Brewing Equipment</a></i>
                                        <br />
                                        <br />
                                        There are 5 main steps in the brewing process:
                                        <ol>
                                            <li>Make Wort</li>
                                            <li>The Boil</li>
                                            <li>Cooling the Wort and Pitching the Yeast</li>
                                            <li>Fermentation</li>
                                            <li> Carbonation</li>
                                        </ol>

                            <b>Step 1: Make Wort</b>
                            <br />
                                    <br />
                
                                    <b>Wort</b> is unfermented beer - a mixture of water and sugar that’s been extracted from grains which ultimately serves as food for the yeast to consume and create <b>alcohol</b>.
                            <br />
                                    <br />
                                    Homebrewers typically make wort in one of two ways: combining <b>malt</b> extract with water, or steeping milled grains to extract their sugars (sort of like making tea).
                            <br />
                                    <br />
                                    <b><i>Extract Brewing</i></b>: Add liquid or dry malt extract to heated water
                                    <br />
                                    <b><i>All Grain Brewing</i></b>: Add crushed (milled), malted grains to water, heated to ~155 degrees and left to , to
                                    activate enzymes in the grain which help convert the starch in the grain into simple sugars for the yeast to eat.
                                    </Typography>
                        </Grid>
                        <Grid item xs={6}></Grid>
                    </Grid>
                    </div>

                    {/* <div className="contentWrapFullWidth">
                        <Typography variant="display1" gutterBottom >
                            Step 1: Make Wort
                        </Typography>
                    </div> */}
                    <div style={styles.contentWrap}>

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>
                            <Grid item xs={12}>

                                <Typography variant="subheading" gutterBottom>
                                    
                        </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={styles.contentWrap}>

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Link to="/brewingProcess">

                                    <Button variant="raised">
                                        The Brewing Process
    
                            </Button>
                                </Link>

                            </Grid>
                        </Grid>


                    </div>
                    
            </MuiThemeProvider>

        );
    }
}
