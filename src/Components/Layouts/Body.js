import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '50%',
        maxWidth: '180px',
        backgroundColor: theme.palette.background.paper,
    },
});


function ListDividers(props) {

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="1" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="2" />
                </ListItem>
                <ListItem button>
                    <ListItemText onClick={this.handleclose} />
                    3
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Create New Playlist" />

                </ListItem>
            </List>
        </div>
    );
}

ListDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
