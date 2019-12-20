import React from "react";
import axios from 'axios'
import {Card, Button} from 'antd'
import CustomForm from "../components/Form";
import {connect} from 'react-redux'




class ArticleDetail  extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {

        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/${articleID}`).then(res => {
            this.setState({
                article: res.data
            });
        });
    }

    //
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log(nextProps)
    //     if (nextProps.token) {
    //         axios.defaults.headers = {
    //             "Content-Type": "application/json",
    //             Authorization: nextProps.token
    //         }
    //         const articleID = this.props.match.params.articleID
    //         axios.get(`http://127.0.0.1:8000/${articleID}/`)
    //             .then(res => {
    //                 this.setState({
    //                     article: res.data
    //                 })
    //                 console.log(res.data)
    //             })
    //     }
    //
    // }

    // handleDelete = (event) => {
    //     if (this.props.token !== null){
    //         const articleID = this.props.match.params.articleID
    //         axios.defaults.headers = {
    //             "Content-Type": "application/json",
    //             Authorization: this.props.token
    //         }
    //         axios.delete(`http://127.0.0.1:8000/${articleID}/`)
    //         this.props.history.push('/')
    //         this.forceUpdate()
    //     } else {
    //
    //     }
    //
    // }

    handleDelete = event => {
        event.preventDefault();
        const articleID = this.props.match.params.articleID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/${articleID}/delete/`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push(`/`);
                }
            })
    };


    render() {
        return (
            <div>
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
                <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="Update"/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps)(ArticleDetail)