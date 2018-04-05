import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent, Component } from 'react';

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
import BreadCrumbs from '../../components/BreadCrumbs';


import backgroundImage from '../../imgs/milledGrains.jpg';

import water from '../../imgs/svgs/water.svg';
import hops from '../../imgs/svgs/hop.svg';
import grain from '../../imgs/svgs/grain2.svg';
import yeast from '../../imgs/svgs/yeast3.svg';
import beer from '../../imgs/svgs/beer.svg';


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
        let breadCrumbs = [
            {
                name: 'Volzbrew',
                url: '/',
            },
            {
                name: 'Brew',
                url: '/brew',
            },
            {
                name: 'Beginner',
                url: '/brew',
            },
            {
                name: 'Brewing Process',
                url: '/brewingProcess',
            }
        ]
        var navOptions = [
            {
                name: 'Overview',
                url: '/brewingProcess'
            }, {
                name: '1. Make Wort',
                url: '/brewingProcess/1-Make-Wort',
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
                isActive: true

            },
            {
                name: '5. Carbonation',
                url: '/brewingProcess/5-Carbonation',
            },
        ];


        return (

            <MuiThemeProvider theme={theme}>
                <ScrollToTopOnMount />


                <div className="contentWrap100">
                    <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>

                        <Grid item xs={12} style={{ marginLeft:'12px',height: '100%' }}>
                        <Typography variant="body2">
                                <BreadCrumbs breadCrumbs={breadCrumbs}/>
                            </Typography>
                            <Typography variant="display2">Brewing Process</Typography>             
                        </Grid>
                        <Grid item xs={4} md={2} lg={2} style={{ backgroundColor: 'white', height: '100%', padding: 0 }}>
                                                    
                            <ArticleNavigation navOptions={navOptions}/>

                        </Grid>

                        <Grid item xs={8} md={4} lg={4} >
                        <Typography variant="display1" gutterBottom>Step 4: Fermentation</Typography>
                            
                            <Typography variant="subheading" gutterBottom>
                                This is where the magic happens. Yeast consume the wort’s sugars and convert them into alcohol, making <b>BEER!</b> 
                                <br />
                                <br />
Fermentation vessels should be stored in a dark place out of direct sunlight with consistent temperatures. Fermentation temperature should be kept between 65-75°F, ideally 68-72°F (different ranges for lagering), for at least 10-12 days. 
<br />
                                <br />
Temperature control is very important! Higher temperatures and/or large fluctuations stress yeast which can lead to off-flavors. Lower temperatures can slow down and inhibit crucial yeast processes which increase the risk of infection.
<br />
                                <br />
During the first few days keeping a close eye on the fermenter is important. The yeast will become very active, furiously consuming the primary sugars, before settling down and completing their job. Watch out for airlock clogging during the first few days. This can lead to a build-up of pressure inside the fermenting bucket and cause the lid to pop of and spew wort all over the walls.(Trust us, this happened at four in the morning and sounded like a gun went off!)

                                    </Typography>
                        </Grid>
                        <Grid item xs={8} md={6} lg={6} >
                            <img src={beer} className="svgIcon" alt="beer" />
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
                            <Link to="/brewingProcess">

                                <Button variant="raised">
                                    Step 5: Carbonation

                            </Button>
                            </Link>

                        </Grid>
                    </Grid>


                </div>

            </MuiThemeProvider>

        );
    }
}
