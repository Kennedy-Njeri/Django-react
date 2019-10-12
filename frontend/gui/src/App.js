import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from "./routes";
import {connect} from 'react-redux'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from "./containers/Layout";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


function App() {
  return (
    <div>
        <Router>
      <CustomLayout {...this.props}>
          <BaseRouter/>
      </CustomLayout>
        </Router>
    </div>
  );
}

mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

export default connect(mapStateToProps)(App);
