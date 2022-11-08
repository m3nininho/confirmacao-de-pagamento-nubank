import "./src/styles/generic/reset.css";
import "./src/styles/generic/generalSettings.css";

import "./src/styles/settings/colors.css";

import Header from "./src/components/Header";
import Confirmation from "./src/components/Confirmation";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

const $app = document.querySelector("#app");
const $header = Header();
const $confirmation = Confirmation();
const $contact = Contact();
const $footer = Footer();

$app.innerHTML = `
${$header}
${$confirmation}
${$contact}
${$footer}
`;
