import React, {useEffect, useRef} from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Content = (props) => {
    const click = props.click;
    const prevCount = props.prevCount;
    const setClick = props.setClick;

    const func = () => {
        if(click===true) setClick(false);
    }

    return(
        <div onClick={func} style={{ "overflow": "hidden", "marginTop": click ? `-${prevCount}px` : null}}>
            <Page1 />
            <Page2 />
        </div>
    );
}

export default Content;

