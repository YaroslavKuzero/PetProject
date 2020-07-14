import React, { Component } from 'react';
import './Daily.scss';
import { daily } from '../../js/format-data';
import Button from '../Button/Button';
import Day from '../Day/Day';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import shortid from 'shortid';

class Daily extends Component {
  render() {
    return (
      <Tabs className="daily" renderActiveTabContentOnly={true}>
        <div className="btn-box">
          {daily.map((day, index) => {
            return (
              <TabLink className="dbtn-item" activeClassName="daily--active" to={'tab' + index} key={shortid.generate()}><Button day={day} /></TabLink>)
          })}
        </div>
        {daily.map((day, index) => {

          return (
            <TabContent className="daily__wrapper" activeClassName="tab--active" for={'tab' + index} key={shortid.generate()}><Day day={day} /></TabContent>
          )
        })}
      </Tabs>
    )
  }
}

export default Daily;