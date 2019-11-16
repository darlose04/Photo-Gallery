import React from "react";

const PurchaseForm = () => {
  return (
    <div>
      <form>
        <label className="card-text">Photos</label>
        <div className="form-group">
          <select
            id="photo-value"
            className="form-control mb-3"
            onChange={photoChange}
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
  );
};

export default PurchaseForm;
