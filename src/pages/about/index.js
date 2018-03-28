import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


import VolzbrewAppBar from '../../components/VolzbrewAppBar';

import backgroundImage from '../../imgs/milledGrains.jpg';

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
        maxWidth:'400px',
        margin:'0 auto'
    },
    contentWrap: {
        width: '80vw',
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '24',
       
    },

};

  
export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <MuiThemeProvider theme={theme}>


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>
                    <Grid item xs={12} style={styles.headerGrid}>
                        <Typography variant="display2" style={styles.mainHeaderText}>
                            About
                            </Typography>
                        {/* <Typography variant="headline" style={styles.headerText}>
                        Volzbrew is dedicated to teaching an affordable way to brew at home.
                            </Typography> */}
                        {/* <Typography variant="subheading" style={styles.headerText}>
                        Making good beer cheap
                            </Typography> */}
                    </Grid>

                </Grid>
                <div style={styles.contentWrap}>

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>
                        <Grid item xs={12}>

                            <Typography variant="subheading" gutterBottom>
                                {/* Volzbrew is dedicated to teaching an affordable way to brew at home. */}
                                The Volz Bros have proven:
                                <br />
                                <br />
                                <u>YOU</u> CAN BREW AMAZING BEER!!!
                                <br />
                                <br />
                                We’re just regular guys who make delicious BEER. We want to share with you our unique experiences and home brewing tips to help YOU create your very own home brewed BEER!
                                <br />
                                <br />
                                Our first attempts were huge successes thanks to the advice and support from two of our Uncles (30+ years brewing experience) and we haven’t stopped brewing since. Honestly, the beer you brew can rival and surpass just about anything found in stores.
                                <br />
                                <br />
                                We believe our methods are best for homebrewers just starting out and those looking to have continued success: <b>lots and lots of great home brew!</b>
                                <br />
                                <br />
                                When we decided we were going to brew we discovered that finding good information online was surprisingly difficult. The information is disorganized and the best tips were often found deeply buried in forums. Also, much of the advice was contradictory which lead to more questions. We created this site to provide the most important information, the things we really wanted to know when we were just starting out, conveniently in one location.
                                <br />
                                <br />

                                We hope you enjoy this great hobby and become as passionate about brewing as we are. Don’t worry, brewing beer is simple and pretty forgiving...as long as you are diligent with sanitization.
                                <br />
                                <br />
                                Cheers!
                                <br />
                                <br />
                                Joe Volz, Kevin Volz, and Max Volz
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
