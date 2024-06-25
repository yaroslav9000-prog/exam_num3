import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MainMenu from "../MainMenu/MainMenu";
import "./MainLayout.css";


function MainLayout(): JSX.Element {
    
    
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <aside>
                <MainMenu/>
            </aside>
            <main>
                <Main />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;
