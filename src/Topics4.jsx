import React from "react";
import "./Topics4.css";
import Png028 from "./image/028.png";
import Png029 from "./image/029.jpg";
import Png030 from "./image/030.png";
import Png031 from "./image/031.png";
import Png032 from "./image/032.png";
import Png033 from "./image/033.png";
import Png034 from "./image/034.png";

/*開發元件 */
function Topics4() {
  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="test">
        {/* Flex item 1 */}
      </div>
      <div className="p-2" id="secondflex2">
        {/* Flex item 2*/}
        <div className="Condition">
          {/*架構圖大張 */}
          <img
            src={Png028}
            alt="028"
            style={{ width: "850px", height: "150px", marginLeft: "30px",marginTop:"30px" }}
          />
        </div>
        <div className="d-flex flex-row-reverse" id="Architecture-diagram"style={{marginTop:"15px"}}>
          <div className="p-2" style={{ width: "50%" }}>
            {/*Flex item 2架構圖文字02*/}
            <img
              src={Png030}
              alt="030"
              style={{ width: "320px", height: "100px", marginLeft: "50px" }}
            />
          </div>
          <div className="p-2" style={{ width: "50%" }} id="ph029">
            {/*Flex item 1架構圖文字01*/}
            <img
              src={Png029}
              alt="029"
              style={{ width: "320px", height: "100px", marginLeft: "140px" }}
            />
          </div>
        </div>

        <div className="d-flex flex-row-reverse"style={{marginTop:"20px"}}>{/*開發元件 */}
          <div className="p-2"style={{width:"28%"}}id="centerApp">
            {/*Flex item 4APP*/}
            <div className="EnglishtextApp">
            APP & NFC TAG
            </div>
            

            <img
              src={Png034}
              alt="034"
              style={{ width: "170px", height: "300px",marginRight:"60px" }}
            />
            </div>

          <div className="p-2"style={{width:"22%"}}id="centerWeb">
            {/*Flex item 3Web*/}
            <div className="Englishtext">
            Web
            </div>
         
            <img
              src={Png033}
              alt="033"
              style={{ width: "150px", height: "300px" }}
            />
            </div>
          <div className="p-2"style={{width:"22%"}}id="centerSever">
            {/*Flex item 2sever*/}
            <div className="Englishtext">
            Sever
            </div>

            <img
              src={Png032}
              alt="032"
              style={{ width: "160px", height: "300px" }}
            />
            </div>

          <div className="p-2"style={{width:"28%"}}id="centerDatabase">
            {/*Flex item 1database*/}
            <div className="EnglishtextDatabase">
            Database
            </div>

            <img
              src={Png031}
              alt="031"
              style={{ width: "150px", height: "300px",marginLeft:"60px" }}
            />
            </div>
         
        </div>
      </div>
      <div className="p-2" id="Conditiontitle4">
        {/* Flex item 3 改善前後*/}
        系統架構及開發元件
      </div>
    </div>
  );
}

export default Topics4;
