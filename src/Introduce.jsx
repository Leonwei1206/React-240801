import React from "react";
import "./Introduce.css";
import { Link } from "react-router-dom";
import Imageleon from "./image/leon.jpg";
import Gif002 from "./image/002.gif";
import Gif004 from "./image/004.gif";

function Introduce() {
  console.log("Introduce component rendered");

  return (
    <div className="#">
      <div className="d-flex flex-column mb-3">
        <div className="p-2" id="IntroduceOnelevel">
          {/*第一層*/}
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
        <div className="p-2" id="secondbg">
          {/*第2層*/}
          <br />
          <div className="d-flex flex-row mb-3" style={{ height: "70px" }}>
            <div className="p-2" id="Introducetitle">
              {/*Flex item 1*/}
            </div>
            <div className="p-2" id="Introducetitle">
              {/*Flex item 2*/}
              Introduce
            </div>
            <div className="p-2" id="Introducetitle">
              {/*Flex item 3*/}
              <img
                className="clouds"
                src={Gif004}
                alt="烏雲打雷"
             
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-3" id="secondFlex2">
            <div className="#" id="secondflexleft">
              {/*1 of 2*/}
              <div
                className="d-flex flex-column mb-3"
                id="flexleftcenter"
                style={{ width: "100%" }}
              >
                <div className="p-2" style={{ height: "35%", width: "100%" }}>
                  {/* 大頭貼圖*/}
                  {/*Flex item 1*/}
                  <div className="image-container">
                    <img src={Imageleon} className="rounded-image" alt="頭像" />
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    height: "5%",
                    width: "100%",
                  }}
                  id="centertext"
                >
                  {/*Flex item 2 簡單自介*/}
                  Name :<div id="ChineseType">劉鎧瑋</div>
                </div>
                <div
                  className="p-2"
                  style={{
                    height: "5%",
                    width: "100%",
                  }}
                  id="centertext"
                >
                  <div id="ChineseType2">出生：88/12/06</div>
                </div>
                <div
                  className="p-2"
                  style={{
                    height: "5%",
                    width: "100%",
                  }}
                  id="centertext"
                >
                  Come From :<div id="ChineseType">嘉義</div>
                </div>
                <div
                  className="p-2"
                  style={{
                    height: "5%",
                    width: "100%",
                  }}
                  id="centertext"
                >
                  <div id="ChineseType4">畢業：國立勤益科技大學</div>
                </div>
                <div
                  className="p-2"
                  style={{
                    height: "5%",
                    width: "100%",
                  }}
                  id="centertext"
                >
                  <div id="ChineseType2">科系：資訊工程系</div>
                </div>
                <div className="divduck">
                  <img className="duck" src={Gif002} alt="002"></img>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
            </div>
            

            <div className="p-2" id="secondflexright">
              {/*2 of 2*/}
              <div
                className="d-flex flex-column mb-3"
                style={{ width: "100%" }}
              >
                <div className="p-2">
                  {/*Flex item 1 自傳*/}
                  <div id="autobiography">自傳</div>
                </div>
                <div
                  className="p-2"
                 
                  id="introductionself"
                >
                  {/*Flex item 2*/}
                  <div className="introducetext">
                    我來自嘉義，從小有學硬筆字到了國小三年級後開始學書法，每到過年都會自己寫春聯，這算是一個比較特別的才藝。
                    要讀高中時開始要選科，而當時選的是資料處理科以為是偏工科，讀了之後才發現原來是商科，學了些經濟會計，也有學到計概跟程式，剛開始接觸程式時，覺得有點難，但只要解出來就會有成就感，也覺得能寫程式的人很厲害，
                    所以在大學選科時，就嘗試的跳到工科，資訊工程系，也順利地讓我轉科成功。
                    <div className="introducetext2">
                      大學四年中，我覺得學到最多東西的就是做專題的這一年，這組的專題總共有三人，除了學到程式相關的知識以外，還學習到團隊的配合、溝通、互相推進……等等，
                      也很開心遇到好的隊友，讓我們在製作過程中有問題都可以互相討論，也因為有問題都會互相討論，所以只要想歇下都會被間接的互相推進，心想應該要來更新進度，
                      我覺得是一個難忘的經驗。
                    </div>
                  </div>
                </div>

                <div className="p-2">{/*Flex item 3*/}<div
                className="d-flex flex-column mb-3"
                style={{ width: "100%"}}
              >
                <div
                  className="p-2"
                  id="Certificate"
                  
                >
                  {/*Flex item 1*/}證 照
                </div>
                <div
                  className="p-2"
                  id="Certificatetext"
                  
                >
                  {/*Flex item 2*/}
                  <ul className="ulleft">
                    <li>乙級軟體應用</li>
                    <li>丙級軟體應用</li>
                    <li>丙級網頁設計</li>
                    <li>丙級會計事務－人工記帳</li>
                    <li>丙級會計事務－資訊</li>
                    <li>丙級印前製程－圖文組版</li>
                  </ul>
                </div>
                
              </div></div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
