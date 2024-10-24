import Link from "next/link";
import localFont from "next/font/local";

const anonymous = localFont({
  src: "../../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function ContactSection() {
  return (
    <div>
      <h1 className={`${anonymous.className}`}>contatos</h1>
      <p>email: gustavobarretohv@live.com</p>
      <p>telefone: (85) 99915-7089</p>
      <Link href={"https://www.linkedin.com/in/gustavo-holzmann/"}>
        linkedin: /gusholz
      </Link>
    </div>
  );
}
