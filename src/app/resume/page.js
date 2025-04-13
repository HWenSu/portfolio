import React from 'react'

const page = () => {
  const skills = ["Adobe Illustrator 、Photoshop、After Effect、Figma", "HTML5、CSS3、JavaScript", "React、Next 框架使用", "Git 版本控制", "API串接", "Tailwind 、 Shadcn", "RWD設計經驗"]

  return (
    <div className='resume-container'>
      <aside className='col-start-9 col-end-11 pr-[2rem]'>
        <img src='/avatar.png'/>
        <div>
          <h3 className='border-b border-black'>EDUCATION</h3>
          <p>實踐大學 服裝設計學系 畢業</p>
          <span>2014</span>
          <span>2018</span>
        </div>
        <div>
          <h3 className='border-b border-black'>SKILL</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
        </div>
      </aside>
    </div>
  )
}

export default page