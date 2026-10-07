"use client";
import { useState } from "react";

const skills = [
  { name: "Vocabulary", score: 71, status: "good" },
  { name: "Part 1 Listening", score: 82, status: "good" },
  { name: "Part 2 Listening", score: 60, status: "watch" },
  { name: "Part 3 Listening", score: 51, status: "weak" },
  { name: "Grammar", score: 42, status: "weak" },
  { name: "Part 5", score: 45, status: "weak" },
  { name: "Part 6", score: 62, status: "watch" },
  { name: "Part 7", score: 78, status: "good" }
];

export default function Home() {
  const [started, setStarted] = useState(false);
  return <main className="page">
    <header className="topbar">
      <div className="brand"><div className="logo">T</div><div><strong>TOEIC AI Coach</strong><span>Personal learning dashboard</span></div></div>
      <button className="profile">My Progress</button>
    </header>

    <section className="hero">
      <div><p className="eyebrow">YOUR TOEIC JOURNEY</p><h1>เรียนให้ตรงจุด<br/><span>เพื่อไปให้ถึง 650</span></h1>
        <p className="subtitle">ระบบวิเคราะห์ข้อที่คุณทำ เพื่อค้นหาจุดอ่อนและแนะนำสิ่งที่ควรฝึกต่อ</p>
        <button className="primary" onClick={()=>setStarted(!started)}>{started?"กำลังเตรียมแบบฝึกหัด...":"เริ่มทำแบบฝึกหัด"}</button>
      </div>
      <div className="score-card"><p>Current estimated score</p><div className="big-score">523</div>
        <div className="target">เป้าหมาย <b>650</b> · เหลืออีก 127 คะแนน</div>
        <div className="progress"><span style={{width:"80%"}}/></div><small>ความพร้อมโดยประมาณ 80% ของเป้าหมาย</small>
      </div>
    </section>

    <section className="grid two">
      <div className="card"><div className="card-head"><div><p className="eyebrow">SKILL ANALYSIS</p><h2>คุณทำได้แค่ไหน?</h2></div><span className="badge">อัปเดตจาก 120 ข้อ</span></div>
        <div className="skills">{skills.map(s=><div className="skill" key={s.name}><div className="skill-label"><span>{s.name}</span><b>{s.score}%</b></div><div className="bar"><span className={s.status} style={{width:`${s.score}%`}}/></div></div>)}</div>
      </div>
      <div className="card recommendation"><p className="eyebrow">AI RECOMMENDATION</p><h2>ควรฝึกอะไรต่อ?</h2>
        <p className="ai-text">จากข้อมูลตัวอย่าง จุดที่มีโอกาสช่วยเพิ่มคะแนนได้เร็วคือ <b>Grammar และ Part 3 Listening</b></p>
        <div className="focus"><div><span>01</span><strong>Subject-Verb Agreement</strong><small>Grammar · 15 นาที</small></div><div><span>02</span><strong>Part 3 Listening</strong><small>Conversation · 15 นาที</small></div></div>
        <button className="secondary" onClick={()=>setStarted(true)}>ฝึกตามแผนวันนี้ →</button>
      </div>
    </section>

    <section className="card plan"><div><p className="eyebrow">TODAY'S PLAN</p><h2>แผนฝึก 30 นาที</h2><p>ระบบจะปรับแผนตามผลการทำข้อสอบของคุณในอนาคต</p></div>
      <div className="plan-items"><div><b>10 นาที</b><span>Grammar</span></div><div><b>10 นาที</b><span>Part 3 Listening</span></div><div><b>10 นาที</b><span>Vocabulary</span></div></div>
    </section>
    <footer>TOEIC AI Coach · MVP v0.1</footer>
  </main>;
}
