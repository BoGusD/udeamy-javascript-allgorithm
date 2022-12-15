import classes from "./MealItem.module.css";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div></div>
    </li>
  );
}
