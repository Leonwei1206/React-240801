import React from "react";
import "./Topics.css";
import { Link } from "react-router-dom";
//import Gif004 from "./image/004.gif";
import Photo018 from "./image/018.jpg";
import Photo019 from "./image/019.jpg";
import Photo020 from "./image/020.jpg";
import Gif005 from "./image/005.gif";
import Topics2 from "./Topics2";
import Topics3 from "./Topics3";
import Topics4 from "./Topics4";
import Topics5 from "./Topics5";
import Topics6 from "./Topics6";
import Topics7 from "./Topics7";
import Topics8 from "./Topics8";
import Topics9 from "./Topics9";
import Topics10 from "./Topics10";
import Topics11 from "./Topics11";
import Topics12 from "./Topics12";
import Topics13 from "./Topics13";

function Topics() {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="p-2" id="IntroduceOnelevel">
        {/* 第1層*/}
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

      <div className="p-2" id="Topicssecondbg">
        {/* 第2層*/}
        <div className="overlay"></div>
        <br />

        <div className="d-flex flex-row-reverse" id="Topicsflextitle">
          <div className="p-2" id="Topicstitle">
            {/*2層Flex item 1*/}
            {/* <img
              className="Topicsclouds"
              src={Gif004}
              alt="烏雲打雷"
              
            />*/}
          </div>
          <div className="p-2" id="Topicstitle2">
            {/*2層Flex item 2專題標題*/}
            專題介紹 - 鞋業智能製造系統
          </div>
          <div className="p-2" id="Topicstitle">
            {/*2層Flex item 3*/}
          </div>
        </div>

        <div className="d-flex flex-row-reverse" id="Topicscontent">
          <div className="p-2" style={{ width: "50%" }} id="upbg">
            {/*Flex item 1 反轉的關系 解決內容*/}
            <div className="motivationtitle">解決方案</div>
            <div className="motivationtext2">
              <ol>
                <li>
                  設計鞋業智能製造系統 :
                  包含派工、生產回報、監控三項功能模組並導入NFC
                  TAG。從主管派工、員工回報生產進度，以及生產進度的監控，都不再依賴紙本，而是使用WEB及APP進行操作，並將資訊紀錄於資料庫，達到資訊有效管理和即時的監控。
                </li>
                <br />
                <li>
                  設計防偽驗證系統 : 包含鞋子資訊紀錄及感應驗證模組，並導入NFC
                  TAG植入鞋中。每雙鞋會對應NFC TAG，利用NFC TAG
                  中UID唯一且不可更改的特性，作為判別鞋子是否為正品的依據，同時確保資訊不被隨意竄改且不重複，達到防偽。
                </li>
                {/* 繼續添加其他段落 */}
              </ol>
            </div>
          </div>
          <div className="p-2" style={{ width: "50%" }} id="upbg">
            {/*Flex item 2研究內容 反轉*/}
            <div className="motivationtitle">研究動機</div>
            <div className="motivationtext">
              <ol>
                <li>
                  鞋業的生產過程中，鞋子的製造過程非常複雜，整條製鞋產線非常龐大，產線中所需紀錄的資訊量大，生產資訊無法有效管理，且工廠多數設置在海外，主管無法即時查看產線生產狀況，導致管理效率偏低。
                </li>
                <br />
                <li>
                  現在市面上越來越多高單價的潮流鞋款，由於價格很高，因此越來越多的高仿鞋出現，一般的消費者單看外表很難分辨出來真偽。
                </li>
                {/* 繼續添加其他段落 */}
              </ol>
              <div className="gif005">
                <img
                  src={Gif005}
                  alt="005"
                  style={{ width: "160px", height: "110px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="motivationphoto">
          {/*文字下方的圖片 */}
          <div className="card">
            <img src={Photo018} className="card-img-top" alt="018" />
            <div className="card-body">
              <p className="card-text">產線龐大</p>
            </div>
          </div>
          <div className="card">
            <img src={Photo019} className="card-img-top" alt="019" />
            <div className="card-body">
              <p className="card-text">資訊量大不易管理</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={Photo020} className="card-img-top" alt="020" />
            <div className="card-body">
              <p className="card-text">難辨真偽</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2" id="Topicsbg3">
        <div className="overlay"></div>
        {/* 第3層 改善*/}
        <Topics2 />
      </div>
      <div className="p-2" id="Topicsbg4">
        <div className="overlay"></div>
        {/* 第4層 改善*/}
        <Topics3 />
      </div>
      <div className="p-2" id="Topicsbg5">
        <div className="overlay"></div>
        {/* 第5層 系統架構及使用的套件*/}
        <Topics4 />
      </div>
      <div className="p-2" id="Topicsbg6">
        <div className="overlay"></div>
        {/* 第6層 鞋業產銷流程*/}
        <Topics5 />
      </div>
      <div className="p-2" id="Topicsbg7">
        <div className="overlay"></div>
        {/* 第7層 系統流程圖*2*/}
        <Topics6 />
      </div>
      <div className="p-2" id="Topicsbg13">
        <div className="overlay"></div>
        {/* 第8層 App端介面*/}
        <Topics12 />
      </div>
      <div className="p-2" id="Topicsbg8">
        <div className="overlay"></div>
        {/* 第9層 總結*/}
        <Topics7 />
      </div>
      <div className="p-2" id="Topicsbg9">
        <div className="overlay"></div>
        {/* 第9層 總結*/}
        <Topics8 />
      </div>
      <div className="p-2" id="Topicsbg10">
        <div className="overlay"></div>
        {/* 第9層 總結*/}
        <Topics9 />
      </div>
      <div className="p-2" id="Topicsbg11">
        <div className="overlay"></div>
        {/* 第8層 影片展示*/}
        <Topics10 />
      </div>
      <div className="p-2" id="Topicsbg12">
        <div className="overlay"></div>
        {/* 第9層 總結*/}
        <Topics11 />
      </div>
      <div className="p-2" id="Topicsbg13">
        <div className="overlay"></div>
        {/* 第9層 總結*/}
        <Topics13 />
      </div>
    </div>
  );
}

export default Topics;
