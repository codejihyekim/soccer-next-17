import style from "../../styles/Layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }){
  return (<div className={style.container}>
        <Nav/>
        <main className={style.main}>{children}</main>
        <Footer/>
      </div>
  );
}

