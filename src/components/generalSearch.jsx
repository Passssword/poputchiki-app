import React from 'react';
import style from './generalSearch.module.css'
import styleButtons from '../style/buttons.module.css'
import { usersAPI } from '../api/axiosAPI.js'
import { connect } from "react-redux";
import { renderLocationsAC } from "../redux/reducerGeneralSearch.js";

function renderLocationsStack(data){
        return data.map( elem => {
            return (<option value={elem.id}>{elem.town}</option>)
        })
    }

function SearchWrapper (props) {
    return(
        <div className={style.search_wrapper}>
        
                <div className={style.select_wrapper}>
                <select className={style.select}>
                    {renderLocationsStack(props.Locations)}
                </select>
                </div>
                <div className={style.select_wrapper}>
                <select className={style.select}>
                    {renderLocationsStack(props.Locations)}
                </select>
                </div>
            
                <div className={style.test}>
                <button className={styleButtons.btn}>Search</button>
                </div>
            </div>
    )
}

// export default SearchWrapper

class GeneralSearchAPI extends React.Component {
    componentDidMount () {
        usersAPI.getLocations()
            .then(data=>{
                this.props.renderLocations(data)
            })
    }
    render () { return ( <SearchWrapper
                            Locations={this.props.GeneralSearchPage.Locations}
                            />) }
}

let mapStateToProps = ( state ) => {
    return (
      {
        GeneralSearchPage: state.generalSearchState,
      });
  };
  let mapDispatchToProps = ( dispatch ) => {
    return (
      {
        renderLocations: (data) => {dispatch( renderLocationsAC(data) )}
      });
  };

  const GeneralSearchContener = connect(mapStateToProps, mapDispatchToProps)(GeneralSearchAPI);
  

export default GeneralSearchContener