import React from 'react'
import {Figure } from 'react-bootstrap'
import Moment from 'react-moment'
import "./style.css";

class ListeRepo extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                src={this.props.item.owner.avatar_url}
                            />
                        </Figure>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{this.props.item.name}</h1>
                    </div>
                    <div>
                        <span><h2>{this.props.item.description}</h2></span>
                    </div>
                    <div className="profile-stats">
                        <ul style={{'paddingLeft': '0px'}}>
                            <li style={{'border': '0.3rem solid'}}><span className="profile-stat-count">Stars : </span>{this.props.item.stargazers_count} </li>
                            <li style={{'border': '0.3rem solid'}}><span className="profile-stat-count">Issues : </span> {this.props.item.watchers_count}</li>
                            <li><span >Submitted  </span> <Moment fromNow ago>{this.props.item.created_at}</Moment> ago by  <span className="profile-real-name">{this.props.item.owner.login}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default (ListeRepo);
