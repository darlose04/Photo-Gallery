import React from "react";

const Information = () => {
  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.8)",
    fontSize: "1.1rem",
  };

  return (
    <div className="card mt-2" style={purchasesStyle}>
      <div className="card-body">
        <h3 className="card-title text-white mb-3">
          <u>Print Information</u>
        </h3>
        <h5 className="card-subtitle mb-1 text-white">
          <strong>PHOTO PRINTS</strong>
        </h5>
        <p className="card-text mb-4">
          All Photo Prints are printed on Kodak Professional Endura Premier
          photo paper, which means your prints will last well over 100 years.
          All Photo Prints are printed on Luster photo paper and will be signed
          on the back. Please allow 1-2 weeks for processing for Photo Prints.
        </p>
        <h5 className="card-subtitle mb-1 text-white">
          <strong>CANVAS PRINTS</strong>
        </h5>
        <p className="card-text mb-4">
          All Canvas Prints are made with a print on Professional Photo Paper
          bonded onto museum quality canvas. The print is then wrapped around an
          artist's stretcher frame and comes ready to hang with a sawtooth
          hanger. The prints are 1.5" thick with the image mirrored around the
          edges of the canvas. All Canvas Prints will be signed on the back.
          Please allow for 1-2 weeks for processing for Canvas Prints.
        </p>
        <h5 className="card-subtitle mb-1 text-white">
          <strong>METAL PRINTS</strong>
        </h5>
        <p className="card-text">
          All Metal Prints are printed onto specially coated aluminum using a
          process called dye-sublimation. They come ready to hang with a
          floating frame mounted on the back. All Metal Prints come with square
          corners and have an ultra high gloss surface on white coated aluminum.
          Please allow 2-3 weeks for processing for Metal Prints.
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
