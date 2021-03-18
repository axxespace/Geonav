import {useEffect, useState} from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


function useScrollHook() {
    const [scrolling, setScrolling] = useState(true);

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {

        function onScroll() {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > scrollTop) {
                // downscroll code
                setScrolling(false);
            } else {
                // upscroll code
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    return {scrolling, scrollTop};
}

function scroll(scrolling, scrollTop){
    if(scrolling == false && scrollTop > 30) return {"top":"-60px"};
    else return {"top":"0"};
}

export {useScrollHook, useWindowDimensions, scroll};