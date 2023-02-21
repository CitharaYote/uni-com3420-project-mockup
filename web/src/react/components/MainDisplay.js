import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { MUS642, MUS6025, MUS6026, MUS6080, MUS6090 } from "../../data";
import MainDisplayTable from "./MainDisplayTable";

const MainDisplay = (p) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const MODULES = [MUS642, MUS6025, MUS6026, MUS6080, MUS6090];
  // read data from all csv files in src/data

  //   const [parseCount, setParseCount] = useState(0);

  const readData = () => {
    // read data from all csv files in src/data using papaparse
    // filename structure: `Student module marks - ${moduleCode} (${creditValue}).csv`
    // example: `Student module marks - WMG1001 (20).csv`

    var data = [];

    const parseFileName = (fileName) => {
      const moduleCode = fileName.split(" - ")[1].split(" (")[0];
      const creditValue = fileName.split(" (")[1].split(").")[0];
      return {
        moduleCode,
        creditValue,
      };
    };

    // const papaConfig = {
    //   download: true,
    //   header: true,
    //   complete: (results, file) => {
    //     // console.log("Parsing complete:", results, file);
    //   },
    //   error: (error, file) => {
    //     console.log("Error while parsing:", error, file);
    //   },
    // };

    // Papa.parsePromise = function (file) {
    //   return new Promise(function (complete, error) {
    //     Papa.parse(file, { download: true, header: true, complete, error });
    //   });
    // };

    setLoading(true);
    // wait for all files to be parsed before setting data
    // Promise.all(
    //   MODULES.map((file) => {
    //     Papa.parsePromise(file.file).then((results) => {
    //       console.log("Parsing complete:", results, file.file);
    //       const { moduleCode, creditValue } = parseFileName(file.file);
    //       //   console.log(moduleCode, creditValue);
    //       console.log(results);
    //       data.data &&
    //         data.push({
    //           moduleCode,
    //           creditValue,
    //           data: results.data,
    //         });
    //       resolve();
    //     });
    //   })
    // ).then(() => {
    //   console.log("All files parsed");
    //   console.log(data);
    //   setData(data);
    //   setLoading(false);
    // });
    Promise.all(
      MODULES.map((file) => {
        // Papa.parsePromise(file.file).then((results) => {
        //   console.log("Parsing complete:", results, file.file);
        //   const { moduleCode, creditValue } = parseFileName(file.file);
        //   //   console.log(moduleCode, creditValue);
        //   console.log(results);
        //   data.data &&
        //     data.push({
        //       moduleCode,
        //       creditValue,
        //       data: results.data,
        //     });
        //   resolve();
        // });
        // console.log("Parsing file: " + file.file);
        return new Promise((resolve, reject) => {
          Papa.parse(file.file, {
            download: true,
            header: true,
            complete: resolve,
            error: reject,
          });
        });
      })
    ).then((results) => {
      console.log("All files parsed");
      //   console.log(results);
      setData(results);
      setLoading(false);
    });
  };

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    console.log("loading: " + loading);
  }, [loading]);

  return (
    <div className={`${p.className}`}>
      <div className="flex flex-row justify-between">
        <p className="text-4xl text-gray-700 font-bold">
          WMG Calculator Prototype
        </p>
        <button
          className="bg-black text-white p-4 hover:bg-opacity-70 transition rounded-lg drop-shadow hover:drop-shadow-lg"
          onClick={readData}
        >
          <p>Reload Data</p>
        </button>
      </div>
      <hr className="my-8" />
      {loading ? (
        <p className="text-gray-400 font-bold text-2xl">Loading...</p>
      ) : (
        <MainDisplayTable data={data} />
      )}
    </div>
  );
};

export default MainDisplay;
