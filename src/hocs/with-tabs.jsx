import React, {PureComponent} from 'react';
import {TabNames} from "../const";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabNames.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(evt) {
      evt.preventDefault();

      if (!evt.target.id) {
        return;
      }

      this.setState({activeTab: evt.target.id});
    }

    render() {
      return <Component {...this.props} activeTab={this.state.activeTab} onTabClick={this._handleTabClick} />;
    }
  }

  WithTabs.propTypes = {};

  return WithTabs;
};

export default withTabs;
