import MainHeader from "./MainHeader";

function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}

export default Layout;
