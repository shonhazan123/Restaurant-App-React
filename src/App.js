import "./assets/css/styles.css";
import Hamburger from "./assets/img/hamburger.jpg";
import Fries from "./assets/img/fries.jpg";
import Cacke from "./assets/img/cacke.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/box.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Client from "./components/Client";
import { useState, useEffect } from "react";

function App() {
  // IMPORT FROM DATA BASE

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data/")
      .then((res) => {
        if (res.ok) {
          console.log("res is ok");
          return res.json();
        }
      })
      .then((datas) => {
        setData(datas);
      });
  }, []);

  // DYNAMIC MENU CHAGE

  let [_firsts, changFirsts] = useState([]);
  let [_primarys, changePrimary] = useState([]);
  let [_desserts, changeDesserts] = useState([]);
  let _clients = [];

  // CHEKING TO SEE THAT DATA FINSHED TRANSFORM

  if (data.firsts) {
    _firsts = data.firsts;
    _primarys = data.primary;
    _desserts = data.desserts;
    _clients = data.clients;
  }

  // Basket
  const [basket, setBasket] = useState([]);
  const [basketDishNames, addName] = useState([]);
  const [loged, logIn] = useState(false);

  //--- INCASE A USER LOGED IN - MENU IS CHANGING ----
  const changeMenu = (clientName) => {
    const newClient = _clients.find(({ name }) => name === clientName);
    if (newClient) {
      logIn(true);
      const clientLimit = newClient.limit;

      //Firsts iterator
      for (let i = 0; i < clientLimit.length; i++) {
        _firsts.map((e) =>
          e.name === clientLimit[i] ? (e.disabled = true) : e
        );
      }
      //Primary iterator
      for (let i = 0; i < clientLimit.length; i++) {
        _primarys.map((e) =>
          e.name === clientLimit[i] ? (e.disabled = true) : e
        );
      }
      // Dessert iterator
      for (let i = 0; i < clientLimit.length; i++) {
        _desserts.map((e) =>
          e.name === clientLimit[i] ? (e.disabled = true) : e
        );
      }
      // sinking Data

      changFirsts(_firsts);
      changePrimary(_primarys);
      changeDesserts(_desserts);
    } else {
      alert("Sory! No User Was Found");
    }
  };
  //-------------------------------

  // Add to basket + Activating Menue restrictions //
  const addItem = (dish, frommenu) => {
    if (frommenu === "Primary") {
      _desserts.map((dessert) => (dessert.disabled = false));
      _primarys.map((primary) => (primary.disabled = true));
    }
    if (frommenu === "Desserts") {
      _desserts.map((dessert) => (dessert.disabled = true));
    }

    const hastype = basketDishNames.find(
      (basketitem) => basketitem.name === frommenu
    );
    if (!hastype) {
      addName([...basketDishNames, { name: frommenu }]);
    }

    const exist = basket.find((item) => item.id === dish.id);
    if (exist) {
      setBasket(
        basket.map((item) =>
          item.id === dish.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setBasket([...basket, { ...dish, qty: 1 }]);
    }

    // Check to see Menu limitation //

    if (dish.name === "tortia" || dish.name === "fried chiken") {
      _desserts[3].disabled = true;
    }
    if (dish.name === "pizza" || dish.name === "stake") {
      _desserts[2].disabled = true;
    }
  };

  // Remove from basket //
  const removeItem = (tempItem) => {
    // Check if the item exist or not
    const exist = basket.find((item) => item.id === tempItem.id);
    if (exist.qty === 1) {
      setBasket(basket.filter((item) => item.id !== tempItem.id));
    } else {
      setBasket(
        basket.map((item) =>
          item.id === tempItem.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  // ---- Only rednering after Data has been synced ---//
  if (data) {
    return (
      <div className="App">
        <div>
          <Header name="Mashabim Random Restuarant♥" basket={basket.length} />
          <Client changeMenu={changeMenu} />
          {loged ? (
            <div className="features-boxed">
              <br />
              <h4 className="features-boxed text-center">
                Your own Menu is redy!
              </h4>
            </div>
          ) : null}

          <Menu
            name="Firsts"
            desc='"Lets Get it Statrted In Here"'
            menu={_firsts}
            addItem={addItem}
            img={Fries}
          />

          <Menu
            name="Primary"
            desc="Can Order Only One Dish From Our Primarys!"
            menu={_primarys}
            addItem={addItem}
            img={Hamburger}
          />

          <Menu
            name="Desserts"
            desc="Desserts are for after. Make sure your First order your primary to order our desserts"
            menu={_desserts}
            addItem={addItem}
            img={Cacke}
          />

          <Cart items={basket} remove={removeItem} />
        </div>
      </div>
    );
  }
}

export default App;
