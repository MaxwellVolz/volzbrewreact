import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import 'typeface-roboto';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import HomePage from './pages/home/';
import AboutPage from './pages/about/';
import BrewingProcessPage from './pages/brewingProcess/';


import VolzbrewAppBar from './components/VolzbrewAppBar';

import backgroundImage from './imgs/milledGrains.jpg';

const styles = {
    headerGrid: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '680px'
    },
    mainHeaderText: {
        paddingTop: '260px',
        textAlign: 'center',
        color: 'white'
    },
    headerText: {
        textAlign: 'center',
        color: 'white'
    },
    contentWrap: {
        width: '80vw',
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '24',
    },
    appBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 17
    },
    

};

const Home = () => (
    <div>
        <HomePage />
    </div>
)

const About = () => (
    <div>
        <AboutPage />
    </div>
)

const Blog = () => (
    <div>
        <h2>Blog</h2>
    </div>
)

const BrewingProcess = () => (
    <div>
        <BrewingProcessPage />
    </div>
)

export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <Router>
                <div>
                    <VolzbrewAppBar />

                    <div style={styles.content}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/brewingProcess" component={BrewingProcess} />

                    </div>

                </div>
            </Router>

        );
    }
}
