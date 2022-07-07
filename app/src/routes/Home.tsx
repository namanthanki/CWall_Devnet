import "./styles/Home.css"

const Home = () => {
    return (
        <div className="hero-container">
            <div className="intro-container">
                <div className="intro-text-container">
                    <h1 className="intro-heading">Slogan!!!</h1>
                    <p className="intro-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum commodi, nesciunt beatae facere asperiores adipisci. Porro sunt dolorem itaque facere nesciunt veritatis quo, qui perspiciatis consectetur doloremque ut quis totam?
                        Corrupti numquam quasi quas ea voluptates! Molestias nobis non ullam, ratione minima rem beatae. Modi mollitia consequatur perferendis qui. Dolores blanditiis deserunt iure perferendis quia accusantium labore quam ut pariatur!
                    </p>
                </div>
                <div className="intro-buttons-container">
                    <button>Explore Walls</button>
                    <button>Create Walls</button>
                </div>
            </div>
            <div className="features-container">
                <div className="feautres-heading">
                    <h2>Features</h2>
                </div>
                <div className="features-cardboxes-container">
                    <div className="cardbox">
                        <div className="cardbox-logo">

                        </div>
                        <div className="cardbox-title">
                            <h3>Community Driven</h3>
                        </div>
                        <div className="cardbox-body">
                            <p>
                                Each decision and improvements of the CWall will take place through DAO. If you have an authority of the wall then you are in the DAO 💫
                            </p>
                        </div>
                    </div>

                    <div className="cardbox">
                        <div className="cardbox-logo">
                            
                        </div>
                        <div className="cardbox-title">
                            <h3>NFT Collection</h3>
                        </div>
                        <div className="cardbox-body">
                            <p>
                                With CWall NFT Collection, you can use your GNEs for converting the art/photographs on your wall as a NFT.
                            </p>
                        </div>
                    </div>

                    <div className="cardbox">
                        <div className="cardbox-logo">
                            
                        </div>
                        <div className="cardbox-title">
                            <h3>Earn</h3>
                        </div>
                        <div className="cardbox-body">
                            <p>
                                By maintaining the best artworks/photographs amongst all the other walls, stand a chance to receive monthly rewards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;