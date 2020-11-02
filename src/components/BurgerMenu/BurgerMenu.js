import React, { Component } from 'react';
import './BurgerMenu.scss';


class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsActive: false,
      barIsActive: false
    };

    this.toggleHandle = this.toggleHandle.bind(this);
  }

  toggleHandle() {
    this.setState(state => ({ menuIsActive: !state.menuIsActive, barIsActive: !state.barIsActive }))
  }

  render() {
    let ulClass = 'menu_list'
    if (this.state.menuIsActive) {
      ulClass += ' active';
    }
    let barClass = 'bar_menu'
    if (this.state.barIsActive) {
      barClass += ' activeBar';
    }

    return (
      <nav className="menu" >
        <ul className={ulClass}>
          <li className="menu_item"><a href="#" className="menu_link">
            MARINE WEATHER
      </a></li>
          <li className="menu_item"><a href="#" className="menu_link">
            CONTACT US
      </a></li>
          <li className="menu_item"><a href="#" className="menu_link">
            BUGS REPORT
      </a></li>
          <li className="menu_item"><a href="#" className="menu_link">
            OUR PORTFOLIO
      </a></li>
        </ul>
        <div className={barClass} onClick={this.toggleHandle}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </nav >
    )
  }
}

export default BurgerMenu;