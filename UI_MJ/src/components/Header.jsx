import React,  { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, } from 'react-router-dom';
import { onUserLogout,keepLogin } from '../actions';
import { connect } from 'react-redux';
import logo from '../support/img/MENDING JALAN.png';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


class Header extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
      };
    }
    toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
    }

    onLogoutClick = () => {
        this.props.onUserLogout();
        cookies.remove('myPengguna');

    }

    render(){
    if (this.props.username === ""){ 
        return(
            <div style={{ margin: '0 0 90px 0' }}>
                <Navbar color="light" light expand="md" fixed="top" className="shadow">
                    <NavbarBrand href="/" className="ml-2" >
                    <img src={logo} alt="Ote Logo" height={60} width={150} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>                    
                        <NavItem>
                            <NavLink href="/ProductList" className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}} ><i className="fas fa-sign-in-alt" ></i>  Product </NavLink>
                        </NavItem>                   
                        <NavItem>
                            <NavLink href="/Article" className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}} ><i className="fas fa-sign-in-alt" ></i> Article </NavLink>
                        </NavItem> 
                        <NavItem>
                            <Link to="/About"><NavLink className="myLogin btn btn-default border-secondary mr-1"  style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> About Us</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Contact"><NavLink className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Contact Us</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/register"><NavLink className="myLogin btn btn-default border-secondary mr-1"  style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Sign Up</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/login"><NavLink className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Login</NavLink></Link>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
    return(
        <div style={{ margin: '0 0 90px 0' }}>
            <Navbar color="light" light expand="md" fixed="top" className="shadow">
            <NavbarBrand href="/" className="ml-2" >
                    <img src={logo} alt="Ote Logo" height={50} width={250} /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
    
                    <Nav className="ml-auto" navbar>                   
                        <NavItem>
                            <NavLink href="/ProductList" className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}} ><i className="fas fa-sign-in-alt" ></i>  Product </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Article" className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}} ><i className="fas fa-sign-in-alt" ></i> Article </NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/About"><NavLink className="myLogin btn btn-default border-secondary mr-1"  style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> About Us</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Contact"><NavLink className="myLogin btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Contact Us</NavLink></Link>
                        </NavItem>
                        </Nav>
                        
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Hello, <p className="text-capitalize" style={{display:"inline"}}>{this.props.username}</p>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.onLogoutClick}>
                                    <i className="fas fa-sign-out-alt text-danger"></i> Logout 
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
}

const mapStateToProps = (state) => {
return {
    username: state.auth.username,
}
}

export default connect(mapStateToProps, {onUserLogout, keepLogin})(Header);