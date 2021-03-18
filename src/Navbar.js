import React from "react";
import './Navbar.css';

function Navbar(props) {
    const barClick = props.barclick;
    const setBarClick = props.setBarClick;
    const click = props.click;
    const clicked = props.clicked;
    const scroll = props.scroll;
    const scrollTop = props.scrollTop;

    const barClickFunc = () => {
        setBarClick((prev) => {
            return !prev;
        });
    }

    return(
      <>
          <div style={click===false ? {"top": `${scrollTop}px`} : null} className={'pop-up' + (click ? ' pop-up-click' : '')}>
              <div className="toggle-menu">
                  <a href="/" className="buttons">NEWSROOM</a>
                  <a href="/" className="buttons">ABOUT US</a>
                  <a href="/" className="buttons">CAREER</a>
                  <a href="/" className="buttons">IoT GROUP</a>
              </div>
          </div>
          <header style={scroll} className="head">
              <nav className="navigation">
                <div className="menu-btn" onClick={clicked}>
                      <div className={'line' + (click ? ' open' : '')} />
                </div>

                <div className="img">
                      <a href='/'>
                          <img src='flooop.png' alt="img"/>
                      </a>
                </div>
                <div className="lang-with-buttons">
                     <div className="toggle-menu-nav">
                        <a href="/" className="buttons">NEWSROOM</a>
                        <a href="/" className="buttons">ABOUT US</a>
                        <a href="/" className="buttons">CAREER</a>
                        <a href="/" className="buttons">IoT GROUP</a>
                    </div>

                    <div className={"dropbar" + (barClick ? " barclick" : '')} onClick={barClickFunc}>
                        <div className="drop-buttons">EN</div>
                        <div className="list">
                            <div className="triangle"></div>
                            <a className="country-ge" href='/'>GE</a>
                            <a className="country-ru" href='/'>RU</a>
                            <a className="country-fr" href='/'>FR</a>
                            <a className="country-tr" href='/'>TR</a>
                        </div>
                    </div>
              </div>
          </nav>
          </header>
      </>
    );
}

export default Navbar;
