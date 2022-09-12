// Children 1

/*const Child1 = () => <div>Simple child</div>;

root.render(
  <StrictMode>
    <App children={<Child1/>} />
  </StrictMode>
);

export default function App({ children }) {
  return <div className="App">{children}</div>;
}*/

// Children 2

/*const Child2 = () => <div>Simple child</div>;

root.render(
  <StrictMode>
    <App>
    <Child2 />
    </App>
  </StrictMode>
);

export default function App({ children }) {
  return <div className="App">{children}</div>;
}*/

// Function as a child 1

/*root.render(
  <StrictMode>
    <App children={() => <div>Simple child</div>}/>
  </StrictMode>
);

export default function App({ children }) {
  return <div className="App">{children()}</div>;
}*/

// Function as a child 2

/*root.render(
  <StrictMode>
    <App>
      {() => <div>Simple child</div>}
    </App>
  </StrictMode>
);

export default function App({ children }) {
  return <div className="App">{children()}</div>;
}*/
