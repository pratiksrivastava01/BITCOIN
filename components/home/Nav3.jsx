import React from "react";

const Nav3 = () => {
  return (
    <>
      <div className="flex flex-col sm:hidden  items-center bg-[#FAC804] p-6">
        {/* <div className=""> */}
        <ul className="flex flex-row gap-[3rem] text-[white]">
          <li>
            <a href="/speakers" className="text-primary  font-bold">
              Invited Speakers
            </a>
          </li>
          <li></li>
          <li>
            <a href="" className="text-primary font-bold">
              Committe
            </a>
          </li>
          <li>
            <a href="" className="text-primary font-bold">
              Call for Papers
            </a>
          </li>
          <li>
            <a href="" className="text-primary font-bold">
              Paper Submission
            </a>
          </li>
          <li>
            <a href="" className="text-primary font-bold">
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

export default Nav3;
