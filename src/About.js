const About = () => {
    return (
        <div id="about">
            <div className="about-content">
                <div className="about-text">
                    <h1 className="restaurant-name">Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p className="description">Marco and Luca grew up in Modena, a small town in the northern Italy, where their mother and grandmother taught them to cook using traditional family recipes passed down through generations. <br /> <br /> At Little Lemon we carefully select the freshest, locally sourced ingredients and make everything from scratch.</p>
                </div>
                <div className="about-images">
                    <div className="image-top">
                        <img src='images/chris_liverani.jpg' alt="Photo of restaurant by Chris Liverani, Unsplash" />
                    </div>
                    <div className="image-bottom">
                        <img src='images/marissa_grootes.jpg' alt="Photo of dinner table by Marissa Grootes, Unsplash" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;