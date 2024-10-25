"use client";
import localFont from "next/font/local";
import styles from "./page.module.css";
import { useState } from "react";
import ThemeSelector from "@/components/themeSelector";
import LanguageSelector from "@/components/languageSelector";
import ContentSection from "@/components/contentSection";
import ProjectsShowcase from "@/components/projectsShowcase";
import ContactSection from "@/components/contactSection";
import CareerList from "@/components/careerList";
import Footer from "@/components/footer";
import getTranslation from "@/utils/getTranslation";

const vinaSans = localFont({
  src: "../public/static/fonts/VinaSans-Regular.ttf",
  weight: "600",
});

const teko = localFont({
  src: "../public/static/fonts/Teko-VariableFont_wght.ttf",
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

  const texts = getTranslation(selectedLanguage);

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
        <h1 className={`${vinaSans.className}`}>{texts.name}</h1>
        <h2 className={`${teko.className}`}>{texts.callout}</h2>
        <ContentSection
          title={texts.about}
          content={texts.aboutText}
          isTextSection={true}
        />
        <ContentSection
          title={texts.career}
          isTextSection={true}
          content={
            <CareerList
              texts={[
                texts.carrerText,
                texts.careerListFirstItem,
                texts.careerListSecondItem,
                texts.careerListThirdItem,
                texts.careerListFourthItem,
                texts.careerListFifthItem,
              ]}
            />
          }
        />
        <ContentSection
          title={texts.projects}
          content={
            <ProjectsShowcase
              projects={[
                {
                  projectName: texts.firstProjectName,
                  projectDescription: texts.firstProjectDescription,
                  imageName: texts.firstProjectImage,
                  tags: ["frontend", "design"],
                },
                {
                  projectName: texts.secondProjectName,
                  projectDescription: texts.secondProjectDescription,
                  imageName: texts.secondProjectImage,
                  tags: ["gamedev", "design"],
                },
                {
                  projectName: texts.thirdProjectName,
                  projectDescription: texts.thirdProjectDescription,
                  imageName: texts.thirdProjectImage,
                  tags: ["gamedev", "design"],
                },
              ]}
            />
          }
        />
        <ContactSection />
      </main>
      <Footer text={texts.footerCallout} />
    </div>
  );
}
