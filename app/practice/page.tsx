"use client";

import { useState } from "react";

const questions = [
  { part:"Part 5 · Grammar", question:"The manager _____ the report before the meeting yesterday.", choices:["A. review","B. reviews","C. reviewed","D. reviewing"], answer:2, explanation:"Yesterday indicates past tense, so 'reviewed' is correct." },
  { part:"Part 5 · Vocabulary", question:"Please _____ the attached document before the meeting.", choices:["A. review","B. reviewed","C. reviewing","D. reviews"], answer:0, explanation:"After 'please', use the base verb: review." },
  { part:"Part 2 · Listening", question:"When will the new employee start?", choices:["A. Next Monday.","B. In the HR office.","C. With Mr. Kim."], answer:0, explanation:"The question asks 'When', so the answer should be a time." }
];

export default function Practice() {
  const [current,setCurrent]=useState(0), [selected,setSelected]=useState<number|null>(null), [score,setScore]=useState(0), [finished,setFinished]=useState(false);
  const q=questions[current];
  function choose(i:number){if(selected!==null)return;setSelected(i);if(i===q.answer)setScore(s=>s+1);}
  function next(){if(current===questions.length-1){setFinished(true);return;}setCurrent(n=>n+1);setSelected(null);}
  if(finished){const percent=Math.round(score/questions.length*100);return <main className="page practice-page"><div className="result-card"><p className="eyebrow">PRACTICE COMPLETE</p><div className="result-score">{score}/{questions.length}</div><h1>ทำได้ {percent}%</h1><p>นี่คือข้อมูลเริ่มต้นสำหรับระบบวิเคราะห์จุดอ่อนของคุณ</p><div className="result-box"><strong>{score===questions.length?"ยอดเยี่ยม!":"เริ่มเห็นจุดที่ต้องฝึกแล้ว"}</strong><span>ทำข้อสอบเพิ่มเพื่อให้ AI วิเคราะห์แม่นขึ้น</span></div><a className="primary link-button" href="/">กลับ Dashboard</a></div></main>;}
  return <main className="page practice-page"><header className="practice-top"><a href="/" className="back">← Dashboard</a><span>ข้อ {current+1} / {questions.length}</span></header><div className="question-card"><p className="eyebrow">{q.part}</p><h1>{q.question}</h1><div className="choices">{q.choices.map((choice,i)=>{const correct=selected!==null&&i===q.answer,wrong=selected===i&&i!==q.answer;return <button key={choice} className={correct?"choice correct":wrong?"choice wrong":"choice"} onClick={()=>choose(i)}>{choice}</button>;})}</div>{selected!==null&&<div className={selected===q.answer?"feedback correct-feedback":"feedback wrong-feedback"}><strong>{selected===q.answer?"✓ ถูกต้อง":"✕ ยังไม่ถูก"}</strong><p>{q.explanation}</p></div>}<button className="primary next-button" disabled={selected===null} onClick={next}>{current===questions.length-1?"ดูผลคะแนน":"ข้อต่อไป →"}</button></div></main>;
}