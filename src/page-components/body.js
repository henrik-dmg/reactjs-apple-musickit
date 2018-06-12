/**
 * Created by mohitbhansali on 11/06/18.
 */
import React, {Component} from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import Albums from '../pages/albums';
import AlbumDetail from '../pages/albums/detail';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.albumsProvider.onLoad(()=>{
            this.setState({});
        })
    }
    render() {
        return <div>
            {
                this.props.isLogin && window.location.pathname === '/' &&
                <Switch>
                    <Redirect from="/" to="/albums"/>
                </Switch>
            }
            <Route path="/albums" exact render={(props) => {
                return <Albums albumsProvider={this.props.albumsProvider} />
            }}/>

            <Route path="/albums/*" exact render={(props) => {
                return <AlbumDetail detailProp={props} albumsProvider={this.props.albumsProvider} />
            }}/>
        </div>
    }
}

export default Body;