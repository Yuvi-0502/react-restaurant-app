import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
//Check if logo is loaded

  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.jpeg");
  
});

test("Cart have 0 items", () => {
    //Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    
  //Check if logo is loaded
  
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0 items");
    
  });
