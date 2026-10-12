import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({children}) { return <><a className="skip-link" href="#main-content">Vai al contenuto</a><Navbar /><main id="main-content">{children}</main><Footer /></>; }
