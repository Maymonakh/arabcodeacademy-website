import React,{useState,useEffect} from "react";
import {Box,Text } from '@chakra-ui/react';
import emptyIcon from "@/public/icons/emptyStar.svg";
import halfIcon from "@/public/icons/star-half-alt.svg";
import fullIcon from "@/public/icons/Fillstar.svg";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import style from "./Rating.module.css";
const Rating :React.FC=()=>{
   const [rating,setRating]=useState(0);
   const [Avg,setAvg]=useState(0);
   
   const ratingChanged =(newRating:number)=>{
    // post request to add the new rating
    fetch(" ",{method: 'POST',headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRating),
        }
    ).then(res=>{
        if (res.ok){
            setRating(newRating); 
        }

    })
}
   useEffect (( )=>{
// fetch request to get avg from server
   
   },[Avg,rating]);

    return (
    <div className={style.section}>
     <div className={style.container}>
      <Box>
      <Text className={style.rateName}>{Avg}</Text>
      <Text className={style.addRate}> أضف تقييماً</Text>

      </Box>
      <Box>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<Image src={emptyIcon.src} alt=" empty star" width={38.26}/>}
    halfIcon={<Image src={halfIcon.src} alt=" half star" width={38.26}/>}
    fullIcon={<Image src={fullIcon.src} alt=" filled star" width={38.26}/>}
    activeColor="#D9C29E"
  />
  </Box>
     </div>


    </div >


    )
}
export default Rating;