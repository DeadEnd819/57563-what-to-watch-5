import React, {PureComponent} from 'react';
import {MovieNavigationButtons} from "../const";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: MovieNavigationButtons.OVERVIEW
      };

      this._onNavigationButtonClick = this._onNavigationButtonClick.bind(this);
    }

    _onNavigationButtonClick(evt) {
      evt.preventDefault();

      if (!evt.target.id) {
        return;
      }

      this.setState({activeTab: evt.target.id});
    }

    render() {
      return <Component {...this.props} activeTab={this.state.activeTab} onNavigationButtonClick={this._onNavigationButtonClick} />;
    }
  }

  WithTabs.propTypes = {};

  return WithTabs;
};

export default withTabs;
