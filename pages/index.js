import Head from "next/head";
import router from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const arr = [
    {
      img: "impSvg/pen.svg",
      header: "Microservice",
      content: "Host a new microservice on the platform",
      color: "#19c37d",
    },
    {
      img: "impSvg/3dmodel.svg",
      header: "Dataset",
      content: "How to add dataset to the platform",
      color: "#ef4146",
    },
    {
      img: "impSvg/questionmark.svg",
      header: "Sandbox",
      content: "Creating a sandbox",
      color: "#f4ac36",
    },
    {
      img: "impSvg/pageSearch.svg",
      header: "Documentation",
      content: "How to update the documentation on the portal",
      color: "#5436da",
    },
    {
      img: "impSvg/tag.svg",
      header: "Mics",
      content: "Guide to the PLO Sandboxing framework",
      color: "#dd5ce5",
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Overview-OpenAI API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="outercont max-w-full w-[93%] m-auto mt-[1.6rem] md:w-[50%] ">
        <div className="innerofoutercont">
          <div className="headerofcont">
            <h3 className="font-bold text-[2rem]">Product Lifecycle Optimization Resources</h3>
          </div>
          <div>
            <h3 className="font-medium text-[1.7rem] my-[1.6rem]">
              Start with lastest developments
            </h3>
          </div>
          <div>
            <div className="flex flex-row space-x-6">
              <div
                className=" relative  cursor-pointer hover:opacity-[0.87] transition-all duration-[0.4s]"
                onClick={() => {
                  router.replace(`internSearch`);
                }}
              >
                <img
                  src="https://cdn.openai.com/API/images/gradient_card_1.png"
                  alt=""
                  className="rounded-[5px] h-[105%] w-[110%] "
                />
                <div className=" absolute bottom-[0.6rem] left-[1.1rem] text-white text">
                  <h3 className="font-medium">Intern Search</h3>
                  <p className="italic ">Explore past projects by interns here</p>
                </div>
              </div>
              <div
                className="relative hover:opacity-[0.87] transition-all cursor-pointer duration-[0.4s]"
                onClick={() => {
                  router.replace(`sandbox/catalogueSearch`);
                }}
              >
                <img
                  src="https://cdn.openai.com/API/images/gradient_card_2.png"
                  alt=""
                  className="rounded-[5px] h-[105%] w-[110%]"
                />
                <div className=" absolute bottom-[0.6rem] left-[1.1rem] text-white">
                  <h3 className="font-medium">Search Catalogue</h3>
                  <p className ="italic">Sandbox to demonstrate search on open catalogue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-7 text-xl font-bold tracking-wide">
            <h3>Build An Application</h3>
          </div>
          <div>
            <div className="grid grid-flow-col gap-3 grid-rows-3 grid-cols-2">
              {arr.map((el) => {
                return (
                  <div className="flex space-x-3" key={el.content}>
                    <div
                      style={{ backgroundColor: `${el.color}` }}
                      className="p-4 rounded-md"
                    >
                      <img
                        className="invert"
                        src={el.img}
                        alt="Unable to Load!!"
                      />
                    </div>
                    <div>
                      <h1 className="font-medium">{el.header}</h1>
                      <p className="font-light text-sm tracking-wide">
                        {el.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <h1 className="font-bold mx-2">{"Siemens"}</h1>
        </a>
      </footer> */}
    </div>
  );
}
