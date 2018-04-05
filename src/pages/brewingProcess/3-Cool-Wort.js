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
                isActive: true

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
                        <Typography variant="display1" gutterBottom>Step 3: Pitching Yeast</Typography>
                            
                            <Typography variant="subheading" gutterBottom>


                                Cooling the wort as quickly as possible after the boil and prior to transferring the liquid into a fermentation vessel, and pitching (i.e. adding) the yeast, creates an ideal environment for yeast to thrive in. 
                                <br />
                                <br />
Rapidly cooling the wort also has many other benefits such as aiding with beer clarity, reducing DMS (dimethyl sulfide), which can add a cooked- or canned-corn like aroma to beer, and helps decrease the risk of contamination. This is the time when the future <b>beer</b> (woo! future beer!) is most vulnerable to bacteria and other microorganisms (e.g. nasty bugs). 
<br />
                                <br />
                                <i><b>Sanitization</b> is extremely important at this stage to help ward off infection which can lead to off-flavors in the finished beer (gross, no thanks!) Anything that comes in contact with wort after the boil <b>must</b> be THOROUGHLY CLEANED AND SANITIZED. (linky)</i>
<br />
                                <br />
Wort chillers are extremely effective for rapidly cooling the wort under 80°F. Once cooled, the wort is then splashed into a fermentation bucket or glass carboy and mixed with the yeast. Splashing the wort helps re-oxygenate the liquid, as boiling removes oxygen, and the yeast will utilize this oxygen while converting wort into <b>BEER!</b>
<br />
<br />
Transferring wort to fermentation bucket (not a golden shower)
<br />
<br />
Next, the fermentation vessel is swirled, shaken, and sealed with an airlock. Airlocks filled with sanitizer (preferred) or vodka (works in a pinch; free from impurities) provide a liquid barrier which allow yeast byproducts to escape while prohibiting contaminants from getting in.


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
                                    Step 4: Fermentation

                            </Button>
                            </Link>

                        </Grid>
                    </Grid>


                </div>

            </MuiThemeProvider>

        );
    }
}
