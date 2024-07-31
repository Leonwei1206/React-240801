import React from "react";
import "./Topics12.css";
import Jpg045 from "./image/045.jpg"
import Jpg046 from "./image/046.jpg"
import Jpg047 from "./image/047.jpg"
import Jpg048 from "./image/048.jpg"
import Jpg049 from "./image/049.jpg"
import Jpg050 from "./image/050.jpg"

/*App端介面 展示 */
function Topics12() {
  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="z-index-12">
        {/*Flex item 1影片文字介紹*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="Apptext">
            {/*Flex item 1 監控影片內容*/}
            員工開啟APP感應NFC TAG UID並紀錄於資料庫，就是將員工編號紀錄起來，
            便於後續派工及防偽驗證作業。
          </div>
          <div className="p-2" style={{ width: "50%" }} id="Apptext">
            {/*Flex item 2 Excel影片內容*/}
            員工開啟APP，感應自己的員工卡進行上下班的打卡，
            後面還可以查看員工的出勤狀況。
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index1">
        {/*Flex item 2影片*/}

        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="videos">
            {/*Flex item 2 Monitor影片*/}
            <div className="d-flex flex-row-reverse"id="flexcenter12">
              <div className="p-2"><img src={Jpg050} alt="050" style={{width:"100%"}}/></div>
              <div className="p-2"><img src={Jpg049} alt="049" style={{width:"100%"}}/></div>
              <div className="p-2"><img src={Jpg048} alt="048" style={{width:"100%"}}/></div>
            </div>
          </div>

          <div className="p-2" style={{ width: "50%" }}>
            {/*Flex item 3 Excel影片 */}
            <div className="d-flex flex-row-reverse"id="flexcenter12">
              <div className="p-2"><img src={Jpg047} alt="047" style={{width:"100%"}}/></div>
              <div className="p-2"><img src={Jpg046} alt="046" style={{width:"100%"}}/></div>
              <div className="p-2"><img src={Jpg045} alt="045" style={{width:"100%"}}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2" id="Conditiontitle12">
        {/*Flex item 3標題*/}
        App端介面展示
      </div>
    </div>
  );
}

export default Topics12;
