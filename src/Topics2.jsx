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
          <div className="text222">(原情況)</div>
          <img className="Png023" src={Png023} alt="023" />
          <img className="Jpg019" src={Jpg019} alt="019" />
        </div>
        <div className="Conditiontext1">
          員工眾多以紙本記錄費時費力，主管回收派工單做檢查時不便，導致資訊在管理及分析時的效率較差。
        </div>

        <div className="Condition2">
        <div className="text222">(改善)</div>
      
          <img
            className="Png024"
            src={Png024}
            alt="024"

          />
        </div>
        <div className="Conditiontext2">
          使用手機NFC功能去掃描NFC
          TAG，取得派工單內容並以手機回報，動作簡單也容易操作。
          <br />
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
