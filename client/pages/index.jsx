import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header.jsx";
import Main from "../components/main.jsx";
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <h3>Trasnsaction History</h3>
    </div>
  );
}
