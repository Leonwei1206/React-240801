import React, { useRef, useState, useEffect } from "react";
import "./Topics10.css";
import Excelmov from "./image/Employeeproduction.mov";
import Monitormov from "./image/monitor.mov";


/*員工出勤及監控影片展示 */
function Topics10() {
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
      <div className="p-2" id="z-index10">
        {/*Flex item 1影片文字介紹*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext">
            {/*Flex item 1 監控影片內容*/}
            匯入完成後，接下來會進行派工將每位員工每日工作分配，
            後續員工將今日完成的內容從手機App端進行回報，回報完將資料計算後呈現出完成情況，
            可讓管理者進行即時的監控。
          </div>
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext">
            {/*Flex item 2 Excel影片內容*/}
            員工打卡及回報狀況都可以在這邊查看，查看全部員工的上班狀況有無遲到，
            並且可以再點詳細資料查看個人工作完成狀況。
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index1">
        {/*Flex item 2影片*/}

        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="videos">
            {/*Flex item 2 Monitor影片*/}
            <video ref={MonitorvideoRef} className="video-player10" controls>
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

          <div className="p-2" style={{ width: "50%" }}>
            {/*Flex item 3 Excel影片 */}
            <video ref={ExcelvideoRef} className="video-player10" controls>
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
      <div className="p-2" id="Conditiontitle10">
        {/*Flex item 3標題*/}
        員工回報狀況及監控影片展示
      </div>
    </div>
  );
}

export default Topics10;
