import CategoryCard from "@/components/CategoryCard";

const page = () => {
  const skills = ["Adobe Illustrator 、Photoshop、After Effect、Figma", "HTML5、CSS3、JavaScript", "React、Next 框架使用", "Git 版本控制", "API串接", "Tailwind 、 Shadcn", "RWD設計經驗"]

  const experience = [
    {
      time: ["2022 Jun", "Present"],
      company: "視覺設計師 / 遠東新世紀股份有限公司",
      content: [
        "網頁設計 | 網頁設計,並用Next完成前端架設",
        "平面設計 | 使用Photoshop, Illustrator 完成視覺平面設計、 陳列設計,大型牆面設計, Logo, 品牌專案設計",
        "動畫影片 | 使用After Effect, Premiere 影片動畫製作",
        "緹花設計 | 緹花圖稿及織物設計",
        "介紹推廣 | 介紹開發設計給予品牌客戶,並依品牌調性設計專案",
        "擅長高效溝通與跨部門協作,靈活應對各類需求。參與品牌會議包含 NIKE, Lululemon, Jordan, Oakley, CKS, Asics, Vouri…服裝品牌",
      ],
    },
    {
      time: ["2022 Jun", "Present"],
      company: "服裝設計師 / MO-BO_米果服飾開發有限公司",
      content: [
        "市場蒐集 | 國內外流行商品資料搜集、競品商品觀察與分析",
        "商品企劃 | 商品款式提案、週邊相關商品",
        "商品拍攝 | 拍攝形象企劃與提案、服裝搭配",
        "生產管理 | 與客戶溝通協調、商品開發管理、訂單跟催及客訴回覆",
        "ERP系统、Adobe illustrator、Adobe photoshop、Excel",
      ],
    },
    {
      time: ["2022 Jun", "Present"],
      company: "商品企劃設計 / 紘懋食品有限公司",
      content: [
        "平面設計 | CIS設計、Logo設計、包裝設計、商品組圖及Banner製作 ",
        "櫃位設計 | 實體店面活動陳列鐵件設計、實體櫃位設計 ",
        "商品企劃 | 甜點行銷企劃案撰寫、行促設定、各電商平台上架、官網維護管理、後台更新、門市通路陌生開發 ",
        "社群管理 | 社群平台圖文推播、客服回覆",
        "攝影企劃 | 拍攝企劃發想、去背商品圖拍攝、商品照修圖編輯",
      ],
    },
  ];

  const sideProjects = [
    {
      time: ["2022 Jun", "Present"],
      name: "一站式圖片管理網站 ",
      content: [
        {
          title: "專案描述：",
          description:
            ["作為設計師，時常有需要向外找靈感與向內對齊風格的需求，所以設計這個網站時希望能整合 [ 開發階段圖片搜尋 ] + [ 聚焦設計收藏功能 ] + [ 隨時查看目前風格的作品集圖片頁面 ] ，另外圖片除了可以單張分享外，也可以將上傳的作品集頁面整頁發送給訪客預覽。"],
        },
        {
          title: "使用技術：",
          description: ["React、Base64 格式處理、API 整合( firebase)。"],
        },
        {
          title: "專案成果：",
          description: [
            "依會員顯示各會員的收藏模式",
            "會員可以分享連結產生訪客模式觀看該會員上傳圖片頁面",
            "圖片可搜尋、收藏、 下載、分享",
            "瀑布流排列 + Lazy load",
          ],
        },
      ],
    },
    {
      time: ["2022 Jun", "Present"],
      name: "線上預約網站 (與後端協作) ",
      content: [
        {
          title: "專案描述：",
          description:
            ["開發預約系統，整合時間選擇器與使用者管理。資料處理採模板模式，前端進行動態渲染。"],
        },
        {
          title: "使用技術：",
          description: ["React、Tailwind CSS、Node.js、前後端API整合"],
        },
        {
          title: "專案成果：",
          description: [
            "篩選機制, 預約表單依項目動態渲染其他選項",
            "即時確認, 預約成功後發信通知",
            "多主題支持, 主題可動態切換。",
          ],
        },
      ],
    },
  ];


  return (
    <div className="resume-container">
      {/* Statement */}
      <section className="col-start-3 col-end-9 px-[2rem] pb-[3rem]">
        <h2 className="name"> 蘇筱雯 ELVA</h2>
        <h3 className="divider">STATEMENT</h3>
        <p className="animate-slide-right">
          我是專注於視覺與數位設計的創作者，擅長學習新技能，涵蓋Adobe
          Photoshop、Illustrator、After
          Effects、Premiere，以及React、Next前端框架與Figma
          UI設計。從服裝、平面設計跨到網站動態設計，在每一個階段的歷程都累積不同面向的技能與經驗，而能多方統整，探索跨領域的多元性是我的強項。外銷工作經驗讓我熟悉跨部門協作，並且識別多方需求以達到共識。
        </p>
      </section>
      {/* Experience */}
      <div className=" text-center col-start-2 col-end-3 row-start-2 relative text-wrap ">
        <h3 className="left-title">EXPERIENCE</h3>
        <span className="border-l border-black absolute h-full left-1/2 "></span>
      </div>
      <section className="col-start-3 col-end-9">
        <article>
          <ul>
            {experience.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="experience-project-block animate-slide-down"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline">
                  {item.time.map((time, index) => (
                    <p key={`${time}-${index}`}>{time}</p>
                  ))}
                </div>
                <div className="pr-[2rem]">
                  <h4>{item.company}</h4>
                  <ul>
                    {item.content.map((contentItem, index) => (
                      <li key={`${contentItem}-${index}`}>{contentItem}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
      {/* Side Projects */}
      <div className=" text-center col-start-2 col-end-3 row-start-3 relative side-project">
        <h3 className="left-title">SIDE PROJECTS</h3>
        <span className="border-l border-black absolute h-full left-1/2 "></span>
      </div>
      <section className="col-start-3 col-end-9 flex flex-col h-[100vh] side-project">
        <article>
          <ul>
            {sideProjects.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="experience-project-block  animate-slide-down"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline">
                  {item.time.map((time, index) => (
                    <p key={`${time}-${index}`}>{time}</p>
                  ))}
                </div>
                <div className="pr-[2rem]">
                  <h4>{item.name}</h4>
                  <ul>
                    {item.content.map((contentItem, index) => (
                      <div
                        className="grid grid-cols-[6rem_1fr]"
                        key={`${contentItem}- ${index}`}
                      >
                        <p>{contentItem.title}</p>
                        <div>
                          {contentItem.description.map((descriptionItem) =>
                            contentItem.title !== "專案成果：" ? (
                              <p>{descriptionItem}</p>
                            ) : (
                              <div className="flex items-center">
                                <span className="dots"></span>
                                <p>{descriptionItem}</p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </ul>
                  <div className="custom-btn">
                    <button>Visit</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <div className="relative resume-category ">
          <CategoryCard />
        </div>
      </section>
      <aside className="col-start-9 col-end-11 pr-[2rem] row-start-1 row-end-4 sticky top-[5rem] self-start">
        <div className=" mb-4 animate-slide-left ">
          <img src="/avatar.png" />
        </div>
        <div className="pb-6  animate-slide-down">
          <h3 className="divider">EDUCATION</h3>
          <p>實踐大學 服裝設計學系 畢業</p>
          <span>2014</span>
          <span>2018</span>
        </div>
        <div className="pb-6">
          <h3 className="divider">SKILLS</h3>
          <ul>
            {skills.map((skill, index) => (
              <li
                key={skill}
                className="flex items-center animate-slide-down"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="dots"></span>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-6  animate-slide-down">
          <h3 className="divider">LANGUAGES</h3>
          <p>English / 中</p>
          <p>IELTS 6</p>
        </div>
      </aside>
    </div>
  );
}

export default page