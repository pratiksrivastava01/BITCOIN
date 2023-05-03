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
        </div>
      </div>
    </div>
  );
};

export default notification;
