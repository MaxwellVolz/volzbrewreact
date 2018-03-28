import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../style/theme';

import Typography from 'material-ui/Typography';

import backgroundImage from '../imgs/milledGrains.jpg';

const styles = {
    appBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 17
    },
    buttonText: {
        color: 'white',
        textDecoration: 'none',
    }
};

export default class VolzbrewAppBar extends PureComponent<PropType> {
    render() {
        return (

            <AppBar position="static">
                <div style={styles.appBar}>
                    <Link to="/">
                        <Button style={styles.buttonText}>
                            Home
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button style={styles.buttonText}>
                            <div>About</div>
                        </Button>
                    </Link>
                    <Link to="/blog">
                        <Button style={styles.buttonText}>
                            <div>Blog</div>
                        </Button>
                    </Link>
                </div>
            </AppBar>

        );
    }
}
