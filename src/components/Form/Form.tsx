import React from 'react';
import {Form, Input} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import { AudioOutlined } from '@ant-design/icons';
import  queryString from "query-string";

const FormSearch:React.FC<{defaultValue?:any}> = ({defaultValue}) => {
    const navigate=useNavigate();
    const type=queryString.parse(useLocation().search).type
    const suffix = (
        <AudioOutlined
            style={{
                cursor:"pointer",
                fontSize: 20,
                color: '#1890ff',
            }}
        />
    );
    const onFinishHandle=(value:{search:string})=>{
        console.log(value.search)
        if (value.search.trim()){
            return navigate(`/search?q=${value.search}${type ? `&type=${type}`:""}`)
        }
    }
    return (
        <Form initialValues={{search:defaultValue}} style={{flex: "0 1 700px"}} onFinish={onFinishHandle}>
            <Form.Item style={{marginBottom:0}} name={"search"} >
                <Input
                    style={{borderRadius:"20px/20px"}}
                    placeholder="input search text"
                    size="large"
                    suffix={suffix}
                />
            </Form.Item>
        </Form>
    );
};

export default FormSearch;
