import React from "react";
import "./Topics13.css";

/* 結論*/
function Topics13() {
  return (
    <div className="d-flex flex-column-reverse">
      <div className="p-2" id="z-index13">
        <div className="d-flex flex-column-reverse">
          <div className="center13">
          <div className="p-2"id="completion2">
            {/* 心得文字 */}
            前面有提到這專題是由三個人分工完成的，而我是做資料庫、Excel檔案匯入及監控的部分，
            是一點一點的累積，從最剛開始與教授和鞋廠廠商了解鞋業的流程還有遇到的問題，下去一步一步的推進，
            雖然看似很容易，每次在討論完需求及呈現方式，到製作出大家都滿意的狀況需要花不少時間。
            在了解廠商的需求後，我們開始分工並且踏出第一步，過程中碰到困難，
            可能是遇到需要debug、功能無法呈現、API串接出了問題等等，都必須去解決，
            所以團隊就會有了討論，不同的人看到的事情與思考方式都不一樣，所以往往都能給彼此不同的思考方向，
            除了彼此討論之外，還會上網尋找問題，雖然有可能單一問題要花上好幾天的時間才解決掉，
            但是解決完後會有成就感。一小段落完成後會與教授和廠商做進一步的討論及呈現完成的部分作修改，
            就這樣一步一步的完成了我們的專題。
          </div>
          </div>
        
          <div className="p-2" id="littletitle13-2">
            專題心得
          </div>
        </div>
      </div>
      <div className="p-2" id="z-index13">
        <div className="d-flex flex-column-reverse">
          <div className="p-2"id="completion">
            
            {/*總結文字解說 */}
            <ol>
              <li>
                派工模組提供主管進行數位化的派工，省去繁複的紙本派工工作，進而提升派工的效率。
              </li>
              <li>
                生產回報模組提供員工使用APP進行生產進度回報，有效收集資訊並降低資訊遺失風險。
              </li>
              <li>
                生產監控模組將回報資訊進行可視化，讓主管能即時查看目前的生產進度。
              </li>
              <li>
                透過員工產能分析，可以查看員工的出勤狀況以及每日產能，作為評估績效的依據之一。
              </li>
              <li>
                防偽驗證模組提供消費者使用APP感應鞋子中的NFC
                TAG，做到簡易的驗證真偽程序。
              </li>
              {/* 繼續添加其他段落 */}
            </ol>
          </div>
          <div className="p-2" id="littletitle13">
            總結
          </div>
        </div>
      </div>
      <div className="p-2" id="flow-chart-title13">
        {/*標題*/}
        總結與心得
      </div>
    </div>
  );
}

export default Topics13;
