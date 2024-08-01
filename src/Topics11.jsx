import React, { useRef, useState, useEffect } from "react";
import "./Topics11.css";
import Excelmov from "./image/NFCinto.mov";
import Jpg051 from "./image/051.jpg"
import Jpg052 from "./image/052.jpg"
import Jpg053 from "./image/053.jpg"



/*鞋子資訊輸入及感應防偽影片展示影片展示 */
function Topics11() {
  const ExcelvideoRef = useRef(null);
  const ExcelprogressRef = useRef(null);
  const [Excelprogress, setExcelProgress] = useState(0);

  const ExcelhandleTimeUpdate = () => {
    /*執行後算出跑馬條的%數 */
    const video = ExcelvideoRef.current; /*取得影片*/
    const percentage = (video.currentTime / video.duration) * 100;
    /*video.currentTime: 獲取當前播放時間。
    video.duration: 獲取視頻總時長。 */
    setExcelProgress(Math.round((percentage)));
  };

  const ExcelhandleProgressClick = (e) => {
    const progressBar = ExcelprogressRef.current; /* 獲取進度條元素 */
    const newTime =
      (e.nativeEvent.offsetX / progressBar.offsetWidth) *
      ExcelvideoRef.current.duration;
    /*e.nativeEvent.offsetX: 獲取點擊位置相對於進度條的X軸偏移量。
        progressBar.offsetWidth: 獲取進度條的寬度。 */
    ExcelvideoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    const video = ExcelvideoRef.current; /*videoRef.current: 獲取視頻元素*/
    video.addEventListener("timeupdate", ExcelhandleTimeUpdate); /*更新 */
    return () => {
      video.removeEventListener("timeupdate", ExcelhandleTimeUpdate);
    };
  }, []);

  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="z-index1">
        {/*Flex item 1影片文字介紹*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext11">
            {/*Flex item 1 感應防偽影片內容*/}
            上個步驟將NFC ID中輸入該鞋子的資訊，消費者購買後可以感應取得資訊來達到防偽的效果。
          </div>
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext11">
            {/*Flex item 2 鞋子資訊輸入影片內容*/}
            在NFC ID中輸入鞋子的資訊。
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index11">
        {/*Flex item 2影片*/}

        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="videos">
            {/*Flex item 2 Monitor影片*/}
            <div className="d-flex flex-row-reverse"id="flexcenter11">
              <div className="p-2"><img src={Jpg053} alt="053" style={{width:"97%"}}/></div>
              <div className="p-2"><img src={Jpg052} alt="052" style={{width:"97%"}}/></div>
              <div className="p-2"><img src={Jpg051} alt="051" style={{width:"97%"}}/></div>
            </div>    
          </div>

          <div className="p-2" style={{ width: "50%" }}>
            {/*Flex item 3 Excel影片 */}
            <video ref={ExcelvideoRef} className="video-player11" controls>
              <source src={Excelmov} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              ref={ExcelprogressRef}
              className="custom-progress-bar1"
              onClick={ExcelhandleProgressClick}
            >
              <div
                className="custom-progress-bar-fill"
                style={{ width: `${Excelprogress}%` }}
              />
              <div className="percentage">
              {Excelprogress}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2" id="Conditiontitle11">
        {/*Flex item 3標題*/}
        資料輸入及感應防偽影片展示
      </div>
    </div>
  );
}

export default Topics11;
