import React from "react";
import { motion } from "framer-motion";
const WeatherDetails = props => {
  return (
    <motion.div
      animate={{ y: -50 }}
      transition={{ duration: 2 }}
      className="my-32 text-gray-200 "
    >
      <h2 className="text-xl font-medium mb-10 md:text-3xl">Weather Details</h2>
      {props.result.name ? (
        <div>
          <div className="text-sm font-thin my-8 flex justify-between md:text-l">
            <div>
              <p>Temperature</p>
            </div>
            <div>
              <p>{props.result.main.temp}C</p>
            </div>
          </div>
          <div className="text-sm font-thin my-8 flex justify-between md:text-l">
            <div>
              <p>Humidity</p>
            </div>
            <div>
              <p>{props.result.main.humidity}%</p>
            </div>
          </div>
          <div className="text-sm my-8 font-thin flex justify-between md:text-l">
            <div>
              <p>Wind</p>
            </div>
            <div>
              <p>{props.result.wind.speed}km/h</p>
            </div>
          </div>
          <div className="text-sm my-8 font-thin flex justify-between md:text-l">
            <div>
              <p>Pressure</p>
            </div>
            <div>
              <p>{props.result.main.pressure}hPa</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
};

export default WeatherDetails;
