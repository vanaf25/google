import React from 'react';
import { useLocation } from 'react-router-dom';
import {useSearchDataQuery} from "../../../store/searchApi";
import queryString from "query-string";
import classes from "../search.module.css";
import {Card,Typography} from "antd";
import {formatDistanceToNow} from "date-fns";
import Loader from "../../Loader/Loader";
const {Text,Title}=Typography
const News = () => {
    const location=useLocation();
    const parse=queryString.parse(location.search);
    const {data,isLoading,isFetching}=useSearchDataQuery<any>({q:parse.q as string ,type:"news"})
    if (!isLoading) console.log(data)
    return (
        <div className={classes.contentContainer}>
         {isFetching || isLoading ? <Loader/>: data?.entries?.map((el:any)=>{
                return <a href={el.link} target={"_blank"}>
                    <Card style={{marginBottom:10}} hoverable>
                        <Text>{el.source.title}</Text>
                        <div>
                            <a style={{color:"#1890ff"}} href={el.link} target={"_blank"} title={el.title}><Title level={4}>{el.title}</Title></a>
                            <Text style={{display:"block"}}>{el.title_detail.value}</Text>
                        </div>
                        <Text>{formatDistanceToNow(new Date(el.published))} ago</Text>
                    </Card>
                </a>
            })}
        </div>
    );
};

export default News;
