"use client";
import localFont from "next/font/local";
import styles from "./page.module.css";
import { useState } from "react";
import { ThemeSelector } from "@/components/themeSelector";
import LanguageSelector from "@/components/languageSelector";

const vinaSans = localFont({
  src: "../public/static/fonts/VinaSans-Regular.ttf",
  weight: "600",
});

const teko = localFont({
  src: "../public/static/fonts/Teko-VariableFont_wght.ttf",
  weight: "600",
});

const anonymous = localFont({
  src: "../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function Home() {
  const [isDarkModeActive, setisDarkModeActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleThemeToggle = (buttonType) => {
    if (buttonType == "light" && isDarkModeActive === false) return;
    if (buttonType == "dark" && isDarkModeActive === true) return;
    setisDarkModeActive((prevTheme) => (prevTheme === true ? false : true));
  };

  const handleLanguageChange = (language) => {
    if (language == "en" && selectedLanguage === "en") return;
    if (language == "pt" && selectedLanguage === "pt") return;
    setSelectedLanguage(() => (selectedLanguage === "en" ? "pt" : "en"));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeSelector
          isDarkModeActive={isDarkModeActive}
          handleThemeToggle={handleThemeToggle}
        />
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          handleLanguageChange={handleLanguageChange}
        />
        <h1 className={`${vinaSans.className}`}>Gustavo Holzmann</h1>
        <h2 className={`${teko.className}`}>developer & designer</h2>
        <section>
          <h3 className={`${anonymous.className}`}>about</h3>
          <p className={`${anonymous.className}`}>
            Olá, sou um graduado em Design pela Universidade Federal do Ceará,
            que desde o meio da graduação começou a trabalhar com programação.
            Desde então, tenho desenvolvido minha carreira me utilizando da
            minha experiência com o Design para enriquecer meu processos
            enquanto Programador{" "}
          </p>
        </section>
        <section>
          <h3 className={`${anonymous.className}`}>career</h3>
          <p className={`${anonymous.className}`}>
            tive a oportunidade de estagiar em participar de diversas
            oportunidades que se beneficiavam da minha experiência única como
            desenvolvedor:
          </p>
          <ul>
            <li className={`${anonymous.className}`}>
              bolsista do projeto Bolsa Arte: Design Computacional como meio de
              Expressão Artística
            </li>
            <li className={`${anonymous.className}`}>
              estagiário de programação do Museu da Imagem e do Som (MIS-CE)
            </li>
            <li className={`${anonymous.className}`}>
              desenvolvedor iOS no projeto Residência do Apple Developer Academy
            </li>
            <li className={`${anonymous.className}`}>
              Programador Fullstack na Datawise, uma startup de analíticos
            </li>
            <li className={`${anonymous.className}`}>
              Mentor de programação iOS e design no projeto Capacita Brasil
            </li>
          </ul>
        </section>
        <section>
          <h3 className={`${anonymous.className}`}>projetos</h3>
          <div>
            <span>project 1 placeholder</span>
            <span>project 2 placeholder</span>
            <span>project 3 placeholder</span>
            <span>project 4 placeholder</span>
            <span>project 5 placeholder</span>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <h2 className={`${anonymous.className}`}>thanks for the read!</h2>
      </footer>
    </div>
  );
}
