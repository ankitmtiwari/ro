import React from 'react'

function page({params}) {
    console.log(params.pages)
  return (
    <div>SLUG PAGE IS HERE{params.pages}</div>
  )
}

export default page