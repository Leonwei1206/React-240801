import "./App.css";
import { useState } from "react";
import Axios from "axios";
import React from "react";
import Todo from "./todo";

import { Link } from "react-router-dom";
import Apiget from "./Apiget";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [employeelist, setEmployeelist] = useState([]);

  const addEmployee = () => {
    console.log(name);
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
    }).then(() => {
      console.log("success");
      window.location.reload();
      alert("已新增到資料庫");
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeelist(response.data);
    });
  };

  return (
    <div className="App">
      <div className="d-flex flex-column mb-3">
        {/* 框架3層*/}
        <div className="p-2" id="Onelevel">
          {/*1層 */}
          <div className="d-flex flex-row-reverse">
            <div className="p-2" id="Goto">
              {/*Flex item 1*/}
              <nav aria-label="breadcrumb" id="nav1">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/introduce">Introduce</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/Topics">Topics</Link>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="p-2" id="Goto">
              {/*Flex item 2*/}
            </div>
            <div className="p-2" id="Goto">
              {/*Flex item 3*/}
            </div>
          </div>
        </div>
        <div className="p-2" id="second-backgrond">
          <br />
          <br />
          <div className="welcome-html">歡迎來到我的網頁練習及自我介紹</div>
          <div className="d-flex flex-row mb-3" id="ttss">
            <div className="p-2" id="flex1"></div>
            <div className="p-2" id="flexget">
              {/*2 of 3*/}
              <span style={{ display: "block" }}>{/*1 of 3*/}</span>

              <Todo />
            </div>
            <div className="p-2" id="flex3">
              {/*3 of 3*/}
              <div class="d-flex flex-column-reverse">
                <div class="p-2">
                  {/*Flex item 1*/}
                  <div className="getcenter">取得名稱和年齡</div>

                  <div className="APIget">
                    {/* 使用 Link 组件创建超链接 */}
                    <div className="d-flex flex-row-reverse">
                      <div
                        className="p-2"
                        style={{ width: "50%" }}
                        id="nameage"
                      >
                        Age：
                        {employeelist.map((val, key) => {
                          return (
                            <div key={val.id} className="getemployee">
                              {val.age}
                            </div>
                          );
                        })}
                        <br />
                      </div>
                      <div
                        className="p-2"
                        style={{ width: "50%" }}
                        id="nameage"
                      >
                        Name：
                        <br />
                        {employeelist.map((val, key) => {
                          return (
                            <div key={val.id} className="getemployee">
                              {val.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-2">
                  {/*Flex item 2*/}
                  <div className="form-item">
                    <label id="labelname">Name:</label>
                  </div>
                  <div id="center">
                    <input
                      id="input1"
                      type="text"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-item">
                    <label id="labelname">Age:</label>
                  </div>
                  <div id="center">
                    <input
                      id="input1"
                      type="number"
                      onChange={(event) => {
                        setAge(event.target.value);
                      }}
                    />

                    <div className="buttonflex">
                      <button
                        onClick={getEmployees}
                        id="button1"
                        type="button"
                        className="btn btn-secondary"
                      >
                        顯示
                      </button>
                      <button
                        id="button1"
                        type="button"
                        className="btn btn-secondary"
                        onClick={addEmployee}
                      >
                        Add
                      </button>
                      {/*<button id="button1"onClick={addEmployee}>Add Employee</button> */}
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="p-2" id="flex1">
          </div>
          </div>
        </div>
        <div className="p-2" id="Apigetdemo">
          <div className="overlay"></div>

          <Apiget />
        </div>
      </div>
    </div>
  );
}

export default App;
