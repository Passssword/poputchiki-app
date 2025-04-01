import React from 'react';
import { Link } from "react-router-dom";
import style from './searchResultsPage.module.css'
import { usersAPI } from '../api/axiosAPI.js'
import { connect } from "react-redux";
import { renderAdvertsAC } from "../redux/reducerSearchResults.js";

function changeAddressBar (id) {
  // Метод замены адресной строки, он не работает, так как рендер
  //  не срабатывает на изменение адреса таким образом
  
  const routeString = `adverts/${id}`
  // window.history.pushState(null, null, routeString);
  // document.location = 'adverts/'+id
  console.log(id)
}
function fillAdvertsFields (data) {
  return data.map( elem => {
    return (
      <tr onClick={ () => {changeAddressBar(elem.id)} }>
        <td>{elem.startPoint}</td>
        <td>{elem.endPoint}</td>
        <td>{elem.dateCreate}</td>
        <td>{elem.auto}</td>
      </tr>
    )
  })
}
function SearchResultsPage (props) {
    return(
          <div className={style.search_results_wrapper}>
            <div className={style.search_filters_wrapper}>Block search filters</div>
            <table className={style.search_results_table}>
              <tr>
                <th>Место отправления</th>
                <th>Место назначения</th>
                <th>Дата</th>
                <th>Автомобиль</th>
              </tr>
              {fillAdvertsFields(props.Adverts)}
            </table>
          </div>
    );
}

// export default searchResultsPage;


/* 
Сделать редьюсер для state
 */


class SearchResultsPageAPI extends React.Component {
  componentDidMount () {
    usersAPI.getAdverts()
            .then(data=>{
              console.log('SearchResultsPageAPI --->')
              console.log(data)
              this.props.renderAdverts(data)
            })
  }
  render () {
    return ( <SearchResultsPage
                Adverts={this.props.searchResultsState.Adverts}
                /> )
  }
}

let mapStateToProps = ( state ) => {
  return (
    {
      searchResultsState: state.searchResultsState,
    });
};
let mapDispatchToProps = ( dispatch ) => {
  return (
    {
      renderAdverts: (data) => {dispatch( renderAdvertsAC(data) )}
    });
};

const SearchResultsContener = connect(mapStateToProps, mapDispatchToProps)(SearchResultsPageAPI);

export default SearchResultsContener;