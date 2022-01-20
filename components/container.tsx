import React from "react"
import Footer from "./footer"
import { Navbar } from "./navbar"
import styled from "@emotion/styled"
import SliderApp from "./slider"
import About from "./about"
import Carousel from "./carousel"
import Testimonals from "./testimonals"

const Main = styled('main')`
    min-height: 100vh;
    height: auto;
`

export const Container = ({ children }) => {
    
    return (
        <Main>
            <Navbar key={1} />
            <SliderApp />
            <About />
            <Carousel key={2}/>
            <Testimonals />
            <Footer />
        </Main>
    )
}