import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Tab from "@/component/Tab";
import TabBox from "@/component/Tab";
import TodoBox from "@/component/TodoBox";
import AddTodo from "@/component/AddTodo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h1 style={{ fontSize: "1.5em" }}>Todo</h1>
        <TodoBox />
      </>
    </>
  );
}
