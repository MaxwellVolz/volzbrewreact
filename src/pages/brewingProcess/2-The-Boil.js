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



import backgroundImage from '../../imgs/milledGrains.jpg';

import water from '../../imgs/water.svg';
import hops from '../../imgs/hop.svg';
import grain from '../../imgs/grain2.svg';
import yeast from '../../imgs/yeast3.svg';
import beer from '../../imgs/beer.svg';


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
                url: '/brewingProcess'
            }, {
                name: '1. Make Wort',
                url: '/brewingProcess/1-Make-Wort',
            },
            {
                name: '2. The Boil',
                url: '/brewingProcess/2-The-Boil',
                isActive: true
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
                <ScrollToTopOnMount />


                <div className="contentWrap100">
                    <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>

                        <Grid item xs={4} md={2} lg={2} style={{ backgroundColor: 'white', height: '100%', padding: 0 }}>
                            <ArticleNavigation navOptions={navOptions} />
                        </Grid>

                        <Grid item xs={7} md={4} lg={4} >
                            <Typography variant="subheading" gutterBottom>

                                <b>Step 2: The Boil</b>
                                <br />
                                <br />
                                The heat is increased to bring the wort to a nice, rolling boil. This step sanitizes the wort and initiates the hop-additions phase in brewing. 
                                <br />
                                <br />
                                Hops are used for their bittering, flavoring, and aromatic qualities. Brewers add them to the wort to counteract beer’s natural sweetness. Hops are added at roughly the following times during the boil:
                                <br />
                                <br />
                                <i>Bittering Hops</i> - boiled for <b>60 minutes</b> (sometimes up to 90 mins) to extract resins which provide bitterness
                                <br />
	                            <i>Flavoring Hops</i> - boiled for <b>15 minutes</b> or less to extract oils for taste
                                <br />
	                            <i>Finishing Hops</i> - boiled for <b>5 minutes</b> or less, or added after the boil, primarily for adding aroma
                                <br />
                                <br />
                                Note: Hop additions, both the amounts and the times they’re added, may vary widely depending on the recipe and beer style. For example a bitter IPA will typically have a relatively high amount of hops added at each stage during the boil with even more added later in the process (<i>see Dry Hopping</i>).
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
                                    Cool Wort

                            </Button>
                            </Link>

                        </Grid>
                    </Grid>


                </div>

            </MuiThemeProvider>

        );
    }
}
