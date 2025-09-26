import React from 'react'

const InnerBanner = ({title, subTitle, backgroundImage}) => {

  

  return (
    <section style={{backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none", backgroundPosition: "center", backgroundSize: "cover", backgroundColor: backgroundImage ? "transparent" : "#f8f9fa",  color: "#000", padding: "100px 0", textAlign: "left", marginTop: "80px"}}>

        <div className='container'>
            <h1 className='fw-bold'>{title}</h1>
            <p className='lead mt-2'>{subTitle}</p>
        </div>

    </section>
  )
}

export default InnerBanner