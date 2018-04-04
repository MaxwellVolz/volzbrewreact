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
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import ArticleNavigation from '../../components/ArticleNavigation';

import backgroundImage from '../../imgs/milledGrains.jpg';

import water from '../../imgs/water.svg';
import hops from '../../imgs/hop.svg';
import grain from '../../imgs/grain2.svg';
import yeast from '../../imgs/yeast3.svg';

// const Water = require('../../imgs/water.svg');


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

};


export default class Header extends PureComponent<PropType> {

    render() {
        var navOptions = [
            {
                name: 'Overview',
                url: '/brewingProcess',
                isActive: true
            }, {
                name: '1. Make Wort',
                url: '/brewingProcess/1-Make-Wort'
            },
            {
                name: '2. The Boil',
                url: '/brewingProcess/2-The-Boil',
            },
            {
                name: '3. Cooling the Wort and Pitching the Yeast',
                url: '/brewingProcess/3-Cool-Wort',
            },
            {
                name: '4. Fermentation',
                url: '/brewingProcess/4-Fermentation',
            },
            {
                name: '5. Carbonation',
                url: '/brewingProcess/5-Carbonation',
            },
        ];
        return (

            <MuiThemeProvider theme={theme}>
            <ScrollToTopOnMount/>


                <div className="contentWrap100">
                    <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>

                        <Grid item xs={4} md={2} lg={2} style={{ backgroundColor: 'white', height: '100%', padding: 0 }}>
                            <ArticleNavigation navOptions={navOptions}/>
                        </Grid>
                        
                        <Grid item xs={8} md={4} lg={4} >
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

                                    </Typography>
                        </Grid>
                        <Grid item xs={8} md={6} lg={6} >
                            <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>
                                <Grid item xs={12} md={6} style={{backgroundColor:'white',height:'100%',padding:0}}>
                                    <img src={water} className="svgIcon" alt="water" />
                                </Grid>
                                <Grid item xs={12} md={6} style={{backgroundColor:'white',height:'100%',padding:0}}>
                                    <img src={grain} className="svgIcon" alt="grain" />
                                </Grid>
                                <Grid item xs={12} md={6} style={{backgroundColor:'white',height:'100%',padding:0}}>
                                    <img src={hops} className="svgIcon" alt="hops" />
                                </Grid>
                                <Grid item xs={12} md={6} style={{backgroundColor:'white',height:'100%',padding:0}}>                                    
                                    <img src={yeast} className="svgIcon" alt="yeast" />
                                </Grid>
                            </Grid>
                       
                        </Grid>
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
                                <Link to="/brewingProcess/1-Make-Wort">

                                    <Button variant="raised">
                                        Step 1: Make Wort
    
                                </Button>
                                </Link>

                            </Grid>
                        </Grid>


                    </div>
                    
            </MuiThemeProvider>

        );
    }
}
