import React from 'react'

function FeatureCard() {
    var featureslist =   [{
        Imagepath : "/cloud.svg",
        Heading : "Owner Application",
        Description : "Company Owner can view the Sales of Shop via our Sonic Owner Application.Now available on Play Store."
    },{
        Imagepath : "/userfriendly.svg",
        Heading : "User Friendly Interface",
        Description : "Easy To Learn and Use Interface."
    },{
        Imagepath : "/lang.svg",
        Heading : "In Multiple Languages",
        Description : "For Our Application Language is not a barrier. We provide English, Hindi, Marathi as Software Language."
    },{
        Imagepath : "/easytouse.svg",
        Heading : "Easy To Use",
        Description : "Requirement : Basic Computer Knowledge"
    }]

  return (
    <>
       <div className='card-p'>
      {featureslist.map((feature, index) => (
        <div key={index} className='fea-card'>
            {/* div-card to fea-card css need to modify */}
          <img src={feature.Imagepath} className='fea-img' alt="" />
          <div>
            <h3>{feature.Heading}</h3>
            <p className='card-desc'>{feature.Description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default FeatureCard
