import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const FloatingProfileView = () => {
  const [user, setuser] = useState("");

  useEffect(() => {
    var access_cookies = localStorage.getItem("access_token")
    if (access_cookies) {

      var decoded = jwt_decode(JSON.parse(access_cookies)['access_token'])
      console.log(decoded);
      setuser(decoded);
    }
  }, []);


  return (
    <div className="absolute  t-[2rem] translate-x-[-13rem] rounded-md  min-w-[14rem] block border-2 bg-white z-[109] border-slate-200 drop-shadow-lg shadow-xl">
      <div className="flex flex-col px-10 w-[100%]">
        <div className="pt-1 w-[100%] flex flex-col items-center gap-2">
          <p className="text-sm font-normal text-slate-800">{user.display_name} / {user.gid}</p>
        </div>
      </div>
      <hr className="w-[100%] mt-8" />
      <div>
        <div className="p-4 flex flex-col gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <h3>Profile</h3>
          </div>
          <div className="flex items-center gap-2 ">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <h4>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingProfileView;
