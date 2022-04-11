import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchDataQuery } from '../../../store/searchApi';
import queryString from "query-string";
import ReactPlayer from "react-player";
import classes from './../search.module.css'
import { Card,Empty,Row,Typography } from 'antd';
import Loader from "../../Loader/Loader";
import classes2 from './Videos.module.css'
const {Text}=Typography
const Videos = () => {
    const location=useLocation();
    const parsed=queryString.parse(location.search)
    const {data,isLoading,isFetching}=useSearchDataQuery({q:parsed.q as string, type:"video"})
    if (!isLoading) console.log(data?.results);
    return (
        <Row wrap justify={"center"} className={classes.contentContainer}>
            {isFetching || isLoading ? <Loader/>: data?.results.length ? data?.results.filter((result)=>result.cite.domain==="www.youtube.com › watch")
                .map((result,index)=> <ReactPlayer key={index} width={355} height={200} className={classes2.player} style={{margin:"0 10px 10px 0"}} url={result.link}/>
                ):<Empty description={<Text>Videos not found</Text>}/>}
        </Row>
    );
};

export default Videos;
