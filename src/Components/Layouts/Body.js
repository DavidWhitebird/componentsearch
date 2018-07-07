import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        width: '50%',
        maxWidth: '180px',
        backgroundColor: theme.palette.background.paper,
    },
});


class ListDividers extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu2 = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose2 = () => {
        this.setState({anchorEl: null});
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    createPlaylist = event => {

        var button = document.getElementById("help");
        if (button.hasAttributes()) {
            var attrs = button.attributes;
            var output = "";
            for(var i = attrs.length - 1; i >= 0; i--) {
                output += attrs[i].name + "->" + attrs[i].value + "\n";
            }
            var result = output;
        } else {
            var result = "No attributes to show";
        }
        var out = document.createElement("out");
        out.appendChild(document.createTextNode(result));
        button.appendChild(out);

       /* var ul = document.getElementById("nav");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(prompt("Enter Playlist Name")));
        //This will work if I add a ListItem instead of a TextNode
        ul.appendChild(li);*/
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <List Id="nav">
                    <ListItem button>
                        <ListItemText
                            primary="Create New Playlist"
                            onClick={this.createPlaylist}
                            color="inherit"
                        />
                    </ListItem>
                    <ListItem Id = "help" />
                </List>
            </div>
        );
    }
}

ListDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
