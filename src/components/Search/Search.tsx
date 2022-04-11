import React from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string'
import SearchHeader from "./SearchHeader/SearchHeader";
import Search from "./Search/Search";
import News from "./News/News";
import Videos from "./Videos/Videos";
const SearchComponent:React.FC =React.memo( () => {
    const location=useLocation();
    const parse=queryString.parse(location.search);
    return (
          <>
              <SearchHeader/>
              {!parse.type || parse.type==="image" ? <Search/>:parse.type==="news" ? <News/>:parse.type==="video" ? <Videos/>:""  }
        </>

    );
});
export default SearchComponent;
