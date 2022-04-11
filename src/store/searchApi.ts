import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {searchAll} from "../types/searchApiTypes";
const apiKeyDefault="4d57deb2fmshdc6bca0cae81529p1a5196jsnb1605fb70ac1"
const createHeaders=(params?:any,host?:string,apiKey?:string)=>{
    return {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4d57deb2fmshdc6bca0cae81529p1a5196jsnb1605fb70ac1',
        ...params
    }
}
export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://google-search3.p.rapidapi.com/api/v1/' }),
    endpoints: (builder) => ({
        searchData: builder.query<searchAll,{q:string,type:"search" | "image" | "news" | "video"}>({
            query: (params) =>({
                url:`${params.type}/q=${params.q}`,
                headers:createHeaders()
            }) ,
        }),
    }),
});
export const {useSearchDataQuery}=searchApi
