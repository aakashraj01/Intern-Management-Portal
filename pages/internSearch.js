import Head from "next/head";
import Image from "next/image";
import React, { useContext } from "react";
import { User } from "../context/allcontexts";
import Link from "next/link";
import Router from "next/router";
import FloatingButton from "../components/mainComponents/floatingButton";

export default function InternSearch() {
  const { canGoBack, setcanGoBack } = useContext(User);
  setcanGoBack(false);
  return (
    <div className="h-[88.8vh] w-[100%] ">
      <FloatingButton enable={true} />
      <Head>
        <title>Siemens</title>
        <meta name="description" content="Generated by " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* <Link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Berkshire+Swash&family=Exo+2:wght@300&family=Roboto+Condensed:wght@300&family=Staatliches&family=Varela+Round&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div className="h-[88.8vh] w-[100%] absolute z-[-1]">
        {/* <img
          crossOrigin="anonymous"
          src="proj.png"
          className={"h-[88.8vh] w-[100%] "}
          width="100vw"
          height="100%"
          alt="Siemens"
        /> */}
      </div>
      <div className="w-[100%] h-[100%] items-center justify-center flex">
        <div>
          <div className="stroke-black drop-shadow-[0px_1px_1px_rgba(0,0,0,0.400)]">
            <img
              crossOrigin="anonymous"
              src="logo.svg"
              className="w-[10rem] h-[2rem] "
              alt="LogoSiemens"
            />
          </div>
          <h3 className="italic text-[1.6rem] tracking-wide text-gray-600 font-[ui-sans-serif] pb-3 ">
            Intern Work Search
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <input
                id="mainSearchInp"
                className=" p-2 w-[80vw] border-2 outline-none border-[#009999] bg-slate-100"
                type="text"
                placeholder="Search Here..."
              />
            </div>
            <div className="w-[100%] flex justify-center gap-[4rem] mt-1">
              <a
                onClick={(e) => {
                  if (document.getElementById("mainSearchInp").value) {
                    Router.push({
                      pathname: "/mainPanel",
                      query: {
                        value: document.getElementById("mainSearchInp").value,
                      },
                    });
                  }
                }}
                className="bg-[#099999] cursor-pointer  py-2 px-8 mt-5 text-white "
              >
                Search
              </a>
              <Link href={"dataRepresent"}><a className="bg-[#099999]  py-2 px-8 mt-5 text-white ">
                  {/* <button className="bg-[#EAB543] rounded-md py-2 px-8 mt-5 hover:bg-[#d3a33b] hover:rounded-3xl transition-all duration-300"> */}
                  Explore
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
