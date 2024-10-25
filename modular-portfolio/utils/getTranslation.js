import projectStrings from "../constants/translations";

export default function getTranslation(language) {
  return projectStrings[language];
}
