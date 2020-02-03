import React, {Component} from "react";
import { Menu, MenuItem, ButtonGroup, Button } from "semantic-ui-react";

export default class Nav extends Component {

    render() {
        return (
            <Menu fixed={"top"}>
                <MenuItem>
                    Tony Hu的个人主页
                </MenuItem>
                <MenuItem>
                    Blog
                </MenuItem>
                <MenuItem>
                    个人简介
                </MenuItem>
                <MenuItem position='right'>
                    <ButtonGroup>
                        <Button>中</Button>
                        <Button>En</Button>
                    </ButtonGroup>
                </MenuItem>
            </Menu>
        );
    }
}