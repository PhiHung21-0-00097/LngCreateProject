"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const HTTP_GET_DATAUSER = "http://localhost:5000";

const UpdateUser = ({ params: { id } }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`${HTTP_GET_DATAUSER}/${id}`)
        .then((res) => {
          console.log(res);
          setName(res.data?.name);
          setDesc(res.data?.desc);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="container">
      <div className="flex bg-blue-500 justify-center item-center">
        <div className="w-1/2 bg-white rounded-md p-3 m-5">
          <form action="">
            <h2>Update User</h2>
            <div className="mb-2">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-2">
              <label>Desc</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button className="p-3 bg-green-500">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
