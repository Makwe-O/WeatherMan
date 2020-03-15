import React from "react";
import { motion } from "framer-motion";
import moment from "moment";
import { ReactComponent as Cloudy } from "../../assets/cloudy.svg";
const ResultTab = props => {
  return (
    <motion.div
      animate={{ y: -50 }}
      transition={{ duration: 2 }}
      className="text-gray-200 absolute bottom-0 mb-32 w-full flex flex-col items-start md:flex-row md:items-center"
    >
      {props.result.main ? (
        <>
          <div className="px-0 md:px-8">
            <h1 className="font-sans text-3xl font-semibold md:text-6xl">
              {props.result.main.temp}C
            </h1>
          </div>
          <div className=" px-0 md:px-8">
            <h2>{props.result.name}</h2>
            <p>
              {moment().format("LT")} - {moment().format("LL")}
            </p>
          </div>
          <div>
            <div className="w-8 items-center">
              <Cloudy />
            </div>

            <p>{props.result.weather[0].main}</p>
          </div>
        </>
      ) : (
        <h2>Please type a location in the search bar</h2>
      )}
    </motion.div>
  );
};

export default ResultTab;
