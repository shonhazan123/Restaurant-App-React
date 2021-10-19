import Item from "./Item";

const Menu = ({ name, desc, menu, addItem, img }) => {
  return (
    <section className="features-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">{name}</h2>
          <h5 className="text-center">{desc}</h5>
        </div>
        <div className="row justify-content-center features">
          {menu.map((first) => (
            <Item
              key={first.id}
              item={first}
              addItem={addItem}
              from={name}
              img={img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
