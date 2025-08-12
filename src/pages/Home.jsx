export default function Home() {
    return (
        <>
          <section className="hero">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <input type="button" name="submit" id="submit" value="Reserve a table"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className="specials">
            <h1>This weeks specials!</h1>
            <input type="button" name="submit" id="submit" value="Reserve a table"/>
            <div className="card-holder">
              <p>card1</p>
            </div>
            <div className="card-holder">
              <p>card2</p>
            </div>
            <div className="card-holder">
            <p>card3</p>
            </div>
          </section>

          <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="card-holder">
              <p>card1</p>
            </div>
            <div className="card-holder">
              <p>card2</p>
            </div>
            <div className="card-holder">
            <p>card3</p>
            </div>
            <div className="card-holder">
            <p>card4</p>
            </div>
          </section>

          <section className="about">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <input type="button" name="submit" id="submit" value="Reserve a table"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </>
    )
}