"use client"
import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const HTTP_GET_DATAUSER = "http://localhost:5000"
const Contact = () => {
  const [user, setUser] = useState([])
  // const [users, setUsers] = useState([
  //   {
  //     name: "A",
  //     desc: "B",
  //   },
  // ]);
  const course = [
    {
      name: "Otis",
      desc: "NHPH",
    },
    {
      name: "Phong Cùi",
      desc: "PNP",
    },
  ]
  useEffect(() => {
    axios
      .get(HTTP_GET_DATAUSER)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [])
  console.log(user)
  return (
    <div className="container">
      <div className="flex bg-blue-500 justify-center item-center">
        <div className="overflow-x-auto p-10">
          <Link href="/create" className="p-2 bg-green-500">
            Add +
          </Link>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Desc
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Setting
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {user.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {item.desc}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex gap-2">
                    <Link
                      href={`/update/${item._id}`}
                      className="bg-red-500 p-3 font-bold"
                    >
                      Edit
                    </Link>
                    <button className="bg-blue-500 p-3 font-bold">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contact
