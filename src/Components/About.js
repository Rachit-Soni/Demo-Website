import React from 'react'


export default function About() {
    return (
        <div>
        <img className= "aboutImage" src="https://dv2c9ihs6hqjp.cloudfront.net/assets/invisalign/about_header_2x1-a34ff534e77a5eef988dc8910335e73a9c78c8e797dc73ef7a2044d3d05ce6d9.jpg" alt="about Image"/>

        <div className = "container">
                <div className="row">
                    <div className="col-md-4 aboutHeads">
                        <h2>Transforming smiles. </h2> 
                        <h2>Transforming Lives.</h2>
                        <h2> Transforming an industry. </h2>
                    </div>
                    <div className="col-md-8 aboutPara">
                        <p>
                            At Align Technology, we believe a great smile can transform a person’s life, 
                            so we create technology that gives people the confidence to take on whatever’s next.
                        </p>
                        <p>
                            We revolutionized the orthodontic industry with the introduction of the Invisalign system, 
                            and we have never lost sight of that spirit of innovation. Our teams are constantly pushing the boundaries of what’s possible—from 3D 
                            printing technology to new aligner materials and new software algorithms that determine 
                            the optimal way to move teeth digitally—with one goal in mind: to help you get the smile you want.
                        </p>
                        <p>
                            Together with nearly 100,000 Invisalign-trained orthodontists and dentists in more than 90 countries, 
                            we have transformed over 7 million smiles. And that’s just the beginning.
                        </p>
                        <p>
                            We use the data from those millions of smiles and countless individual tooth movements to uncover insights 
                            that lead to more innovative ways to straighten teeth, including faster treatment times. 
                            And we believe we have the potential to enable and improve almost every type of orthodontic treatment for almost every kind of smile.
                        </p>
                    </div>
                </div>
        </div>    
        </div>
    )
}
