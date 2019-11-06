import React from "react";

const Information = () => {
  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.7)"
  };

  return (
    <div className="card mt-2" style={purchasesStyle}>
      <div className="card-body">
        <h3 className="card-title text-white mb-3">
          <u>Print Information</u>
        </h3>
        <h5 className="card-subtitle mb-1 text-white">
          <strong>FINE ART PRINTS</strong>
        </h5>
        <p className="card-text mb-4">
          All Fine Art Prints are printed on Kodak Professional Endura Premier
          photo paper, which means your prints will last well over 100 years.
          All Fine Art Prints are printed on Luster photo paper and will be
          signed on the back. Please allow 1-2 weeks for processing for Fine Art
          Prints.
        </p>
        <h5 className="card-subtitle mb-1 text-white">
          <strong>CANVAS PRINTS</strong>
        </h5>
        <p className="card-text mb-4">
          All Canvas Prints are printed on archival-grade canvas that is
          UV-protected and waterproof. The prints are 0.75" thick with the image
          mirrored around the edge of the canvas. Canvas Prints come with a
          sawtooth hanger and will be signed on the back. Please allow for 2-3
          weeks for processing for Canvas Prints.
        </p>
        <h5 className="card-subtitle mb-1 text-white">
          <strong>METAL PRINTS</strong>
        </h5>
        <p className="card-text">
          All Metal Prints are printed onto specially coated aluminum using a
          process called dye-sublimation. They come ready to hang with a
          floating frame mounted on the back. All Metal Prints come with square
          corners and have an ultra high gloss surface on white coated aluminum.
          Please allow 1-2 weeks for processing for Metal Prints.
        </p>
        <h3 className="card-title text-white">
          <u>Custom Orders</u>
        </h3>
        <p className="card-text">
          All prints are made to order with multiple sizing, texture, paper,
          mounting, framing, and medium options available. Contact me with your
          custom order ideas.
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
          <li>From Morrison, Colorado. Free shipping in the United States.</li>
          <li>
            <strong>Returns and exchanges accepted.</strong> Exceptions may
            apply.
          </li>
          <li>Contact me within 14 days of delivery.</li>
          <li>Ship items back within 30 days of delivery.</li>
          <li>
            <strong>I don't accept cancellations</strong>. If there are any
            problems with your order, please contact me.
          </li>
          <li>
            Buyers are responsible for return shipping costs. If the item is not
            returned in its original condition, the buyer is responsible for any
            loss in value.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
