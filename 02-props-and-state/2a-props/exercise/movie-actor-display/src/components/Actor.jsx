import React from 'react'

export default function Actor(props) {
  return (
    <div>
        <h2>Hello I am {props.actor.name} and I am {props.actor.age} yr old. My ID is {props.actor.id} </h2>
    </div>
  )
}
