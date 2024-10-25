import localFont from "next/font/local";

const anonymous = localFont({
  src: "../../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function CareerList(props) {
  return (
    <div>
      <p>{props.texts[0]}</p>
      <ul style={{ marginTop: "12px" }}>
        <li className={`${anonymous.className}`}>{props.texts[1]}</li>
        <li className={`${anonymous.className}`}>{props.texts[2]}</li>
        <li className={`${anonymous.className}`}>{props.texts[3]}</li>
        <li className={`${anonymous.className}`}>{props.texts[4]}</li>
        <li className={`${anonymous.className}`}>{props.texts[5]}</li>
      </ul>
    </div>
  );
}
