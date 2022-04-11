import React, {useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useSearchDataQuery} from "../../../store/searchApi";
import classes from "../search.module.css";
import {Comment, Row,Typography} from "antd"
import queryString from "query-string";
import {ThemeContext} from "../../../App";
import Loader from "../../Loader/Loader";
const {Title,Text}=Typography
const Search = () => {
    const location=useLocation()
    const parse=queryString.parse(location.search);
    const {data,isLoading,isFetching}=useSearchDataQuery({q:parse.q as string ,type:parse.type   as "search" | "image" || "search" })
    const theme=useContext(ThemeContext);
    return (
        <>
            {isFetching || isLoading ? <Loader/>:!parse.type ?
                  <div className={classes.contentContainer}>
                { data?.results.map((el,index)=>{
                    return   <a key={index} href={el.link} target={"_blank"}>
                        <Comment
                            style={{cursor:"pointer",overflow:'hidden'}}
                            author={<Text className={classes.card__link}  style={{color:theme.theme.foreground}}>{el.link}</Text>}
                            content={
                                <>
                                    <Title className={classes.title} style={{color:theme.theme.linkColor}} level={4}>{el.title}</Title>
                                    <Text style={{color:theme.theme.foreground}}>
                                        {el.description.substring(0,200)}
                                    </Text>

                                </>}
                        />
                    </a>
                })}
            </div>:
            <Row justify={"center"} style={{padding:"0 10px"}} wrap>
                {data?.image_results.map((el,index)=>{
                    return <a key={index} href={el.link.href}>
                        <div style={{marginBottom:10,marginRight:10}}>
                            <img src={el.image.src} alt={el.image.alt}/>
                            <Text  style={{display:"block",maxWidth:100,fontSize:14,color:theme.theme.foreground}}>{el.link.title}</Text>
                        </div>
                    </a>
                })}
            </Row> }
        </>
    );
};
export default Search;
