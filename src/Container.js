import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import {useScrollHook, useWindowDimensions, scroll} from "./Hooks";
import './Container.css';

const Container = () => {
    const [barClick, setBarClick] = useState();

    const [click, setClick] = useState(false);

    const [prevCount, setPrevCount] = useState(0);

    const {scrolling, scrollTop} = useScrollHook();

    const {height, width} = useWindowDimensions();

    useEffect( () => {
            window.scrollTo({
                top: prevCount
            });
    }, [click ]);

    const clicked = () => {
        if(click === false) setClick(true);
        else setClick(false);
    }

    const pageClickFunc = () => {
        if(barClick===true) setBarClick(false);
    }

    useEffect(() => {
        if(scrolling === false && scrollTop > 50) setBarClick(false);
    }, [scrolling, scrollTop]);


    useEffect(()=>{
        if(click===false) setPrevCount(scrollTop);
    }, [scrollTop]);

    return(
      <div className="ContainerCont" style = {click ? {"height": "100vh"} : null } onClick={pageClickFunc}>
        <Navbar scrollTop={scrollTop} click={click} clicked={clicked} scroll={scroll(scrolling, scrollTop)} barclick={barClick} setBarClick={setBarClick} />
        <Content scrollTop={scrollTop} prevCount={prevCount} click={click} setClick={setClick}/>
      </div>
    );
}

export default Container;

