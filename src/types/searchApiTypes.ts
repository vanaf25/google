export interface searchAll{
    results:Array<Result>,
    total:string,
    ts:string,
    device_region:string,
    deviceType:string,
    image_results:Array<ImageResult>
}
type Result={
    title:string,
    link:string,
    description:string,
    additional_links:Array<{
        text:string,
        href:string
    }>,
    cite:{
        domain:string,
        span:string
    }
}
type ImageResult={
    image:{
        src:string,
        alt:string
    },
    link:{
        href:string,
        domain:string,
        title:string
    }

}
