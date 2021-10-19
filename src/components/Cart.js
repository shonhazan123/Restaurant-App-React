/* eslint-disable jsx-a11y/anchor-is-valid */
import "../assets/css/basket.css";

function Cart({ items, remove }) {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "0";
  };

  return (
    <div id="mySidenav" className="sidenav">
      <a href="#" className="closebtn" onClick={closeNav}>
        &times;
      </a>
      <div className="container" id="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Cart</h3>
            <hr />
            <div className="table-responsive" id="table">
              <table className="table">
                <thead id="table-header">
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody id="table-body">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <strong>{item.name}</strong>
                      </td>
                      <td>{item.qty}</td>

                      <td id="remove">
                        <i
                          onClick={() => remove(item)}
                          className="far fa-trash-alt"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Checkout</h3>

            <button
              className="btn btn-success d-flex justify-content-between align-items-baseline"
              id="checkout"
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
