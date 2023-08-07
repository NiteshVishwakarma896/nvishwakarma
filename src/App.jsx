import React from "react"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from "./sections/About"

function App() {

  return (
    <React.Fragment>
      <Parallax pages={4} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div className="animation_layer parallax">
            <h2 className="parallax-heading">Hi, Welcome</h2>
            <p className="parallax-sub-heading">Scroll down for more</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </React.Fragment>
  )
}

export default App
