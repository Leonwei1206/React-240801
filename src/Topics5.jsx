import React from "react";
import "./Topics5.css";
import Png040 from "./image/040.png"

/*鞋業產銷流程 */
function Topics5() {
  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="flow-chart-text">
        {/*Flex item 1流程圖2*/}
        <div className="flow-chart-center">
        主管接收到廠商的製令單後，將製令單分成各個員工的每日工作內容，稱為派工單，接著員工取得派工單後，
       開始完成今日的工作內容，並且回報完成狀況，回報後系統會統計此派工單的完成狀況及製令單的完成狀況，
       方便主管即時的監控，因為前面提到大部分工廠的設置在海外，所以無法及時的了解完成狀況。
       完成各部位的製作後會在鞋中置入NFC TAG，接著出貨到各大通路，消費者購買後可以掃描達到防偽的效果。
        </div>
       
      </div>
      <div className="p-2"id="z-index12"style={{width:"100%"}}>
        {/*Flex item 2流程圖*/}
        <div className="p-2"id="flow-chart">
        <img className="Png040"src={Png040} alt="040"/>
        </div>
        
      </div>
      <div className="p-2" id="flow-chart-title">
        {/*Flex item 3標題*/}
        鞋業產銷流程
      </div>
    </div>
  );
}

export default Topics5;
