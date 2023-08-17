import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURENT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURENT_DATA);
    },
  });
});

test("Shimmer load on homepage", () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
  
    // console.log(shimmer);
  });

  test("Shimmer load on homepage", () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
  
    // console.log(shimmer);
  });

test("Restaurants load on the Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")))
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20)

  //console.log(resList);
});

test("Search for string(food) on the Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")))
  
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {target:{
    value:"pizza",
  }})

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(4)

  console.log(resList.children);
});
