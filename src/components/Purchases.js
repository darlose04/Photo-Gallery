import React from "react";

const Purchases = ({ photos }) => {
  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.7)"
    // width: "100%"
  };

  const photoSelection = () => {
    return photos.map(photo => (
      <option className="photoName" key={photo.id} value={photo.name}>
        {photo.name}
      </option>
    ));
  };

  let photoName;

  const photoChange = () => {
    photoName = document.getElementById("photo-value").value;

    // console.log(photoName);

    return photoName;
  };

  return (
    <div className="container">
      <div className="card about pl-2" style={purchasesStyle}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              className="header rounded float-left mt-3 ml-2 mb-3"
              src="http://lcwphotos.imgix.net/CottonCandySunrise.jpg"
              alt="headshot"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title card-about">
                Photo Selection & Purchase
              </h2>
              <p className="card-text font-weight-bold">$25.00+</p>
              <p className="card-text">Free shipping to the United States</p>
              <form>
                <label className="card-text">Photos</label>
                <div className="form-group">
                  <select
                    id="photo-value"
                    className="form-control mb-3"
                    // value="photoValue"
                    // onChange={photoChange}
                  >
                    <option>Select a Photo</option>
                    {photoSelection()}
                  </select>
                </div>
                <label className="card-text">Style</label>
                <div className="form-group">
                  <select className="form-control">
                    <option>Select a Style</option>
                    <option>8x10 Fine Art Print ($25.00)</option>
                    <option>8x10 Metal Print ($70.00)</option>
                    <option>11x14 Fine Art Print ($35.00)</option>
                    <option>11x14 Canvas Print ($65.00)</option>
                    <option>11x14 Metal Print ($105.00)</option>
                    <option>16x20 Fine Art Print ($60.00)</option>
                    <option>16x20 Canvas Print ($80.00)</option>
                    <option>16X20 Metal Print ($185.00)</option>
                    <option>24x36 Canvas Print ($150.00)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-2" style={purchasesStyle}>
        <div className="card-body">
          <h2 className="card-title text-white mb-3">
            <u>Print Information</u>
          </h2>
          <h5 className="card-subtitle mb-1 text-white">
            <strong>FINE ART PRINTS</strong>
          </h5>
          <p className="card-text mb-4">
            All Fine Art Prints are printed on Kodak Professional Endura Premier
            photo paper, which means your prints will last well over 100 years.
            All Fine Art Prints are printed on Luster photo paper and will be
            signed on the back. Please allow 1-2 weeks for processing for Fine
            Art Prints.
          </p>
          <h5 className="card-subtitle mb-1 text-white">
            <strong>CANVAS PRINTS</strong>
          </h5>
          <p className="card-text mb-4">
            All Canvas Prints are printed on archival-grade canvas that is
            UV-protected and waterproof. The prints are 0.75" thick with the
            image mirrored around the edge of the canvas. Canvas Prints come
            with a sawtooth hanger and will be signed on the back. Please allow
            for 2-3 weeks for processing for Canvas Prints.
          </p>
          <h5 className="card-subtitle mb-1 text-white">
            <strong>METAL PRINTS</strong>
          </h5>
          <p className="card-text">
            All Metal Prints are printed onto specially coated aluminum using a
            process called dye-sublimation. They come ready to hang with a
            floating frame mounted on the back. All Metal Prints come with
            square corners and have an ultra high gloss surface on white coated
            aluminum. Please allow 1-2 weeks for processing for Metal Prints.
          </p>
          <h3 className="card-title text-white">
            <u>Custom Orders</u>
          </h3>
          <p className="card-text">
            All prints are made to order with multiple sizing, texture, paper,
            mounting, framing, and medium options available. Contact me with
            your custom order ideas.
          </p>
          <p className="card-text">
            *Additional charges may apply for custom orders*
          </p>
          <h3 className="card-title text-white">
            <u>Production Partners</u>
          </h3>
          <ul className="card-text list-unstyled">
            <li>
              <h5>
                <strong>Bay Photo Lab</strong>
              </h5>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i> Scotts Valley, CA
            </li>
            <li>
              Bay Photo Lab prints all of my photos onto metal through a process
              called dye-sublimation. I chose Bay Photo lab because they offer
              high quality metal prints for a reasonable price.
            </li>
          </ul>
          <ul className="card-text list-unstyled">
            <li>
              <h5>
                <strong>Canvas Champ</strong>
              </h5>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i> Lawrenceville, GA
            </li>
            <li>
              This online canvas printing company prints all of my images onto
              canvas.
            </li>
          </ul>
          <ul className="card-text list-unstyled">
            <li>
              <h5>
                <strong>Nations Photo Lab</strong>
              </h5>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i> Md., United States
            </li>
            <li>
              This professional photo lab prints all of my images onto high
              quality photo paper.
            </li>
          </ul>
          <h3 className="card-title text-white">
            <u>Shipping & Returns</u>
          </h3>
          <ul className="card-text list-unstyled">
            <li>
              <strong>Made just for you. Ready to ship in 2-3 weeks.</strong>
            </li>
            <li>
              From Morrison, Colorado. Free shipping in the United States.
            </li>
            <li>
              <strong>Returns and exchanges accepted.</strong> Exceptions may
              apply
            </li>
            <li>Contact me within 14 days of delivery.</li>
            <li>Ship items back within 30 days of delivery.</li>
            <li>
              <strong>I don't accept cancellations</strong>. If there are any
              problems with your order, please contact me.
            </li>
            <li>
              Buyers are responsible for return shipping costs. If the item is
              not returned in its original condition, the buyer is responsible
              for any loss in value.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
