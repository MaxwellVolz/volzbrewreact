import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import 'typeface-roboto';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


import VolzbrewAppBar from '../../components/VolzbrewAppBar'

import backgroundImage from '../../imgs/milledGrains.jpg';
import mash from '../../imgs/mash1.jpg';
import brewpot from '../../imgs/brewPot1.jpg';
import brewbros from '../../imgs/brewBros1.jpg';


import logoSVG from '../../imgs/logoW.svg';


const styles = {
    headerGrid: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '660px'
    },
    mainHeaderText: {
        textAlign: 'center',
        color: 'white'
    },
    logoContainer: {
        paddingTop: 180,
        textAlign: 'center'
    },
    logoSVG: {
        width: '100%',
        maxWidth: '637px'
    },
    headerText: {
        textAlign: 'center',
        color: 'white'
    },
    contentWrapSkinny: {
        width: '60vw',
        margin: '0 auto',
        maxWidth: '100vw',
        minWidth: '320px',
        padding: 24,
    },
    paper: {
        // height: 140,
        // width: 100,
        // padding:14,

    },
    paperNumber: {
        width: '15%',
        color: '#a4c7e4',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '700',
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    paperText: {
        width: '85%',
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '700',
        display: 'table-cell',
        padding: '12px',
        verticalAlign: 'middle'
    },
    card: {
        maxWidth: 345,
        margin: 'auto'
    },
    cardImg1: {
        backgroundImage: `url(${mash})`,
        height: 200,
    },
    cardImg2: {
        backgroundImage: `url(${brewpot})`,
        height: 200,
    },
    cardImg3: {
        backgroundImage: `url(${brewbros})`,
        height: 200,
    },



};


export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <MuiThemeProvider theme={theme}>


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>

                    <Grid item xs={12} style={styles.headerGrid}>
                        <div style={styles.logoContainer} >
                        </div>

                        {/* <Typography variant="display2" style={styles.mainHeaderText}>Volzbrew</Typography> */}
                        <Typography variant="title" style={styles.headerText}>
                            <br />
                            We want to help you brew great beer.
                        </Typography>

                        {/* <Typography variant="subheading" style={styles.headerText}>
                        Making good beer cheap
                            </Typography> */}
                    </Grid>

                </Grid>

                {/* <div className="contentWrap">
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Button variant="raised" >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </div> */}

                <div className="contentWrap">

                    <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>
                        
                        <Grid item xs={12}>
                            <Typography variant="headline" component="h2">
                                We want to help you brew great beer.
                            </Typography>
                            <Typography variant="subheading">

                                Our goal is to provide the best home brewing information conveniently organized in one place. From basic information like starting with equipment that will last and allow you to advance, to saving you time and money, and sparing you headaches.
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>
                                <Card style={styles.card}>
                                    <CardMedia
                                        style={styles.cardImg1}
                                        title="Homebrewing Basics"
                                        src="placeholderSRC"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            How to Brew
                                        </Typography>
                                        <Typography component="p">
                                            Everything you need to know to get started.
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>
                                <Card style={styles.card}>
                                    <CardMedia
                                        style={styles.cardImg2}
                                        title="Equipment"
                                        src="placeholderSRC"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Brewing Equipment
                                        </Typography>
                                        <Typography component="p">
                                            The tools we have, use, and recommend.
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>
                                <Card style={styles.card}>
                                    <CardMedia
                                        style={styles.cardImg3}
                                        title="$$"
                                        src="placeholderSRC"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Cost of Brewing
                                        </Typography>
                                        <Typography component="p">
                                            How much does brewing cost?
                                            <br />
                                            Is it worth it?
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>



                </div>

                <div className="contentWrap">

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Link to="/brewingProcess">

                                <Button variant="raised">
                                    Start Here

                                </Button>
                            </Link>

                        </Grid>
                    </Grid>

                </div>

                <div className="contentWrap">
                    <Grid container spacing={8} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Paper style={styles.paper}>
                                <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                    <span style={styles.paperNumber}>1</span>
                                    <Typography variant="display3" style={styles.paperText}>
                                        The Process
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>

                            <Paper style={styles.paper}>
                                <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                    <span style={styles.paperNumber}>2</span>
                                    <Typography variant="display3" style={styles.paperText}>
                                        Brewing Equipment
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>

                            <Paper style={styles.paper}>
                                <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                    <span style={styles.paperNumber}>3</span>
                                    <Typography variant="display3" style={styles.paperText}>
                                        Costs of Brewing
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Paper style={styles.paper}>
                                <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                    <span style={styles.paperNumber}>4</span>
                                    <Typography variant="display3" style={styles.paperText}>
                                        Sanitation Guide
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Paper style={styles.paper}>
                                <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                    <span style={styles.paperNumber}>5</span>
                                    <Typography variant="display3" style={styles.paperText}>
                                        Yeast Starter
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Paper style={styles.paper}>
                                <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                    <span style={styles.paperNumber}>6</span>
                                    <Typography variant="display3" style={styles.paperText}>
                                        Clarification Class
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>

                    </Grid>
                </div>

                <div className="contentWrap">
                    <Grid container spacing={40} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>

                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="display1" gutterBottom style={{ textAlign: 'center', margin: '40px 0' }}>
                                FAQ
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="title" gutterBottom>
                                Who We Are
                        </Typography>
                            <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                We're just regular guys who make delicious BEER. Our first attempts were huge successes thanks to the tips and support from our Uncles (30+ years of brewing experience) and we want to share what we know.
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="title" gutterBottom>
                                What We Do
                        </Typography>
                            <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                We make homebrew for ourselves and to share with friends and family. Some of our biggest endeavours include catering beer for a wedding with nearly 200 guests!
                        </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div className="contentWrap">


                    <Grid container spacing={40} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>

                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="display1" gutterBottom style={{ textAlign: 'center', margin: '40px 0' }}>
                                Display1
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="title" gutterBottom>
                                Home Brewing: The Basics
                            </Typography>
                            <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                An intro to all things home brew. From small single batches to brewing for a wedding. We cover the basics so you can get up to speed in no time!
                            </Typography>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <Button variant="raised" style={{ margin: '20px 0', textAlign: 'center' }}>
                                    First brew day
                            </Button>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="title" gutterBottom>
                                Cost of Home Brewing
                            </Typography>
                            <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                How much does home brewing cost? Is home brewing worth it? How can I save money? We answer these questions and more in this detailed blog post.

                            </Typography>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <Button variant="raised" style={{ margin: '20px 0' }}>
                                    What you need to know
                            </Button>
                            </div>
                        </Grid>

                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="title" gutterBottom style={{ textAlign: 'center' }}>
                                Brewing Glossary
                            </Typography>
                            <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                Learn the terms of the trade so you don't sound like a total noob.
                            </Typography>
                            <Button variant="raised" style={{ margin: '20px 0' }}>
                                Glossary
                            </Button>
                        </Grid>
                    </Grid>
                </div>



                <div className="contentWrap">

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12}>
                            <Typography variant="display1" gutterBottom style={{ textAlign: 'center', margin: '40px 0' }}>
                                Display1
                            </Typography>
                            <Typography variant="subheading" gutterBottom>
                                Subheading: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>

                        </Grid>
                    </Grid>
                </div>
                <div className="contentWrap">

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Button variant="raised" >
                                Default
                            </Button>
                        </Grid>
                    </Grid>

                </div>
            </MuiThemeProvider>

        );
    }
}
