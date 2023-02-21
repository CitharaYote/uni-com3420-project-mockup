import React, { useState } from "react";
import { MUS6025, MUS6026, MUS6080, MUS6090 } from "../../data";

const MainDisplayTable = (p) => {
  const [selectedModule, setSelectedModule] = useState(0);
  //   console.log(p.data);

  const getModuleCode = (data) => {
    // the data object will be an object with {data, errors, meta}
    // find the meta.fields array and return the index of the "Module Code" field
    // and return the data at that index from the first row of data

    // const moduleCodeIndex = data.meta.fields.indexOf("Module Code");
    // console.log(data);
    return data.data[0]["Module Code"];
  };
  return (
    <div className={`${p.className}`}>
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg">
          Viewing{" "}
          <span className="font-bold">
            {p.data[selectedModule].data.length}
          </span>{" "}
          student
          {p.data[selectedModule].data.length === 1 ? "" : "s"}
        </p>
        <select
          className="border-2 border-gray-300 bg-white h-10 pl-5 pr-10 rounded-lg text-sm focus:outline-none"
          onChange={(e) => setSelectedModule(e.target.value)}
        >
          {p.data.map((module, index) => (
            <option value={index} key={index}>
              {getModuleCode(module)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table className="table-auto w-full my-4">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-2">Surname</th>
              <th className="px-4 py-2">Forename</th>
              <th className="px-4 py-2">Reg No.</th>
              <th className="px-4 py-2">Reg. Status</th>
              <th className="px-4 py-2">Module Code</th>
              <th className="px-4 py-2">1st Grade</th>
              <th className="px-4 py-2">2nd Grade</th>
            </tr>
          </thead>
          <tbody className="">
            {p.data[selectedModule].data.map((student, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition"
              >
                <td className="border px-4 py-2">{student["Surname"]}</td>
                <td className="border px-4 py-2">{student["Forename"]}</td>
                <td className="border px-4 py-2">{student["Reg No."]}</td>
                <td className="border px-4 py-2">{student["Reg. Status"]}</td>
                <td className="border px-4 py-2">{student["Module Code"]}</td>
                <td
                  className={`border px-4 py-2 ${
                    student["1st Grade"] < 40 ? "bg-red-200" : ""
                  }`}
                >
                  {student["1st Grade"]}
                </td>
                <td
                  className={`border px-4 py-2 ${
                    student["2nd Grade"] < 40 ? "bg-red-200" : ""
                  }`}
                >
                  {student["2nd Grade"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDisplayTable;
