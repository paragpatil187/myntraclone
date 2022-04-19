import "./Navelement.css"

import { Link } from "react-router-dom";

export const Navelement = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="/menhomepage">
            <a href="#" className="men-link">
              MEN
            </a>
          </Link>

          <div className="bigcontainer">
            <div className="nav-column">
              <Link to="/products">
                <h3>Topwear</h3>
              </Link>

              <ul>
                <li>
                  <a href="">Topwear</a>
                </li>
                <li>
                  <a href="">T-Shirts</a>
                </li>
                <li>
                  <a href="">Casual Shirts</a>
                </li>
                <li>
                  <a href="">Formal Shirts</a>
                </li>
                <li>
                  <a href="">Sweatshirts</a>
                </li>
                <li>
                  <a href="">Sweaters</a>
                </li>
                <li>
                  <a href="">Jackets</a>
                </li>
                <li>
                  <a href="">Blazers & Coats</a>
                </li>
                <li>
                  <a href="">Suits</a>
                </li>
                <li>
                  <a href="">Rain Jackets</a>
                </li>
                <hr />
                <h3>Indian & Festive Wear</h3>
                <li>
                  <a href="">Indian & Festive Wear</a>
                </li>
                <li>
                  <a href="">Kurtas & Kurta Sets</a>
                </li>
                <li>
                  <a href="">Sherwanis</a>
                </li>
                <li>
                  <a href="">Nehru Jackets</a>
                </li>
                <li>
                  <a href="">Dhotis</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Bottom Wear</h3>
              <ul>
                <li>
                  <a href="#">Jeans</a>
                </li>
                <li>
                  <a href="#">Casual Trousers</a>
                </li>
                <li>
                  <a href="#">Formal Trousers</a>
                </li>
                <li>
                  <a href="#">Shorts</a>
                </li>
                <li>
                  <a href="#">Track Pants & Joggers</a>
                </li>
                <hr />

                <h3>Innerwear & Sleepwear</h3>
                <li>
                  <a href="#">Briefs & Trunks</a>
                </li>
                <li>
                  <a href="#">Boxers</a>
                </li>
                <li>
                  <a href="#">Vests</a>
                </li>
                <li>
                  <a href="#">Sleepwear & Loungewear</a>
                </li>
                <li>
                  <a href="#">Thermals</a>
                </li>
                <hr />
                <h3>Plus Size</h3>
              </ul>

              <h3>Footwear</h3>
              <ul>
                <li>
                  <a href="#">Casual Shoes</a>
                </li>
                <li>
                  <a href="#">Sports Shoes</a>
                </li>
                <li>
                  <a href="#">Formal Shoes</a>
                </li>
                <li>
                  <a href="#">Sneakers</a>
                </li>
                <li>
                  <a href="#">Sandals & Floaters</a>
                </li>
                <li>
                  <a href="#">Flip Flops</a>
                </li>
                <li>
                  <a href="#">Socks</a>
                </li>
                <hr />
                <h3>Personal Care & Grooming</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Sports & Active Wear</h3>
              <ul>
                <li>
                  <a href="#">Sports Shoes</a>
                </li>
                <li>
                  <a href="#">Sports Sandals</a>
                </li>
                <li>
                  <a href="#">Active T-Shirts</a>
                </li>
                <li>
                  <a href="#">Track Pants & Shorts</a>
                </li>
                <li>
                  <a href="#">Tracksuits</a>
                </li>
                <li>
                  <a href="#">Jackets & Sweatshirts</a>
                </li>
                <li>
                  <a href="#">Sports Accessories</a>
                </li>
                <li>
                  <a href="#">Swimwear</a>
                </li>
                <hr />
                <h3>Gadgets</h3>
                <li>
                  <a href="#">Smart Wearables</a>
                </li>
                <li>
                  <a href="#">Fitness Gadgets</a>
                </li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Speakers</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="orange">Fashion Accessories</h3>
              <ul>
                <li>
                  <a href="#">Wallets</a>
                </li>
                <li>
                  <a href="#">Belts</a>
                </li>
                <li>
                  <a href="#">Trimmers</a>
                </li>
                <li>
                  <a href="#">Ties, Cufflinks & Pocket Squares</a>
                </li>
                <li>
                  <a href="#">Caps & Hats</a>
                </li>
                <li>
                  <a href="#">Mufflers, Scarves & Gloves</a>
                </li>
                <li>
                  <a href="#">Phone Cases</a>
                </li>
                <li>
                  <a href="#">Rings & Wristwear</a>
                </li>
                <li>
                  <a href="#">Helmets</a>
                </li>
                <hr />
                <h3>Bags & Backpacks</h3>
                <h3>Luggages & Trolleys</h3>
              </ul>

              <h3 className="orange">Brands</h3>
              <ul>
                <li>
                  <a href="#">Driving shoes</a>
                </li>
                <li>
                  <a href="#">Espadrilles</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link to="/womenhomepage">
            {" "}
            <a href="#" className="women-link">
              WOMEN
            </a>
          </Link>

          <div className="bigcontainer">
            <div className="nav-column">
              <Link to="/womensproducts">
                <h3>Indian & Fusion Wear</h3>
              </Link>

              <ul>
                <li>
                  <a href="">Kurtas & Suits</a>
                </li>
                <li>
                  <a href="">Kurtis, Tunics & Tops</a>
                </li>
                <li>
                  <a href="">Ethnic Wear</a>
                </li>
                <li>
                  <a href="">Leggings, Salwars & Churidars</a>
                </li>
                <li>
                  <a href="">Skirts & Palazzos</a>
                </li>
                <li>
                  <a href="">Dress Materials</a>
                </li>
                <li>
                  <a href="">Lehenga Cholis</a>
                </li>
                <li>
                  <a href="">Dupattas & Shawls</a>
                </li>
                <li>
                  <a href="">Jackets</a>
                </li>

                <hr />
                <h3>Belts, Scarves & More</h3>
                <h3>Watches & Wearables</h3>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Western Wear</h3>
              <ul>
                <li>
                  <a href="#">Dresses</a>
                </li>
                <li>
                  <a href="#">Jumpsuits</a>
                </li>
                <li>
                  <a href="#">Tops</a>
                </li>
                <li>
                  <a href="#">Jeans</a>
                </li>
                <li>
                  <a href="#">Trousers & Capris</a>
                </li>
                <li>
                  <a href="#">Shorts & Skirts</a>
                </li>

                <hr />

                <h3>Sunglasses & Frames</h3>
              </ul>

              <h3>Footwear</h3>
              <ul>
                <li>
                  <a href="#">Casual Shoes</a>
                </li>
                <li>
                  <a href="#">Boots</a>
                </li>
                <li>
                  <a href="#">Sandals & Floaters</a>
                </li>
                <li>
                  <a href="#">Flip Flops</a>
                </li>
                <li>
                  <a href="#">Flats</a>
                </li>
                <hr />
                <h3>Sports & Active Wear</h3>
                <li>
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <a href="#">Footwear</a>
                </li>
                <li>
                  <a href="#">Sports Accessories</a>
                </li>
                <li>
                  <a href="#">Sports Equipment</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Lingerie & Sleepwear</h3>
              <ul>
                <li>
                  <a href="#">Bra</a>
                </li>
                <li>
                  <a href="#">Briefs</a>
                </li>
                <li>
                  <a href="#">Shapewear</a>
                </li>
                <li>
                  <a href="#">Sleepwear & Loungewear</a>
                </li>
                <li>
                  <a href="#">Swimwear</a>
                </li>
                <li>
                  <a href="#">Camisoles & Thermals</a>
                </li>
                <hr />
                <h3>Beauty & Personal Care</h3>
                <li>
                  <a href="#">Makeup</a>
                </li>
                <li>
                  <a href="#">Skincare</a>
                </li>
                <li>
                  <a href="#">Premium Beauty</a>
                </li>
                <li>
                  <a href="#">Lipsticks</a>
                </li>
                <li>
                  <a href="#">Fragrances</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="orange">Gadgets</h3>
              <ul>
                <li>
                  <a href="#">Smart Wearables</a>
                </li>
                <li>
                  <a href="#">Fitness Gadgets</a>
                </li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Speakers</a>
                </li>

                <hr />
                <h3>Jewellery</h3>
                <li>
                  <a href="#">Fashion Jewellery</a>
                </li>
                <li>
                  <a href="#">Fine Jewellery</a>
                </li>
                <li>
                  <a href="#">Earrings</a>
                </li>
              </ul>

              <h3 className="orange">Backpacks</h3>
              <hr />
              <ul>
                <li>
                  <a href="#">Driving shoes</a>
                </li>
                <li>
                  <a href="#">Espadrilles</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <a href="#">KIDS</a>
          <div className="bigcontainer">
            <div className="nav-column">
              <h3 className="orange">Boys Clothing</h3>
              <ul>
                <li>
                  <a>T-Shirts</a>
                </li>
                <li>
                  <a>Shirts</a>
                </li>
                <li>
                  <a>Shorts</a>
                </li>
                <li>
                  <a>Jeans</a>
                </li>
                <li>
                  <a>Trousers</a>
                </li>
                <li>
                  <a>Clothing Sets</a>
                </li>
                <li>
                  <a>Ethnic Wear</a>
                </li>
                {/* <li><a>Track Pants & Pyjamas</a></li>
                        <li><a>Jacket, Sweater & Sweatshirts</a></li>
                        <li><a>Party Wear</a></li>
                        <li><a>Innerwear & Thermals</a></li>
                        <li><a>Nightwear & Loungewear</a></li>
                        <li><a>Value Packs</a></li> */}
              </ul>

              <h3 className="orange">Girls Clothing</h3>
              <ul>
                <li>
                  <a>Dresses</a>
                </li>
                <li>
                  <a>Tops</a>
                </li>
                <li>
                  <a>Tshirts</a>
                </li>
                <li>
                  <a>Clothing Sets</a>
                </li>
                <li>
                  <a>Lehenga choli</a>
                </li>
                <li>
                  <a>Kurta Sets</a>
                </li>
                <li>
                  <a>Party wear</a>
                </li>
                <li>
                  <a>Dungarees & Jumpsuits</a>
                </li>
                <li>
                  <a>Skirts & shorts</a>
                </li>
                {/* <li><a>Tights & Leggings</a></li>
                            <li><a>Jeans, Trousers & Capris</a></li>
                            <li><a>Jacket, Sweater & Sweatshirts</a></li>
                            <li><a>Innerwear & Thermals</a></li>
                            <li><a>Nightwear & Loungewear</a></li>
                            <li><a>Value Packs</a></li> */}
              </ul>
            </div>

            <div className="nav-column">
              <h3>Footwear</h3>
              <ul>
                <li>
                  <a>Casual Shoes</a>
                </li>
                <li>
                  <a>Flipflops</a>
                </li>
                <li>
                  <a>Sports Shoes</a>
                </li>
                <li>
                  <a>Flats</a>
                </li>
                <li>
                  <a>Sandals</a>
                </li>
                <li>
                  <a>Heels</a>
                </li>
                <li>
                  <a>School Shoes</a>
                </li>
                <li>
                  <a>Socks</a>
                </li>
                <hr />
                <h3>Toys</h3>

                <li>
                  <a>Learning & Development</a>
                </li>
                <li>
                  <a>Activity Toys</a>
                </li>
                <li>
                  <a>Soft Toys</a>
                </li>
                <li>
                  <a>Action Figure / Play set</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Infants</h3>
              <ul>
                <li>
                  <a>Bodysuits</a>
                </li>
                <li>
                  <a>Rompers & Sleepsuits</a>
                </li>
                <li>
                  <a>Clothing Sets</a>
                </li>
                <li>
                  <a>Tshirts & Tops</a>
                </li>
                <li>
                  <a>Dresses</a>
                </li>
                <li>
                  <a>Bottom wear</a>
                </li>
                <li>
                  <a>Winter Wear</a>
                </li>
                <li>
                  <a>Innerwear & Sleepwear</a>
                </li>
                <li>
                  <a>Infant Care</a>
                </li>
              </ul>
              <hr />
              <h3>Home & Bath</h3>
            </div>

            <div className="nav-column">
              <h3>Kids Accessories</h3>
              <ul>
                <li>
                  <a>Bags & Backpacks</a>
                </li>
                <li>
                  <a>Watches</a>
                </li>
                <li>
                  <a>Jewellery & Hair accessory</a>
                </li>
                <li>
                  <a>Sunglasses</a>
                </li>
                <li>
                  <a>Masks & Protective Gears</a>
                </li>
                <li>
                  <a>Caps & Hats</a>
                </li>
                <hr />

                <h3>Brands</h3>
                <li>
                  <a>H&M</a>
                </li>
                <li>
                  <a>Max Kids</a>
                </li>
                <li>
                  <a>Pantaloons</a>
                </li>
                <li>
                  <a>United Colors Of Benetton Kids</a>
                </li>
                <li>
                  <a>YK</a>
                </li>
                <li>
                  <a>U.S. Polo Assn. Kids</a>
                </li>
                <li>
                  <a>Mothercare</a>
                </li>
                <li>
                  <a>HRX</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <a href="#">HOME&LIVING</a>

          <div className="bigcontainer">
            <div className="nav-column">
              <h3 className="orange">Bed Linen & Furnishing</h3>
              <ul>
                <li>
                  <a>Bedsheets</a>
                </li>
                <li>
                  <a>Bedding Sets</a>
                </li>
                <li>
                  <a>Blankets, Quilts & Dohars</a>
                </li>
                <li>
                  <a>Pillows & Pillow Covers</a>
                </li>
                <li>
                  <a>Bed Covers</a>
                </li>
                <hr />
                <h3>Flooring</h3>
                <h3>Carpets</h3>
                <h3>Floor Mats & Dhurries</h3>
                <h3>Door Mats</h3>
              </ul>

              <h3 className="orange">Bath</h3>
              <ul>
                <li>
                  <a>Bath Towels</a>
                </li>
                <li>
                  <a>Hand & Face Towels</a>
                </li>
                <li>
                  <a>Beach Towels</a>
                </li>
                <li>
                  <a>Towels Set</a>
                </li>
                <li>
                  <a>Bath Rugs</a>
                </li>
                <li>
                  <a>Bath Robes</a>
                </li>
                <li>
                  <a>Bathroom Accessories</a>
                </li>
                <hr />
                <h3>Lamps & Lighting</h3>
                <li>
                  <a>Floor Lamps</a>
                </li>
                <li>
                  <a>Ceiling Lamps</a>
                </li>
                <li>
                  <a>Table Lamps</a>
                </li>
                <li>
                  <a>Wall Lamps</a>
                </li>
                <li>
                  <a>Outdoor Lamps</a>
                </li>
                <li>
                  <a>String Lights</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Home Décorr</h3>
              <ul>
                <li>
                  <a>Plants & Planters</a>
                </li>
                <li>
                  <a>Aromas & Candles</a>
                </li>
                <li>
                  <a>Clocks</a>
                </li>
                <li>
                  <a>Mirrors</a>
                </li>
                <li>
                  <a>Wall Décor</a>
                </li>
                <li>
                  <a>Wall Shelves</a>
                </li>
                <li>
                  <a>Fountains</a>
                </li>
                <li>
                  <a>Showpieces & Vases</a>
                </li>
                <hr />
                <h3>Cushions & Cushion Covers</h3>
                <h3>Curtains</h3>
                <h3>Home Gift Sets</h3>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Kitchen & Table</h3>
              <ul>
                <li>
                  <a>Dinnerware & Serveware</a>
                </li>
                <li>
                  <a>Cups and Mugs</a>
                </li>
                <li>
                  <a>Bakeware & Cookware</a>
                </li>
                <li>
                  <a>Kitchen Storage & Tools</a>
                </li>
                <li>
                  <a>Bar & Drinkware</a>
                </li>
                <li>
                  <a>Table Covers & Furnishings</a>
                </li>
                <hr />
                <h3>Storage</h3>
                <h3>Organisers</h3>
                <h3>Hooks & Holders</h3>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Brands</h3>
              <ul>
                <li>
                  <a>Home Centre</a>
                </li>
                <li>
                  <a>Spaces</a>
                </li>
                <li>
                  <a>D'Decor</a>
                </li>
                <li>
                  <a>Portico New York</a>
                </li>
                <li>
                  <a>Pure Home & Living</a>
                </li>
                <li>
                  <a>Swayam</a>
                </li>
                <li>
                  <a>Raymond Home</a>
                </li>
                <li>
                  <a>Maspar</a>
                </li>
                <li>
                  <a>Corelle</a>
                </li>
                <li>
                  <a>Trident</a>
                </li>
                <li>
                  <a>Cortina</a>
                </li>
                <li>
                  <a>Story@Home</a>
                </li>
                <li>
                  <a>Random</a>
                </li>
                <li>
                  <a>Ellementry</a>
                </li>
                <li>
                  <a>ROMEE</a>
                </li>
                <li>
                  <a>SEJ by Nisha Gupta</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <a href="#">BEAUTY</a>
          <div className="bigcontainer">
            <div className="nav-column">
              <h3 className="orange">Makeup</h3>
              <ul>
                <li>
                  <a>Lipstick</a>
                </li>
                <li>
                  <a>Lip Gloss</a>
                </li>
                <li>
                  <a>Lip Liner</a>
                </li>
                <li>
                  <a>Mascara</a>
                </li>
                <li>
                  <a>Eyeliner</a>
                </li>
                <li>
                  <a>Kajal</a>
                </li>
                <li>
                  <a>Eyeshadow</a>
                </li>
                <li>
                  <a>Compact</a>
                </li>
                <li>
                  <a>Nail Polish</a>
                </li>
              </ul>

              <h3>Skincare, Bath & Body</h3>
              <ul>
                <li>
                  <a>Face Moisturiser</a>
                </li>
                <li>
                  <a>Cleanser</a>
                </li>
                <li>
                  <a>Masks & Peel</a>
                </li>
                <li>
                  <a>Sunscreen</a>
                </li>
                <li>
                  <a>Serum</a>
                </li>
                <li>
                  <a>Face Wash</a>
                </li>
                <li>
                  <a>Body Scrub</a>
                </li>
                <li>
                  <a>Hand Cream</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Haircare</h3>
              <ul>
                <li>
                  <a>Shampoo</a>
                </li>
                <li>
                  <a>Conditioner</a>
                </li>
                <li>
                  <a>Hair Cream</a>
                </li>
                <li>
                  <a>Hair Oil</a>
                </li>
                <li>
                  <a>Hair Gel</a>
                </li>
                <li>
                  <a>Hair Color</a>
                </li>
                <li>
                  <a>Hair Serum</a>
                </li>
                <li>
                  <a>Hair Accessory</a>
                </li>
                <hr />
                <h3>Fragrances</h3>
                <li>
                  <a>Perfume</a>
                </li>
                <li>
                  <a>Deodorant</a>
                </li>
                <li>
                  <a>Body Mist</a>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Appliances</h3>
              <ul>
                <li>
                  <a>Hair Straightener</a>
                </li>
                <li>
                  <a>Hair Dryer</a>
                </li>
                <li>
                  <a>Epilator</a>
                </li>

                <hr />
                <h3>Men's Grooming</h3>
                <li>
                  <a>Trimmers</a>
                </li>
                <li>
                  <a>Beard Oil</a>
                </li>
                <li>
                  <a>Hair Wax</a>
                </li>
                <hr />

                <h3>Baby Care</h3>
                <h3>Masks</h3>
              </ul>
            </div>

            <div className="nav-column">
              <h3>Beauty Gift & Makeup Set</h3>
              <ul>
                <li>
                  <a>Beauty Gift</a>
                </li>
                <li>
                  <a>Makeup Kit</a>
                </li>
                <hr />

                <h3>Premium Beauty</h3>
                <h3>Wellness & Hygiene</h3>

                <hr />
                <h3>Top Brands</h3>
                <li>
                  <a>Lakme</a>
                </li>
                <li>
                  <a>Maybelline</a>
                </li>
                <li>
                  <a>LOreal</a>
                </li>
                <li>
                  <a>Bath & Body Works</a>
                </li>
                <li>
                  <a>THE BODY SHOP</a>
                </li>

                <li>
                  <a>Nivea</a>
                </li>
                <li>
                  <a>Lotus Herbals</a>
                </li>
                <li>
                  <a>LOreal Professionnel</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <a href="#">STUDIO</a>
          <div className="bigcontainer">
            <div className="nav-column-studio">
              <div>
                <img
                  style={{ marginLeft: "40%" }}
                  src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                />
                <br />
                <p style={{ marginLeft: "18%" }}>
                  Your daily inspiration for everything fashion
                </p>

                <img
                  style={{ width: "400px", height: "200px", marginLeft: "12%" }}
                  src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                />
                <button
                  style={{
                    width: "200px",
                    height: "40px",
                    marginLeft: "25%",
                    marginBottom: "10px",
                  }}
                >
                  EXPLORE STUDIO
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};