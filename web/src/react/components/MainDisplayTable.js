import React, { useEffect, useState } from "react";
import { MUS6025, MUS6026, MUS6080, MUS6090 } from "../../data";

const MainDisplayTable = (p) => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [filteredData, setFilteredData] = useState(p.data[selectedModule].data);

  useEffect(() => {
    setFilteredData(p.data[selectedModule].data);
  }, [selectedModule]);
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
        <div className="flex flex-row items-center">
          <p className="text-lg">
            Viewing <span className="font-bold">{filteredData.length}</span>{" "}
            student
            {filteredData.length === 1 ? "" : "s"}
          </p>
          <input
            // className=" ml-4"
            className="border-2 border-gray-300 bg-white h-10 w-36 px-2 py-4 rounded-lg text-sm focus:outline-none ml-4"
            // type="search"
            name="search"
            placeholder="Search..."
            onChange={(e) => {
              const search = e.target.value;
              const filtered = p.data[selectedModule].data.filter((student) => {
                return (
                  student["Surname"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  student["Forename"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  student["Reg No."]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  student["Reg. Status"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  student["Module Code"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  student["1st Grade"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  student["2nd Grade"]
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              });
              setFilteredData(filtered);
            }}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="text-lg mr-2">Department:</p>
          <select className="border-2 border-gray-300 bg-white h-10 pl-5 pr-10 rounded-lg text-sm focus:outline-none">
            <option value="">Music</option>
          </select>
          <p className="text-lg mr-2 ml-4">Module:</p>
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
            {filteredData.map((student, index) => (
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
                    isNaN(student["1st Grade"]) && student["1st Grade"] !== "-"
                      ? "bg-yellow-200"
                      : student["1st Grade"] < 40
                      ? "bg-red-200"
                      : ""
                  }`}
                >
                  {student["1st Grade"]}
                </td>
                <td
                  className={`border px-4 py-2 ${
                    isNaN(student["2nd Grade"]) && student["2nd Grade"] !== "-"
                      ? "bg-yellow-200"
                      : student["2nd Grade"] < 40
                      ? "bg-red-200"
                      : ""
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
