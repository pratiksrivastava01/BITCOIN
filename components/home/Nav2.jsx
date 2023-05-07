import React from "react";

const Nav2 = () => {
  return (
    <>
      <div className="flex flex-col sm:hidden mt-[4rem] items-center bg-[#002E73] p-6">
        {/* <div className=""> */}
        <ul className="flex flex-row gap-[3rem] text-[white]">
          <li>
            <a href="/speakers" className="text-[white]  font-bold">
              Invited Speakers
            </a>
          </li>
          <li></li>
          <li>
            <a href="" className="text-[white] font-bold">
              Committe
            </a>
          </li>
          <li>
            <a href="" className="text-[white] font-bold">
              Call for Papers
            </a>
          </li>
          <li>
            <a href="" className="text-[white] font-bold">
              Paper Submission
            </a>
          </li>
          <li>
            <a href="" className="text-[white] font-bold">
              Sponsership
            </a>
          </li>
          {/* <li>
            <a href="" className="text-[white]">
              Paper Submission
            </a>
          </li> */}
        </ul>
        {/* </div> */}
      </div>
    </>
  );
};

export default Nav2;
