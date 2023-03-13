import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MUS6025, MUS6026, MUS6080, MUS6090 } from "../../data";
import StudentModal from "./StudentModal";

const MainDisplayTable = (p) => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [filteredData, setFilteredData] = useState(p.data[selectedModule].data);
  const [focusStudent, setFocusStudent] = useState(null);

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
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center">
          <p className="text-lg">
            Viewing <span className="font-bold">{filteredData.length}</span>{" "}
            student
            {filteredData.length === 1 ? "" : "s"}
          </p>
          <input
            // className="ml-4 "
            className="h-10 px-2 py-4 ml-4 text-sm bg-white border-2 border-gray-300 rounded-lg w-36 focus:outline-none"
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
        <div>
          <div className="flex flex-row items-center">
            <p className="mr-2 text-lg">Department:</p>
            <select className="h-10 pl-5 pr-10 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none">
              <option value="">Music</option>
            </select>
            <p className="ml-4 mr-2 text-lg">Program:</p>
            <select
              className="h-10 pl-5 pr-10 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              {p.data.map((module, index) => (
                <option value={index} key={index}>
                  {getModuleCode(module)}
                </option>
              ))}
            </select>
          </div>
          <p className="mt-2 text-sm italic text-right text-gray-500">
            Click on a student for more information!
          </p>
        </div>
      </div>
      <div>
        <table className="w-full my-4 table-auto">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-2">Reg No.</th>
              <th className="px-4 py-2">{`{Module} - 40Cr`}</th>
              <th className="px-4 py-2">{`{Module} - 40Cr`}</th>
              <th className="px-4 py-2">{`{Module} - 50Cr`}</th>
              <th className="px-4 py-2">{`{Module} - 50Cr`}</th>
              <th className="px-4 py-2">WMG</th>
              {/* <th className="px-4 py-2"></th> */}
            </tr>
          </thead>
          <tbody className="">
            {filteredData.map((student, index) => (
              <tr
                key={index}
                className="transition cursor-pointer odd:bg-gray-100 even:bg-white hover:bg-gray-200"
                onClick={() => setFocusStudent(student)}
              >
                <td className="px-4 py-2 border">{student["Surname"]}</td>
                <td className="px-4 py-2 border">{student["Forename"]}</td>
                <td className="px-4 py-2 border">{student["Reg No."]}</td>
                <td className="px-4 py-2 border">{student["Reg. Status"]}</td>
                <td className="px-4 py-2 border">{student["Module Code"]}</td>
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
                {/* <td
                  className={`border px-4 py-2 ${
                    isNaN(student["2nd Grade"]) && student["2nd Grade"] !== "-"
                      ? "bg-yellow-200"
                      : student["2nd Grade"] < 40
                      ? "bg-red-200"
                      : ""
                  }`}
                >
                  {student["2nd Grade"]}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <AnimatePresence>
        {focusStudent && (
          <StudentModal
            focusStudent={focusStudent}
            setFocusStudent={setFocusStudent}
          />
        )}
      </AnimatePresence> */}
      <StudentModal
        focusStudent={focusStudent}
        setFocusStudent={setFocusStudent}
      />
    </div>
  );
};

export default MainDisplayTable;
