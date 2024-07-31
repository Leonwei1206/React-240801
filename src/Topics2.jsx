import React from "react";
import "./Topics2.css";
import Png023 from "./image/023.png";
import Jpg019 from "./image/019.jpg";
import Png024 from "./image/024.png";

function Topics2() {
  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="test">
        {/* Flex item 1 */}
        

      </div>
      <div className="p-2" id="secondflex2">
        {/* Flex item 2*/}
        <div className="Condition">
          (原情況)
          <img
            src={Png023}
            alt="023"
            style={{ width: "400px", height: "120px", marginLeft: "30px" }}
          />
          <img
            src={Jpg019}
            alt="019"
            style={{ width: "150px", height: "100px", marginLeft: "30px" }}
          />
        </div>
        <div className="Conditiontext"style={{marginTop:"20px"}}>
          員工眾多以紙本記錄費時費力，主管回收派工單做檢查時不便，導致資訊在管理及分析時的效率較差。
        </div>

        <div
          className="Condition2"
          style={{ marginTop: "20px", marginLeft: "20px" }}
        >
          (改善)
          <img
            src={Png024}
            alt="024"
            style={{ width: "600px", height: "180px", marginLeft: "50px" }}
          />
        </div>
        <div className="Conditiontext">
          使用手機NFC功能去掃描NFC
          TAG，取得派工單內容並以手機回報，動作簡單也容易操作。<br/>
          主管可透過網頁的監控頁面功能來了解產線生產狀況，達到資訊可視化。
        </div>
      </div>
      <div className="p-2" id="Conditiontitle2">
       {/* Flex item 3 改善前後*/}
        導入系統後與原情況比較
      </div>
    </div>
  );
}
export default Topics2;
