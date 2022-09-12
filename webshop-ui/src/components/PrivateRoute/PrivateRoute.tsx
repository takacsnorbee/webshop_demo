interface props {
    children: JSX.Element
}

function PrivateRoute({ children }:props):JSX.Element {
  return children;
}

export default PrivateRoute;
