const data = [ 
 {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",    
 },
 {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
 },
 {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
 },  
];

export default function PopularDishes() {
    const listItems = data.map((dessert) => (
      <li key={dessert.id}>
        <strong>{dessert.title}</strong>: {dessert.description} - {dessert.price}
        <img
          src={dessert.image}
          alt={dessert.title}
          style={{ width: "150px", display: "block", marginTop: "10px" }}
        />
      </li>
    ));
  
    return (
      <div>
        <h1>Popular Dishes</h1>
        <ul>{listItems}</ul>
      </div>
    );
  }