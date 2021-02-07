import React, {Component} from 'react';

class Nav extends Component {

    render() {
        return(
            <div class="nav">
                <ul class="nav-list">
                    <li>
                        <a href="menus.html">Menus</a>
                    </li>
                    <li>
                        <a href="services.html">Services</a>
                    </li>
                    <li>
                        <a href="our-story.html">Our Story</a>
                    </li>
                    <li>
                        <a href="reserve.html" class="hire-us">Reserve</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;