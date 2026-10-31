# cart Project

This demo shows how to use basic components,conditional rendering, list rendering, states and props.

- Components - I used functional way for craeting components with JSX for declarative approach of creating elements.
- State - Implemented using hooks for managing state.I did `state lifting` and used `derived state` for some components.
- props - Implemented props utilizing children prop for code reuse.
- Conditional rendering - Utilized logical && and ternary operator for rendering conditions.
- List rendering - Used map array method to render list.
- Styling - Used inline styling.

The resulting screenshot is

<img src="![cart](cart.png)>

The cart summary page -

<img src="![cart summary](CartSummary.png)>

## Challenges

The items number i.e if you already added item to cart and you need to increment item count does not work as expected. I tried lifting the state but that caused the item count to increment all items at once. I decided to create a reusable component and place the state in item componenty but it does not show the item incremented count in the cart summary.
