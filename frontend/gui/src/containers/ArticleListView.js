import React from "react";
import Articles from "../components/Article";
import axios from 'axios'
import CustomForm from "../components/Form";
import {connect} from 'react-redux'





class ArticleList  extends React.Component {
    state = {
        articles: []
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if (newProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: newProps.token
            }
            axios.get('http://127.0.0.1:8000/')
                .then(res => {
                    this.setState({
                        articles: res.data
                    })
                    console.log(res.data)
                })
        }

    }

    render() {
        return (
            <div>
            <Articles data={this.state.articles}/>
            <br/>
            <h2>Create an Article</h2>

        <CustomForm requestType="post" articleID={null} btnText="Create"/>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps)(ArticleList)