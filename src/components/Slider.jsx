import React from 'react'
import { useState } from 'react'

const Images = [
    "https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028598.jpg?t=st=1720178466~exp=1720182066~hmac=e53d92ad6e5d615c97b083d643ae24f8e1c3f8046063afd1d83e5012df3a64d4?ga=GA1.1.1461989904.1705814989",
    "https://img.freepik.com/free-photo/anime-style-clouds_23-2151071804.jpg?t=st=1720178466~exp=1720182066~hmac=37a2e1874a788c4645a398d5bfa64c5dc1733a9400aea200d22f3368c9e5125f?ga=GA1.1.1461989904.1705814989",
    "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038431.jpg?t=st=1720178948~exp=1720182548~hmac=d2486b0f5c756c5f472c3c9411f0b046ad56bce5ea9950f02bd7d7d3b11bc36d?ga=GA1.1.1461989904.1705814989",
    "https://img.freepik.com/free-photo/fantasy-style-scene-with-mountains-landscape_23-2151124864.jpg?ga=GA1.1.1461989904.1705814989&semt=ais_user_ai_gen"
  ]
  
const Slider = () => {
    const [slider, setSlider] = useState(0)

    const previous = () => {
        setSlider((x) => (x === 0 ? Images.length - 1 : x - 1))
    }

    const next = () => {
        setSlider((x) => (x === Images.length - 1 ? 0 : x + 1))
    }

  return (
    <>
        <button onClick={previous}>←</button>
        <img src={Images[slider]} alt="" width={"500px"} height={"500px"}/>
        <button onClick={next}>→</button>
    </>
  )
}

export default Slider