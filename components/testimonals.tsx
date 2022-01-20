import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import Card from './card';
import TestimonalCard from './testimonal-card';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonals() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const [top, setTop] = useState('90%')
  const [side, setSide] = useState('30%')

  const resize = () =>{
    if (window.innerWidth > 768){
      setTop('50%');
      setSide('40px');
    }else{
      setTop('90%');
      setSide('30%');
    }
  }

  useEffect(() => {
    if (typeof window !== undefined){
      resize()
    }
  }, [])
  
  if(typeof window !== "undefined"){
    window.addEventListener('resize', () => {
      resize();
    });
  }

  const testimonals = [
    {
      name: 'Rimas Nasri',
      text: 'Lorem Ipsum is simply dummy took a galley of type and scrambled it to make a type specimen book.',
      image:
        'https://images.unsplash.com/photo-1642478881792-4726327bb0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Rimas Nasri',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industrydummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image:'https://images.unsplash.com/photo-1642544012117-fb14a2dd9b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Rimas Nasri',
        text: 'Lorem Ipsum has dummy text of the printing and typesetting industry been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://images.unsplash.com/photo-1642524293426-717bd2c1d111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        name: 'Rimas Nasri',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },          

  ];

  return (
    <Box      
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {testimonals.map((testimonal, index) => (
          <TestimonalCard testimonal={testimonal} key={index} />
        ))}
      </Slider>
    </Box>
  );
}