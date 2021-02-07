import React, {Component} from 'react';

class Link extends Component {

    render() {
        return(
            <a class={"link " + this.props.className} href={this.props.href}>Menus</a>
        );
    }
}

Link.defaultProps = {
    className: "",
    href: "#"
}

export default Navbar;