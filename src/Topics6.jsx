import React from "react";
import "./Topics6.css";
import Png042 from "./image/042.png";
import Png043 from "./image/043.png";

/*系統流程圖 */
function Topics6() {
  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2">
        {/*Flex item 1系統流程文字*/}
        <div className="#">
          <div className="d-flex flex-row-reverse">
            <div className="p-2" id="z-index"style={{ width: "50%" }}>
              <div className="flow-chart-text6-2">
                {/*防偽驗證流程圖的文字*/}
                鞋子在製造過程中置入NFC
                TAG，完成後出貨到各大通路，消費者購買鞋子後， 可感應NFC
                TAG進行掃描驗證，為正品會取得鞋子的ID及資料，不是的話就無法取得ID籍資料。
              </div>
            </div>
            <div className="p-2"id="z-index" style={{ width: "50%" }}>
              <div className="flow-chart-text6">
                {/*鞋業智能製造系統流程圖的文字*/}
                第一步先點選製令單匯入到資料庫，是否成功匯入，成功的話會進行派工，
                派工會派到各個員工的UID
                NFC上，員工只需要掃描NFC就能接收到今日工作內容，
                接著工作完成後進行回報，回報完成將資料處理後放在監控畫面。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2" id="flexsecond6" style={{ width: "100%" }}>
        {/*Flex item 2系統流程圖*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="Png042043">
            {/*Flex item 1防偽系統流程圖*/}
            <div className="Png043">
              <img src={Png043} alt="043" style={{ width: "95%" }} />
            </div>
            <div className="text6">防偽驗證流程圖</div>
          </div>
          <div className="p-2" style={{ width: "50%" }} id="Png042043">
            {/* 系統流程圖*/}
            <div className="Png042">
              <img src={Png042} alt="042" style={{ width: "85%" }} />
            </div>
            <div className="text6">鞋業智能製造系統流程圖</div>
          </div>
        </div>
      </div>
      <div className="p-2" id="flow-chart-title6">
        {/*Flex item 3標題*/}
        系統流程圖
      </div>
    </div>
  );
}

export default Topics6;
