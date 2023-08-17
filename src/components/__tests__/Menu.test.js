import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import RestaurentMenu from "../RestaurentMenu";
import Header from "../Header";
import Cart from "../Cart";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test(" Add Items to cart ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurentMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-1 items");

  //console.log(addBtn);
});

test(" Check the items in the cart ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurentMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  const cart = body.getByTestId("cart");
  // fireEvent.click(cart)

  const cartMenuList = body.getByTestId("cart-menu-list");
  expect(cartMenuList.children.length).toBe(1);
});
