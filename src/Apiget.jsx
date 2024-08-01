import React, { useRef, useState, useEffect } from "react";
import "./Apiget.css";
import Excelmov from "./image/APIget.mp4";

/*員工出勤及監控影片展示 */
function Apiget() {
  const ExcelvideoRef = useRef(null);
  const ExcelprogressRef = useRef(null);
  const [Excelprogress, setExcelProgress] = useState(0);

  const ExcelhandleTimeUpdate = () => {
    /*執行後算出跑馬條的%數 */
    const video = ExcelvideoRef.current; /*取得影片*/
    const percentage = (video.currentTime / video.duration) * 100;
    /*video.currentTime: 獲取當前播放時間。
    video.duration: 獲取視頻總時長。 */
    setExcelProgress(Math.round(percentage));
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
      <div className="p-2" id="z-indexget">
        {/*Flex item 1影片文字介紹*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" id="ExcelMonitortextget">
            {/*Flex item 1 監控影片內容*/}
            <div className="get-text">
            因資料庫的關係怕進來後無法操作所以錄製影片來展示，可以在欄位中輸入姓名及年齡後，
            點擊Add按鈕就會Post到資料庫，接著點擊顯示就會把資料庫中所有姓名及年齡都顯示出來。

            </div>
            
          </div>
        </div>
      </div>
      <div className="p-2" id="z-indexget">
        {/*Flex item 2影片*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "7%" }}></div>
          <div className="p-2" style={{ width: "80%" }}>
            <div className="video-get">
              <video ref={ExcelvideoRef} className="video-player-get" controls>
                <source src={Excelmov} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                style={{ width: "90%" }}
                ref={ExcelprogressRef}
                className="custom-progress-bar1"
                onClick={ExcelhandleProgressClick}
                id="percent1"
              >
                <div
                  className="custom-progress-bar-fill"
                  style={{ width: `${Excelprogress}%` }}
                />
                <div className="percentage">{Excelprogress}%</div>
              </div>
            </div>
          </div>
          <div className="p-2" style={{ width: "13%" }}></div>
        </div>
      </div>
      <div className="p-2" id="Conditiontitleget">
        {/*Flex item 3標題*/}
        Add 及顯示影片展示
      </div>
    </div>
  );
}

export default Apiget;
