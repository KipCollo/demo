import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Apple Watch",
    image: "./apple_watch_series_7_1.png",
    price: 3000,
  },
  { id: 2, name: "Samsung Phone", image: "./a53_1.png", price: 8000 },
  { id: 3, name: "Head Phones", image: "./beats_studio_3-1.png", price: 2000 },
  { id: 4, name: "Sony Watch", image: "./sony smart2.webp", price: 3000 },
];

export default function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [cartSummaryVisible, setCartSummaryVisible] = useState(false);
  const [cartListVisible, setCartListVisible] = useState(true);

  const cartCount = cartItem.length;

  function handleCartSummary() {
    if (cartCount === 0) return;
    setCartSummaryVisible(!cartSummaryVisible);
    setCartListVisible(!cartListVisible);
  }

  return (
    <div>
      <CartNavBar cartCount={cartCount} openSummary={handleCartSummary} />
      {cartListVisible && (
        <CartList cartItem={cartItem} setCartItem={setCartItem} />
      )}
      {cartSummaryVisible && <CartSummary cartItem={cartItem} />}
    </div>
  );
}

function CartNavBar({ cartCount, openSummary }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <a
        href="#come"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "20px",
          marginRight: "20px",
          display: "inline-block",
          padding: "12px",
        }}
        onClick={openSummary}
      >
        Cart
      </a>

      {cartCount !== 0 && (
        <p
          style={{
            position: "absolute",
            top: "-17px",
            right: "15px",
            color: "red",
            fontSize: "18px",
            fontWeight: "600",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          {cartCount}
        </p>
      )}
    </div>
  );
}

function CartSummary({ cartItem, itemNo, onAddItemNo, onRemoveItemNo }) {
  return (
    <div style={{ margin: "20px auto", width: "70vw" }}>
      <ul style={{ listStyle: "none" }}>
        {cartItem.map((item) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <img src={item.image} alt={item.name} style={{ width: "50px" }} />
              <h4>{item.name}</h4>
            </div>

            <CartItemNumber
              item={item}
              itemNo={itemNo}
              onAddItemNo={onAddItemNo}
              onRemoveItemNo={onRemoveItemNo}
            />
          </li>
        ))}
      </ul>

      <div style={{ marginLeft: "90px" }}>
        <strong style={{ fontSize: "20px", textTransform: "uppercase" }}>
          Total
        </strong>
        {/* <span>{cartItem}</span> */}
      </div>
    </div>
  );
}

function CartItemNumber({ item, itemNo, onAddItemNo, onRemoveItemNo }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 12px",
      }}
    >
      <p style={{ fontSize: "24px" }}>
        <span
          style={{
            fontSize: "20px",
            paddingRight: "12px",
            cursor: "pointer",
          }}
          onClick={onRemoveItemNo}
        >
          -
        </span>
        {itemNo}
        <span
          style={{ fontSize: "20px", paddingLeft: "12px", cursor: "pointer" }}
          onClick={onAddItemNo}
        >
          +
        </span>
      </p>
      <p style={{ fontSize: "20px", fontWeight: "500" }}>
        Ksh {item.price * itemNo}{" "}
      </p>
    </div>
  );
}

function CartList({ cartItem, setCartItem, onAddItemNo, onRemoveItemNo }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        margin: "20px",
        gap: "15px",
      }}
    >
      {items.map((item) => (
        <CartItem
          item={item}
          key={item.name}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      ))}
    </div>
  );
}

function CartItem({
  item,
  cartItem,
  setCartItem,
  onAddItemNo,
  onRemoveItemNo,
}) {
  const [itemNo, setItemNo] = useState(1);

  function handleAddItemNo() {
    setItemNo((itemNo) => itemNo + 1);
  }

  function handleRemoveItemNo() {
    if (itemNo <= 1) return;
    setItemNo((itemNo) => itemNo - 1);
  }
  function handleAddCart() {
    if (cartItem.length === 0 && !itemInCart) setCartItem([item]);
    setCartItem((cartItem) => [...cartItem, item]);
  }

  const itemInCart = cartItem.some((cartItems) => cartItems.id === item.id);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #000",
      }}
    >
      <img
        src={item.image}
        alt="watch"
        style={{
          width: "inherit",
          height: "300px",
          display: "block",
          objectFit: "contain",
        }}
      />
      <h4 style={{ fontSize: "28px", textAlign: "center", color: "green" }}>
        {item.name}
      </h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
        dolor sit.
      </p>

      <CartItemNumber
        item={item}
        itemNo={itemNo}
        onAddItemNo={handleAddItemNo}
        onRemoveItemNo={handleRemoveItemNo}
      />

      {itemInCart ? (
        <Button bgColor="green" disabled>
          Already In Cart
        </Button>
      ) : (
        <Button onAddItem={handleAddCart} bgColor="#66a80f">
          Add to Cart{" "}
        </Button>
      )}
    </div>
  );
}

function Button({ bgColor, onAddItem, children }) {
  return (
    <button
      style={{
        width: "100%",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        fontSize: "20px",
        cursor: "pointer",
        backgroundColor: bgColor,
      }}
      onClick={onAddItem}
    >
      {children}
    </button>
  );
}
