/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import FloatingProfileView from "../subComponents/floatingProfileView";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function Navbar(props){
  const [floatProfile, SetfloatProfile] = useState(false);
  const [user, setuser] = useState("");

  useEffect(() => {
    var access_cookies = localStorage.getItem("access_token")
    if (access_cookies) {

      var decoded = jwt_decode(JSON.parse(access_cookies)['access_token'])
      console.log(decoded);
      setuser(decoded);
    }
  }, [props]);
  return (
    <>
      <div className="">
        <div className="w-[100%] h-[3.8rem] drop-shadow-sm">
          <div>
            <div className=" w-[100%] h-[3.8rem] fixed bg-white">
              <div className="h-[3.8rem] flex justify-between items-center p-auto max-w-[98vw]">
                <div className="flex gap-7 items-center">
                  <Link href={"/"}>
                    <img
                      crossOrigin="anonymous"
                      src="/logo.svg"
                      className="cursor-pointer  w-[10rem] h-[2rem] ml-[.8rem] "
                      alt=""
                    />
                  </Link>
                  <Link href={"/microservices"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Microservices
                    </h3>
                  </Link>
                  <Link href={"/projects"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Projects
                    </h3>
                  </Link>
                  <Link href={"/sandbox"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Sandbox
                    </h3>
                  </Link>
                  <Link href={"/datasets"}>
                    <h3 className="cursor-pointer hover:text-blue-900">
                      Datasets
                    </h3>
                  </Link>
                </div>
                <div>
                  {user ? (
                    <div className="avatar" onClick={() => {
                      SetfloatProfile((x) => {
                        if (x === true) {
                          return false;
                        } else {
                          return true;
                        }
                      });
                    }}>
                    <div className="avatar__letters">
                        {user.given_name[0] + user.family_name[0]}
                    </div>
                </div>
                    
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                  <div className="component z-2">
                    {floatProfile ? <FloatingProfileView /> : ""}
                  </div>
                </div>
              </div>
              <div className=" bg-black">
                <hr className="h-[1.19px]  bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
