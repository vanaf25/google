import React, {useContext} from 'react';
import {Col, Menu, Row, Switch} from "antd";
import classes from "../search.module.css";
import logo from "../../../images/logo.png";
import FormSearch from "../../Form/Form";
import queryString from "query-string";
import {useLocation, useNavigate } from 'react-router-dom';
import {ThemeContext} from "../../../App";
const SearchHeader = () => {
    const location=useLocation();
    const parse=queryString.parse(location.search);
const navigate=useNavigate()
    const handleMenuClick=(e:{key:string})=> {
        if (parse.type !== e.key) {
            if (e.key !== "all") return navigate(`/search?q=${parse.q}&type=${e.key}`);
            navigate(`/search?q=${parse.q}`);
        }
    }
    const theme=useContext(ThemeContext)
    const onChange=()=>{
    theme.toggleTheme()
    }
    return (
        <>
            <Row    align={"middle"} justify={"space-between"} className={`${classes.container}`}>
                    <img className={classes.logo}  src={logo} alt=""/>
                    <FormSearch  defaultValue={parse.q}/>
                <Switch  className={classes.checkbox} checkedChildren="Dark"
                         unCheckedChildren="Light"  onChange={onChange} />
            </Row>
            <Menu theme={theme.theme.mode as "dark" | "light"}
                  style={{marginBottom:20,background:theme.theme.background}}
                  onClick={handleMenuClick} mode={"horizontal"} defaultSelectedKeys={[parse.type ? parse.type as string :"all"]}  className={classes.contentContainer}>
                <Menu.Item key="all">
                    All
                </Menu.Item>
                <Menu.Item key="image">
                    Images
                </Menu.Item>
                <Menu.Item key="news">
                    News
                </Menu.Item>
                <Menu.Item key="video">
                    Videos
                </Menu.Item>
            </Menu>
        </>
    );
};

export default SearchHeader;
