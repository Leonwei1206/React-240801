import React, { useRef, useState, useEffect } from "react";
import "./Topics8.css";
import Excelmov from "./image/Singlelist.mov";
import Monitormov from "./image/Multiplelist.mov";


/*單選派工和多選派工影片展示 */
function Topics8() {
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
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext08">
            {/*Flex item 1 多選派工影片內容*/}
           多選派工跟單選派工原理差不多，差別在於多選派工可以一次分派多個以上的部位，
           分派到員工的ID後，一樣會進行當日的工作內容。
          </div>
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext08">
            {/*Flex item 2 單選派工影片內容*/}
            製令單匯入資料後，將各部位的尺寸及數量抓出來，進行派工，單選派工是指一次只能派工一個部位，
            單個部位不同尺寸也能分很多次進行派工，派工能選擇要派到哪位員工上，也就是須完成的工作內容。
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index1">
        {/*Flex item 2影片*/}

        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="videos">
            {/*Flex item 2 Monitor影片*/}
            <video ref={MonitorvideoRef} className="video-player8" controls>
              <source src={Monitormov} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              ref={MonitorprogressRef}
              className="custom-progress-bar2"
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

          <div className="p-2" style={{ width: "50%" }}id="videos">
            {/*Flex item 3 Excel影片 */}
            <video ref={ExcelvideoRef} className="video-player8" controls>
              <source src={Excelmov} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              ref={ExcelprogressRef}
              className="custom-progress-bar1"
              onClick={ExcelhandleProgressClick}
              id="percent1"
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
      <div className="p-2" id="Conditiontitle08">
        {/*Flex item 3標題*/}
        單選派工及多選派工影片展示
      </div>
    </div>
  );
}

export default Topics8;
