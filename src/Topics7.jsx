import React, { useRef, useState, useEffect } from "react";
import "./Topics7.css";
import Excelmov from "./image/Excel.mov";
import Htmlhome from "./image/htmlhome.mov";


/*Excel和首頁影片展示 */
function Topics7() {
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


  const MonitorvideoRef = useRef(null);
  const MonitorprogressRef = useRef(null);
  const [Monitorprogress, setMonitorProgress] = useState(0);

  const MonitorhandleTimeUpdate = () => {
    const video = MonitorvideoRef.current;
    const percentage = (video.currentTime / video.duration) * 100;
    setMonitorProgress(Math.round((percentage)));
  };

  const MonitorhandleProgressClick = (e) => {
    const progressBar = MonitorprogressRef.current;
    const newTime =
      (e.nativeEvent.offsetX / progressBar.offsetWidth) *
      MonitorvideoRef.current.duration;
    MonitorvideoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    const video = MonitorvideoRef.current;
    video.addEventListener("timeupdate", MonitorhandleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", MonitorhandleTimeUpdate);
    };
  }, []);

  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="z-index1">
        {/*Flex item 1影片文字介紹*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext07">
             {/*Flex item 2 Excel影片內容*/}
             影片中選擇與廠商給的製令單檔案，將資料匯入至資料庫中，方便後續使用這些資料，
            接著把匯入的資料抓到右邊的欄位中，呈現匯入的資料。
          </div>
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext07">
           {/* 首頁影片 */}
           首頁網站影片有點選到製令單匯入、派工、監控、品牌輸入、員工出勤狀況。
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index7">
        {/*Flex item 2影片*/}

        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="videos">
            {/*Flex item 2 Excel影片*/}
            <video ref={ExcelvideoRef} className="video-player7" controls>
              <source src={Excelmov} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              ref={ExcelprogressRef}
              className="custom-progress-bar2"
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

          <div className="p-2" style={{ width: "50%" }}>
            {/*Flex item 3 首頁影片 */}
            <video ref={MonitorvideoRef} className="video-player7" controls>
              <source src={Htmlhome} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div
              ref={MonitorprogressRef}
              className="custom-progress-bar1"
              onClick={MonitorhandleProgressClick}
            >
              <div
                className="custom-progress-bar-fill"
                style={{ width: `${Monitorprogress}%` }}
              />
              <div className="percentage">
              {Monitorprogress}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2" id="Conditiontitle07">
        {/*Flex item 3標題*/}
        首頁及匯入影片展示
      </div>
    </div>
  );
}

export default Topics7;
