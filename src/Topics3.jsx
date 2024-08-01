import React from "react";
import "./Topics3.css";
import Png025 from "./image/025.png";
import Png026 from "./image/026.png";

/*差異 */
function Topics3(){

    return(

        <div className="d-flex flex-column-reverse">
        <div className="p-2" id="test">
          {/* Flex item 1 */}
          
  
        </div>
        <div className="p-2" id="secondflex2">
          {/* Flex item 2*/}
          <div className="Condition">
          <div className="text223">(原情況)</div>
            <img
              className="Png025"
              src={Png025}
              alt="025"
   
            />
          </div>
          <div className="Conditiontext223-1">
          購買鞋子後，消費者無法確定是否為正品。
          </div>
  
          <div
            className="Condition2"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
               <div className="text223">(改善)</div>

            <img
              className="Png026"
              src={Png026}
              alt="026"
            />
          </div>
          <div className="Conditiontext">
          購買鞋子後，消費者使用防偽驗證APP感應鞋中NFC TAG<br/>
          即可確認是否為正品及取得鞋子基本資訊。

          </div>
        </div>
        <div className="p-2" id="Conditiontitle3">
         {/* Flex item 3 改善前後*/}
         導入防偽驗證系統後與原情況比較

        </div>
      </div>
    );
}

export default Topics3;