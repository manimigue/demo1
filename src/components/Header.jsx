import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../demoLogo.png'

class Header extends Component {
  static defaultProps = {
    links : [
      "会員登録",
      "ログイン"
    ]
  }
  constructor(props){
    super(props);
    this.state = {
      isHide: false,
      navExpanded: false,
    }
  }

  hideBar = () => {
     const isHide = this.state.isHide;
     const expanded = this.state.navExpanded

     window.scrollY > this.prev && expanded === false?
     !isHide && this.setState({ isHide: true })
     :
     isHide && this.setState({ isHide: false });

     this.prev = window.scrollY;
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }
  closeNav = () => {
    this.setState({ navExpanded: false });
  }

  setMember = () => {
    this.props.setMember()
  }

  componentDidMount(){
      window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
       window.removeEventListener('scroll', this.hideBar);
  }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    const lists = this.props.links.map(link => {
      return (
        <Nav.Link
          key={link}
          onClick={() => this.setMember()}
          >{link}
        </Nav.Link>
      );
    });
    return (
      <Navbar
        className={classHide}
        collapseOnSelect
        expand="sm"
        bg='white'
        variant="light"
        sticky='top'
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        <Navbar.Brand href="">
          <img src={Logo} alt='Logo' width='90'/>
          <p style={{display : "inline-block",fontSize : "0.7em"}}>{this.props.member ? "会員さんようこそ" : "ゲストさんこんにちは"}</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav onSelect={this.closeNav}>
            {lists}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header
