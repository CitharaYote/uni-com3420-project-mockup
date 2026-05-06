import React, { useState, useEffect } from "react";
// import Papa from "papaparse";
// import { MUS642, MUS6025, MUS6026, MUS6080, MUS6090 } from "../../data";
import MainDisplayTable from "./MainDisplayTable";
import MainDisplaySidebar from "./MainDisplaySidebar";

const MainDisplay = (p) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const MODULES = [MUS642, MUS6025, MUS6026, MUS6080, MUS6090];
  // read data from all csv files in src/data

  //   const [parseCount, setParseCount] = useState(0);

  const readData = () => {
    // read data from all csv files in src/data using papaparse
    // filename structure: `Student module marks - ${moduleCode} (${creditValue}).csv`
    // example: `Student module marks - WMG1001 (20).csv`

    // var data = [];

    // const parseFileName = (fileName) => {
    //   const moduleCode = fileName.split(" - ")[1].split(" (")[0];
    //   const creditValue = fileName.split(" (")[1].split(").")[0];
    //   return {
    //     moduleCode,
    //     creditValue,
    //   };
    // };

    // // const papaConfig = {
    // //   download: true,
    // //   header: true,
    // //   complete: (results, file) => {
    // //     // console.log("Parsing complete:", results, file);
    // //   },
    // //   error: (error, file) => {
    // //     console.log("Error while parsing:", error, file);
    // //   },
    // // };

    // // Papa.parsePromise = function (file) {
    // //   return new Promise(function (complete, error) {
    // //     Papa.parse(file, { download: true, header: true, complete, error });
    // //   });
    // // };

    // setLoading(true);
    // // wait for all files to be parsed before setting data
    // // Promise.all(
    // //   MODULES.map((file) => {
    // //     Papa.parsePromise(file.file).then((results) => {
    // //       console.log("Parsing complete:", results, file.file);
    // //       const { moduleCode, creditValue } = parseFileName(file.file);
    // //       //   console.log(moduleCode, creditValue);
    // //       console.log(results);
    // //       data.data &&
    // //         data.push({
    // //           moduleCode,
    // //           creditValue,
    // //           data: results.data,
    // //         });
    // //       resolve();
    // //     });
    // //   })
    // // ).then(() => {
    // //   console.log("All files parsed");
    // //   console.log(data);
    // //   setData(data);
    // //   setLoading(false);
    // // });
    // Promise.all(
    //   MODULES.map((file) => {
    //     // Papa.parsePromise(file.file).then((results) => {
    //     //   console.log("Parsing complete:", results, file.file);
    //     //   const { moduleCode, creditValue } = parseFileName(file.file);
    //     //   //   console.log(moduleCode, creditValue);
    //     //   console.log(results);
    //     //   data.data &&
    //     //     data.push({
    //     //       moduleCode,
    //     //       creditValue,
    //     //       data: results.data,
    //     //     });
    //     //   resolve();
    //     // });
    //     // console.log("Parsing file: " + file.file);
    //     return new Promise((resolve, reject) => {
    //       Papa.parse(file.file, {
    //         download: true,
    //         header: true,
    //         complete: resolve,
    //         error: reject,
    //       });
    //     });
    //   })
    // ).then((results) => {
    //   console.log("All files parsed");
    //   //   console.log(results);
    //   setData(results);
    //   setLoading(false);
    // });

    setData([
      {
        data: [
          {
            Surname: "Aqua",
            Forename: "Ruth",
            "Reg No.": "000000000",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "82",
            "2nd Grade": "-",
          },
          {
            Surname: "Blue",
            Forename: "Kathy",
            "Reg No.": "000000001",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "50",
            "2nd Grade": "-",
          },
          {
            Surname: "Clementine",
            Forename: "Ruth",
            "Reg No.": "000000002",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "51",
            "2nd Grade": "-",
          },
          {
            Surname: "Denim",
            Forename: "Rebecca",
            "Reg No.": "000000003",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "52",
            "2nd Grade": "-",
          },
          {
            Surname: "Ecru",
            Forename: "Emily",
            "Reg No.": "000000004",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "53",
            "2nd Grade": "-",
          },
          {
            Surname: "Forrest",
            Forename: "Gemma",
            "Reg No.": "000000005",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "54",
            "2nd Grade": "-",
          },
          {
            Surname: "Green",
            Forename: "Timothy",
            "Reg No.": "000000006",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "55",
            "2nd Grade": "-",
          },
          {
            Surname: "Harlequin",
            Forename: "Kyriaki",
            "Reg No.": "000000007",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Indigo",
            Forename: "Alyssa",
            "Reg No.": "000000008",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "57",
            "2nd Grade": "-",
          },
          {
            Surname: "Jade",
            Forename: "Andrea",
            "Reg No.": "000000009",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "5",
            "2nd Grade": "-",
          },
          {
            Surname: "KeyLime",
            Forename: "Diana",
            "Reg No.": "000000010",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Lemon",
            Forename: "Pim",
            "Reg No.": "000000011",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "DE",
            "2nd Grade": "-",
          },
          {
            Surname: "Magenta",
            Forename: "Lauren",
            "Reg No.": "000000012",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "70",
            "2nd Grade": "-",
          },
          {
            Surname: "Noir",
            Forename: "Hannah",
            "Reg No.": "000000013",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "67",
            "2nd Grade": "-",
          },
          {
            Surname: "Opal",
            Forename: "Miranda",
            "Reg No.": "000000014",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "52",
            "2nd Grade": "-",
          },
          {
            Surname: "Peach",
            Forename: "Nichola",
            "Reg No.": "000000015",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS642",
            "1st Grade": "68",
            "2nd Grade": "-",
          },
        ],
        errors: [],
        meta: {
          delimiter: ",",
          linebreak: "\r\n",
          aborted: false,
          truncated: false,
          cursor: 919,
          fields: [
            "Surname",
            "Forename",
            "Reg No.",
            "Reg. Status",
            "Module Code",
            "1st Grade",
            "2nd Grade",
          ],
        },
      },
      {
        data: [
          {
            Surname: "Aqua",
            Forename: "Ruth",
            "Reg No.": "000000000",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "57",
            "2nd Grade": "-",
          },
          {
            Surname: "Blue",
            Forename: "Kathy",
            "Reg No.": "000000001",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Clementine",
            Forename: "Ruth",
            "Reg No.": "000000002",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "67",
            "2nd Grade": "-",
          },
          {
            Surname: "Denim",
            Forename: "Rebecca",
            "Reg No.": "000000003",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "45",
            "2nd Grade": "-",
          },
          {
            Surname: "Ecru",
            Forename: "Emily",
            "Reg No.": "000000004",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "34",
            "2nd Grade": "-",
          },
          {
            Surname: "Forrest",
            Forename: "Gemma",
            "Reg No.": "000000005",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "17",
            "2nd Grade": "-",
          },
          {
            Surname: "Green",
            Forename: "Timothy",
            "Reg No.": "000000006",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "52",
            "2nd Grade": "-",
          },
          {
            Surname: "Harlequin",
            Forename: "Kyriaki",
            "Reg No.": "000000007",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "53",
            "2nd Grade": "-",
          },
          {
            Surname: "Indigo",
            Forename: "Alyssa",
            "Reg No.": "000000008",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "54",
            "2nd Grade": "-",
          },
          {
            Surname: "Jade",
            Forename: "Andrea",
            "Reg No.": "000000009",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "NC",
            "2nd Grade": "-",
          },
          {
            Surname: "KeyLime",
            Forename: "Diana",
            "Reg No.": "000000010",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "67",
            "2nd Grade": "-",
          },
          {
            Surname: "Lemon",
            Forename: "Pim",
            "Reg No.": "000000011",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "65",
            "2nd Grade": "-",
          },
          {
            Surname: "Magenta",
            Forename: "Lauren",
            "Reg No.": "000000012",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Noir",
            Forename: "Hannah",
            "Reg No.": "000000013",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Opal",
            Forename: "Miranda",
            "Reg No.": "000000014",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "67",
            "2nd Grade": "-",
          },
          {
            Surname: "Peach",
            Forename: "Nichola",
            "Reg No.": "000000015",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6025",
            "1st Grade": "68",
            "2nd Grade": "-",
          },
        ],
        errors: [],
        meta: {
          delimiter: ",",
          linebreak: "\r\n",
          aborted: false,
          truncated: false,
          cursor: 936,
          fields: [
            "Surname",
            "Forename",
            "Reg No.",
            "Reg. Status",
            "Module Code",
            "1st Grade",
            "2nd Grade",
          ],
        },
      },
      {
        data: [
          {
            Surname: "Aqua",
            Forename: "Ruth",
            "Reg No.": "000000000",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Blue",
            Forename: "Kathy",
            "Reg No.": "000000001",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "57",
            "2nd Grade": "-",
          },
          {
            Surname: "Clementine",
            Forename: "Ruth",
            "Reg No.": "000000002",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "58",
            "2nd Grade": "-",
          },
          {
            Surname: "Denim",
            Forename: "Rebecca",
            "Reg No.": "000000003",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Ecru",
            Forename: "Emily",
            "Reg No.": "000000004",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "64",
            "2nd Grade": "-",
          },
          {
            Surname: "Forrest",
            Forename: "Gemma",
            "Reg No.": "000000005",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "35",
            "2nd Grade": "-",
          },
          {
            Surname: "Green",
            Forename: "Timothy",
            "Reg No.": "000000006",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "67",
            "2nd Grade": "-",
          },
          {
            Surname: "Harlequin",
            Forename: "Kyriaki",
            "Reg No.": "000000007",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "65",
            "2nd Grade": "-",
          },
          {
            Surname: "Indigo",
            Forename: "Alyssa",
            "Reg No.": "000000008",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "64",
            "2nd Grade": "-",
          },
          {
            Surname: "Jade",
            Forename: "Andrea",
            "Reg No.": "000000009",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "70",
            "2nd Grade": "-",
          },
          {
            Surname: "KeyLime",
            Forename: "Diana",
            "Reg No.": "000000010",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "53",
            "2nd Grade": "-",
          },
          {
            Surname: "Lemon",
            Forename: "Pim",
            "Reg No.": "000000011",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "69",
            "2nd Grade": "-",
          },
          {
            Surname: "Magenta",
            Forename: "Lauren",
            "Reg No.": "000000012",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "69",
            "2nd Grade": "-",
          },
          {
            Surname: "Noir",
            Forename: "Hannah",
            "Reg No.": "000000013",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "NA",
            "2nd Grade": "-",
          },
          {
            Surname: "Opal",
            Forename: "Miranda",
            "Reg No.": "000000014",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "57",
            "2nd Grade": "-",
          },
          {
            Surname: "Peach",
            Forename: "Nichola",
            "Reg No.": "000000015",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6026",
            "1st Grade": "65",
            "2nd Grade": "-",
          },
        ],
        errors: [],
        meta: {
          delimiter: ",",
          linebreak: "\r\n",
          aborted: false,
          truncated: false,
          cursor: 936,
          fields: [
            "Surname",
            "Forename",
            "Reg No.",
            "Reg. Status",
            "Module Code",
            "1st Grade",
            "2nd Grade",
          ],
        },
      },
      {
        data: [
          {
            Surname: "Aqua",
            Forename: "Ruth",
            "Reg No.": "000000000",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "65",
            "2nd Grade": "-",
          },
          {
            Surname: "Blue",
            Forename: "Kathy",
            "Reg No.": "000000001",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "75",
            "2nd Grade": "-",
          },
          {
            Surname: "Clementine",
            Forename: "Ruth",
            "Reg No.": "000000002",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "69",
            "2nd Grade": "-",
          },
          {
            Surname: "Denim",
            Forename: "Rebecca",
            "Reg No.": "000000003",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "60",
            "2nd Grade": "-",
          },
          {
            Surname: "Ecru",
            Forename: "Emily",
            "Reg No.": "000000004",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "66",
            "2nd Grade": "-",
          },
          {
            Surname: "Forrest",
            Forename: "Gemma",
            "Reg No.": "000000005",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "58",
            "2nd Grade": "-",
          },
          {
            Surname: "Green",
            Forename: "Timothy",
            "Reg No.": "000000006",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "51",
            "2nd Grade": "-",
          },
          {
            Surname: "Harlequin",
            Forename: "Kyriaki",
            "Reg No.": "000000007",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "65",
            "2nd Grade": "-",
          },
          {
            Surname: "Indigo",
            Forename: "Alyssa",
            "Reg No.": "000000008",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "64",
            "2nd Grade": "-",
          },
          {
            Surname: "Jade",
            Forename: "Andrea",
            "Reg No.": "000000009",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "71",
            "2nd Grade": "-",
          },
          {
            Surname: "KeyLime",
            Forename: "Diana",
            "Reg No.": "000000010",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "52",
            "2nd Grade": "-",
          },
          {
            Surname: "Lemon",
            Forename: "Pim",
            "Reg No.": "000000011",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "71",
            "2nd Grade": "-",
          },
          {
            Surname: "Magenta",
            Forename: "Lauren",
            "Reg No.": "000000012",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "70",
            "2nd Grade": "-",
          },
          {
            Surname: "Noir",
            Forename: "Hannah",
            "Reg No.": "000000013",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "68",
            "2nd Grade": "-",
          },
          {
            Surname: "Opal",
            Forename: "Miranda",
            "Reg No.": "000000014",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "51",
            "2nd Grade": "-",
          },
          {
            Surname: "Peach",
            Forename: "Nichola",
            "Reg No.": "000000015",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6080",
            "1st Grade": "68",
            "2nd Grade": "-",
          },
        ],
        errors: [],
        meta: {
          delimiter: ",",
          linebreak: "\r\n",
          aborted: false,
          truncated: false,
          cursor: 936,
          fields: [
            "Surname",
            "Forename",
            "Reg No.",
            "Reg. Status",
            "Module Code",
            "1st Grade",
            "2nd Grade",
          ],
        },
      },
      {
        data: [
          {
            Surname: "Aqua",
            Forename: "Ruth",
            "Reg No.": "000000000",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "59",
            "2nd Grade": "-",
          },
          {
            Surname: "Blue",
            Forename: "Kathy",
            "Reg No.": "000000001",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "21",
            "2nd Grade": "-",
          },
          {
            Surname: "Clementine",
            Forename: "Ruth",
            "Reg No.": "000000002",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "33",
            "2nd Grade": "-",
          },
          {
            Surname: "Denim",
            Forename: "Rebecca",
            "Reg No.": "000000003",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "60",
            "2nd Grade": "-",
          },
          {
            Surname: "Ecru",
            Forename: "Emily",
            "Reg No.": "000000004",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "67",
            "2nd Grade": "-",
          },
          {
            Surname: "Forrest",
            Forename: "Gemma",
            "Reg No.": "000000005",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "81",
            "2nd Grade": "-",
          },
          {
            Surname: "Green",
            Forename: "Timothy",
            "Reg No.": "000000006",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "DE",
            "2nd Grade": "-",
          },
          {
            Surname: "Harlequin",
            Forename: "Kyriaki",
            "Reg No.": "000000007",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "NA",
            "2nd Grade": "-",
          },
          {
            Surname: "Indigo",
            Forename: "Alyssa",
            "Reg No.": "000000008",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "64",
            "2nd Grade": "-",
          },
          {
            Surname: "Jade",
            Forename: "Andrea",
            "Reg No.": "000000009",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "71",
            "2nd Grade": "-",
          },
          {
            Surname: "KeyLime",
            Forename: "Diana",
            "Reg No.": "000000010",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "52",
            "2nd Grade": "-",
          },
          {
            Surname: "Lemon",
            Forename: "Pim",
            "Reg No.": "000000011",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "56",
            "2nd Grade": "-",
          },
          {
            Surname: "Magenta",
            Forename: "Lauren",
            "Reg No.": "000000012",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "57",
            "2nd Grade": "-",
          },
          {
            Surname: "Noir",
            Forename: "Hannah",
            "Reg No.": "000000013",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "58",
            "2nd Grade": "-",
          },
          {
            Surname: "Opal",
            Forename: "Miranda",
            "Reg No.": "000000014",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "57",
            "2nd Grade": "-",
          },
          {
            Surname: "Peach",
            Forename: "Nichola",
            "Reg No.": "000000015",
            "Reg. Status": "Fully registered",
            "Module Code": "MUS6090",
            "1st Grade": "54",
            "2nd Grade": "-",
          },
        ],
        errors: [],
        meta: {
          delimiter: ",",
          linebreak: "\r\n",
          aborted: false,
          truncated: false,
          cursor: 936,
          fields: [
            "Surname",
            "Forename",
            "Reg No.",
            "Reg. Status",
            "Module Code",
            "1st Grade",
            "2nd Grade",
          ],
        },
      },
    ]);
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    console.log("loading: " + loading);
  }, [loading]);

  return (
    <div className={`${p.className}`}>
      <div className="flex flex-row justify-between">
        <p className="text-4xl font-bold text-gray-700">
          WMG Calculator Prototype
        </p>
        <div className="flex flex-col justify-center space-x-4 sm:flex-row sm:items-center">
          <button
            className="p-4 text-white transition rounded-lg w-36 bg-uospurple hover:bg-opacity-70 drop-shadow hover:drop-shadow-lg"
            onClick={readData}
          >
            <p>Add</p>
          </button>
          <button
            className="p-4 text-white transition rounded-lg w-36 bg-uospurple hover:bg-opacity-70 drop-shadow hover:drop-shadow-lg"
            onClick={readData}
          >
            <p>Print</p>
          </button>
          <button
            className="p-4 text-white transition rounded-lg w-36 bg-uospurple hover:bg-opacity-70 drop-shadow hover:drop-shadow-lg"
            onClick={readData}
          >
            <p>Overview</p>
          </button>
        </div>
      </div>
      <hr className="my-8" />
      {loading ? (
        <p className="text-2xl font-bold text-gray-400">Loading...</p>
      ) : (
        <div className="flex flex-row">
          <MainDisplayTable data={data} className="w-5/6" />
          <MainDisplaySidebar data={data} className="w-1/6" />
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
