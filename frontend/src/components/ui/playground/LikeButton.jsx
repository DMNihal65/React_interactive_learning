import React, { useState } from 'react'
import Button from '../Button'

function LikeButton(props) {

    const [like,setlike]=useState(0)
    
    
  return (
    <div className='flex '>
        <span>Like Count : {like}</span>
        <div>
        <Button onClick={()=>{setlike(like+1)}}>Like</Button>
        <Button onClick={()=>{setlike(like-1)}}>Unlike</Button>
        
        </div>
        <span>Props passed is : {props.name}</span>
    </div>
  )
}

export default LikeButton