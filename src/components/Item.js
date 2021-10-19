const Item = ({ item, addItem, from, img }) => {
  return (
    <div className="col-sm-6 col-md-5 col-lg-4 item">
      <div className="box">
        <img className="rounded img-fluid dish-img" src={img} alt={item.name} />
        <h3 className="name">{item.name.toUpperCase()}</h3>
        <p className="description">{item.desc}</p>
        <div className="d-flex justify-content-around align-items-center">
          <button
            disabled={item.disabled}
            onClick={() => addItem(item, from)}
            className="btn btn-success"
            type="button"
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
