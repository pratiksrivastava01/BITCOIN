import React from "react";
import styles from "./Notification.module.css";

const notification = () => {
  return (
    <div className="flex flex-row ">
      <div className="bg-[#002256] p-4 text-[white] sm:text-lg tfont-bold text-2xl">
        {" "}
        Notification
      </div>
      <div className="bg-[#FAC804] overflow-hidden">
        <div className={`${styles.animate}`}>
          {" "}
          Lorem ipsum dolor sit amet{" "}
          <span>
            {" "}
            consectetur, adipisicing elit. Doloremque autem asperiores{" "}
          </span>{" "}
          doloribus magni aspernatur, sequi quisquam quasi at!Lorem ipsum dolor
          <span>sita</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            eos odit atque fugiat iusto possimus quisquam sed laboriosam
            commodi? Nam autem ex accusamus, nostrum deleniti, facere ratione
            quibusdam velit rem tempore tempora placeat soluta ullam, tenetur
            quod reiciendis. Ex placeat odio illo. Illum dolore accusamus autem
            quisquam necessitatibus maiores cum.
          </span>
        </div>
      </div>
    </div>
  );
};

export default notification;
