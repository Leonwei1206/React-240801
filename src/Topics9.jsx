import React, { useRef, useState, useEffect } from "react";
import "./Topics9.css";
import Excelmov from "./image/Appreturn.mp4";
import Monitormov from "./image/Previewlist.mov";


/*員工工作回報及預覽派工單影片展示影片展示 */
function Topics9() {
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
      <div className="p-2" id="z-index9">
        {/*Flex item 1影片文字介紹*/}
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext09">
            {/*Flex item 1 預覽派工單影片內容*/}
            派工完成時，可以將派工單列印出來，並且先預覽派工單。
          </div>
          <div className="p-2" style={{ width: "50%" }}id="ExcelMonitortext09">
            {/*Flex item 2 App回報影片內容*/}
            當主管派工後，員工感應自己的NFC TAG就會顯示影片中的介面，
            會顯示派工的部位尺寸及數量，接著按照每日的進度進行回報，
            填完完成數量後再次感應下方就會把自己的ID名稱顯示在操作員上，並完成回報。
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index9">
        {/*Flex item 2影片*/}

        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={{ width: "50%" }} id="videos">
            {/*Flex item 2 Monitor影片*/}
            <video ref={MonitorvideoRef} className="video-player9" controls>
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
            <video ref={ExcelvideoRef} className="video-player9-1" controls>
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
      <div className="p-2" id="Conditiontitle09">
        {/*Flex item 3標題*/}
        員工回報及預覽派工單影片展示
      </div>
    </div>
  );
}

export default Topics9;
