"use client";

import { useState } from "react";

const lessons = [
  {
    category:"Grammar",
    title:"จับ Subject-Verb Agreement ให้ได้ใน 5 นาที",
    level:"พื้นฐาน → 650",
    time:"10 นาที",
    shortcut:"มองหาประธานจริงก่อน ไม่หลงคำที่คั่นกลาง",
    points:["He/She/It → verb เติม s/es","They/We/You → verb ไม่เติม s","คำอย่าง together with, along with ไม่เปลี่ยนประธานหลัก"],
    example:"The manager, along with his assistants, ___ responsible. → is"
  },
  {
    category:"Part 5",
    title:"ทางลัดทำข้อ Grammar โดยไม่ต้องแปลทุกคำ",
    level:"High-yield",
    time:"12 นาที",
    shortcut:"ดูคำรอบช่องว่างก่อน แล้วตัดชนิดคำ",
    points:["หน้า noun มักต้องการ adjective","หน้า verb มักเจอ adverb ได้","หลัง modal เช่น can/must/should ใช้ verb ช่อง 1"],
    example:"The company will ___ the system. → improve (หลัง will = V.1)"
  },
  {
    category:"Vocabulary",
    title:"จำศัพท์แบบ Word Family ไม่ท่องทีละคำ",
    level:"Vocabulary",
    time:"10 นาที",
    shortcut:"จำเป็นชุด: decide → decision → decisive → decisively",
    points:["จำคำหลัก + รูป noun/verb/adj/adv","ผูกกับประโยคสั้น ๆ","ทบทวนแบบเว้นระยะ แทนการอ่านซ้ำยาว ๆ"],
    example:"make a decision = ตัดสินใจ (decision เป็น noun)"
  },
  {
    category:"Listening",
    title:"Part 2: ฟังคำถามให้ทันด้วย Question Word",
    level:"Listening",
    time:"10 นาที",
    shortcut:"จับคำแรก: Who / When / Where / Why / How",
    points:["When → เวลา/วัน","Where → สถานที่","Who → คน","Why → เหตุผล","How much/many → จำนวน/ราคา"],
    example:"When will the meeting start? → Next Monday."
  },
  {
    category:"Listening",
    title:"Part 3: ไม่ต้องฟังทุกคำ ให้จับ 3 อย่าง",
    level:"Listening",
    time:"15 นาที",
    shortcut:"Who + Problem + Next action",
    points:["ใครกำลังคุยกับใคร","กำลังเกิดปัญหา/เรื่องอะไร","ต่อไปจะทำอะไร"],
    example:"ลูกค้าร้องเรียน → พนักงานตรวจสอบ → นัดหมาย/ส่งเอกสาร"
  },
  {
    category:"Reading",
    title:"Part 7: อ่านคำถามก่อน แล้วค่อยกวาดหาหลักฐาน",
    level:"Reading",
    time:"15 นาที",
    shortcut:"Question → keyword → evidence → answer",
    points:["หา keyword ที่เฉพาะ เช่น ชื่อ วันที่ จำนวน","คำตอบต้องมีหลักฐานในบทความ","อย่าเลือกเพราะความรู้สึกหรือความคุ้น"],
    example:"ถาม 'When?' → หา date/time ก่อน ไม่ต้องอ่านทุกบรรทัด"
  }
];

export default function Lessons() {
  const [active,setActive]=useState(0);
  const lesson=lessons[active];
  return <main className="page lessons-page">
    <header className="topbar">
      <div className="brand"><div className="logo">T</div><div><strong>TOEIC AI Coach</strong><span>บทเรียน + ทางลัด + แบบฝึกหัด</span></div></div>
      <a className="profile" href="/">Dashboard</a>
    </header>

    <section className="lesson-hero">
      <div><p className="eyebrow">SMART TOEIC LESSONS</p>
        <h1>ไม่ใช่แค่ทำข้อสอบ<br/><span>แต่เรียนให้เป็นก่อน</span></h1>
        <p className="subtitle">บทเรียนถูกออกแบบให้เน้นสิ่งที่ออกสอบบ่อย วิธีสังเกต และทางลัดที่ช่วยลดเวลาคิด โดยไม่ต้องท่องทุกอย่าง</p>
      </div>
      <div className="shortcut-card"><div>⚡</div><strong>กฎของเรา</strong><p>เรียนสั้น → ทำโจทย์ → วิเคราะห์ข้อผิด → กลับมาแก้จุดอ่อน</p></div>
    </section>

    <div className="lesson-layout">
      <aside className="lesson-list">{lessons.map((l,i)=><button key={l.title} className={i===active?"lesson-nav active":"lesson-nav"} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span><div><b>{l.title}</b><small>{l.category} · {l.time}</small></div></button>)}</aside>

      <section className="lesson-content">
        <div className="lesson-meta"><span>{lesson.category}</span><span>{lesson.time}</span><span>{lesson.level}</span></div>
        <h2>{lesson.title}</h2>
        <div className="shortcut"><b>⚡ ทางลัดที่ต้องจำ</b><p>{lesson.shortcut}</p></div>
        <h3>สิ่งที่ต้องรู้</h3>
        <div className="lesson-points">{lesson.points.map((p,i)=><div key={p}><span>{i+1}</span><p>{p}</p></div>)}</div>
        <div className="example"><b>ตัวอย่างข้อสอบ</b><p>{lesson.example}</p></div>
        <div className="lesson-actions"><a className="primary link-button" href="/practice">ไปทำโจทย์เรื่องนี้ →</a><button className="secondary" onClick={()=>setActive((active+1)%lessons.length)}>บทถัดไป →</button></div>
      </section>
    </div>

    <section className="card method"><p className="eyebrow">LEARNING SYSTEM</p><h2>ระบบเรียนของ TOEIC AI Coach</h2><div className="method-grid"><div><b>01 · Learn</b><span>เรียนกฎและทางลัดแบบสั้น</span></div><div><b>02 · Practice</b><span>ทำโจทย์ทันทีเพื่อเช็กความเข้าใจ</span></div><div><b>03 · Analyze</b><span>ระบบแยกว่าผิดเพราะอะไร</span></div><div><b>04 · Repeat</b><span>กลับมาฝึกเฉพาะจุดที่ยังอ่อน</span></div></div></section>
  </main>;
}
