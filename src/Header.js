import React, { Component } from 'react';

class MenuItem extends Component {  
     
    render() { 
        return (
            <li className={this.props.isActive === "true" ? (this.props.classes+" is-active"):(this.props.classes)}><a href={this.props.link}>{this.props.text}</a>{this.props.children}</li>
        );
    }
}
class SubMenu extends Component {
    render() { 
        return (  
            <div className="sub-menu">
                <ul className="dropdown-menu">
                    <MenuItem classes="sub-item sub-item1" text="For entrepreneurs" link="#"/>
                    <MenuItem classes="sub-item sub-item2" text="For students" link="#"/>
                    <MenuItem classes="sub-item sub-item3" text="For hobbyists" link="#"/>
                </ul>
            </div>
        );
    }
}
 
class Header extends Component {
    render() { 
        return ( 
            <header>
                <ul className="main-menu">
                    <MenuItem classes="menu-item menu-item1" text="Home" link="#" isActive="true"/>
                    <MenuItem classes="menu-item menu-item2" text="Services" link="#" isActive="false">
                        <SubMenu/>
                    </MenuItem>
                    <MenuItem classes="menu-item menu-item3" text="Contact" link="#" isActive="false"/>
                </ul>
            </header> 
        );
    }
}
export default Header