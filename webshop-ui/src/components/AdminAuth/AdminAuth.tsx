interface props {
    children: JSX.Element
}

function AdminAuth({ children }:props):JSX.Element {
  return <div>{children}</div>;
}

export default AdminAuth;
