import React from 'react';
import style from './searchResultsPage.module.css'
import { usersAPI } from '../api/axiosAPI.js'
import { connect } from "react-redux";

function searchResultsPage () {
    return(
          <div className={style.search_results_wrapper}>
            <div className={style.search_filters_wrapper}>Block search filters</div>
            <table className={style.search_results_table}>
              <tr><th>Место отправления</th><th>Место назначения</th><th>Дата</th><th>Автомобиль</th></tr>
              <tr><td>Stephen C. Cox</td><td>$300</td><td>$50</td><td>Bob</td></tr>
              <tr><td>Josephin Tan</td><td>$150</td><td>-</td><td>Annie</td></tr>
              <tr><td>Joyce Ming</td><td>$200</td><td>$35</td><td>Andy</td></tr>
              <tr><td>James A. Pentel</td><td>$175</td><td>$25</td><td>Annie</td></tr>
            </table>
          </div>
    );
}

export default searchResultsPage;


/* 
Сделать редьюсер для state
 */


class SearchResultsPageAPI extends React.Component {
  componentDidMount () {
    usersAPI.getAdverts()
            .then(data=>{
                // this.props.renderLocations(data)
            })
  }
  render () {
    return ( <searchResultsPage /> )
  }
}

let mapStateToProps = ( state ) => {
  return (
    {
      // LocationsState: state.locationsState,
    });
};
let mapDispatchToProps = ( dispatch ) => {
  return (
    {
      // renderLocations: (data) => {dispatch( renderLocationsAC(data) )}
    });
};