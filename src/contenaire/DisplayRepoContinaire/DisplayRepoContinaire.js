import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateListRepo} from '../../action/UserActions'
import {CardDeck, Button } from 'react-bootstrap';
import ListeRepo from '../../component/ListRepos/ListeRepo';
import Spinner from 'react-spinner-material';
import Moment from 'react-moment';


class DisplayRepoContinaire extends React.Component{

  constructor() {
    super()
    this.state = {NumberPage: 1};

}

  makeHttpRequestWithPage = async pageNumber => {
    if(pageNumber < 1){
      pageNumber=1;
    }
    axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc?page=${pageNumber}')
      .then(res=>this.props.updateListRepo(res.data.items))
      .catch(err=>console.error(err))
      this.setState({
        NumberPage: pageNumber
      });
      window.scrollTo(0, 0)

  }

       componentWillMount() {
        this.makeHttpRequestWithPage(this.state.NumberPage);
      }  




    render(){
      const {NumberPage}= this.state
      const p = this.props.listRepos.map(item => <ListeRepo key={item.id} item={item} />)
      return(
         !p ? <
           Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} /> 
            :
            <div>
              <CardDeck>
                {p}
              </CardDeck>  
              { NumberPage > 1 &&
                <Button  className="btn btn-light" onClick={() => this.makeHttpRequestWithPage(NumberPage-1)} >
                  Previous
                </Button>}
                <p  align="right"> 
                <Button className="btn btn-light" onClick={() => this.makeHttpRequestWithPage(NumberPage+1)} >
                  Next
              </Button>
              </p> 
            </div>         
           )
    }
}


const mapStatetoProps = (state, ownProps) => {
    return {
        listRepos: state.rootReducer.Repos.list
    }
  }
  export default connect(mapStatetoProps,{updateListRepo})(DisplayRepoContinaire);

