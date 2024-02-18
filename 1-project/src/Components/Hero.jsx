const Hero =() => {

    return (
        <main className="hero container">

            <div className="hero-content"> <h1>Your Choice the best for shoes </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>

            <div className="hero-button">
                <button>Shop Now</button>
                <button className="btn">Category</button>

                <div className="Shopping">
                    <p>Also Available On</p>

                    <div className="Brand-icon">
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                        <img src="/images/amazon.png" alt="amazon-logo" />
                    </div>
                </div>
            </div>

            </div>

            <div className="hero-image">    
            </div>
            <img src="/images/shoe_image.png" alt="Shoes-logo" />
        </main>
    )

}

export default Hero;