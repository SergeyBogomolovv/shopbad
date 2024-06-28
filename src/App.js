import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Balenciaga 10xl sneaker",
          img: "10xl.jpg",
          desc: "10XL Sneaker in grey and yellow mesh, TPU and rubber is from look 10 of Balenciaga Fall 24 Collection.",
          category: "Sneakers",
          price: "1000$",
        },
        {
          id: 2,
          title: "DOUBLE SLEEVE BOMBER",
          img: "bomber_balenci.jpg",
          desc: "Double Sleeve Bomber in black nylon",
          category: "Jackets",
          price: "100$",
        },
        {
          id: 3,
          title: "Off-White Tie Dye Contour Cargo Pant",
          img: "offwhite_pants.jpg",
          desc: "teal blue cotton tie-dye pattern mid-rise straight leg multiple cargo pockets belt loops front button",
          category: "Pants",
          price: "300$",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    console.log(this.state.orders);
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
