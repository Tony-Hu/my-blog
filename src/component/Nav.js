import React, {Component} from "react";
import { Menu, MenuItem } from "semantic-ui-react";

export default class Nav extends Component {

    render() {
        return (
            <Menu fixed={"top"}>
                <MenuItem>
                    A dummy logo
                </MenuItem>
                <MenuItem>
                    A dummy logo
                </MenuItem>
            </Menu>
        );
    }
}