"use client";

import { useState } from "react";

type Lesson = {
  category:string; title:string; level:string; time:string; goal:string; shortcut:string;
  concept:string; rules:string[]; examples:string[]; traps:string[]; strategy:string[];
};

const lessons:Lesson[] = [
  {
    category:"Foundation 01", title:"เริ่มจากศูนย์: ประโยคอังกฤษคืออะไร?", level:"0 → เริ่มอ่านได้", time:"25–30 นาที",
    goal:"เข้าใจโครงสร้างประโยคอังกฤษก่อนเริ่ม Grammar",
    shortcut:"ทุกประโยคให้ถาม 2 อย่างก่อน: 'ใคร/อะไร?' + 'ทำอะไร/เป็นอย่างไร?'",
    concept:"ภาษาอังกฤษพื้นฐานจำนวนมากสร้างจาก Subject (ประธาน) + Verb (กริยา) + ส่วนขยาย เช่น I work. = ฉันทำงาน, The company grows. = บริษัทเติบโต เราจะยังไม่รีบท่อง Grammar จำนวนมาก แต่ฝึกมองโครงสร้างให้เป็นก่อน",
    rules:[
      "Subject = คน/สิ่งที่เรากำลังพูดถึง เช่น I, you, the manager, the company",
      "Verb = การกระทำหรือสภาพ เช่น work, go, need, is, are",
      "Object = สิ่งที่ถูกกระทำ เช่น I read a report. → a report คือ Object",
      "ประโยคพื้นฐานมักมองเป็น S + V หรือ S + V + O",
      "ภาษาอังกฤษต้องมี Verb ที่ถูกต้อง ต่างจากภาษาไทยที่บางประโยคละคำว่า 'เป็น/อยู่/คือ' ได้"
    ],
    examples:[
      "I work. → I = Subject, work = Verb",
      "I read a book. → I = Subject, read = Verb, a book = Object",
      "The company needs employees. → The company = Subject, needs = Verb, employees = Object",
      "She is busy. → She = Subject, is = Verb, busy = คำบอกสภาพ"
    ],
    traps:[
      "อย่าแปลทีละคำโดยไม่มองโครงสร้าง",
      "อย่าคิดว่า Verb ต้องแปลว่า 'ทำ' เสมอ เพราะ is/am/are ใช้บอกสภาพได้",
      "อย่าเพิ่งพยายามจำศัพท์ทุกคำ ให้รู้หน้าที่ของคำก่อน"
    ],
    strategy:["หา Subject","หา Verb","ถามว่า Verb กำลังบอก 'ทำอะไร' หรือ 'เป็นอย่างไร'","ค่อยดูส่วนที่เหลือ"]
  },
  {
    category:"Foundation 02", title:"Pronouns: I / You / He / She / It / We / They", level:"พื้นฐานมาก", time:"25 นาที",
    goal:"อ่านประโยคง่าย ๆ และรู้ว่าใครเป็นคนทำ",
    shortcut:"จำเป็นชุด I–you–he/she/it–we/they และจับคู่กับ Verb ให้ได้",
    concept:"Pronoun คือคำที่ใช้แทนคนหรือสิ่งของ เช่น John → he, the company → it, employees → they ถ้าแยก pronoun ไม่ออก จะเรียน Verb และ Grammar ต่อได้ยาก",
    rules:[
      "I = ฉัน/ผม, you = คุณ/คุณทั้งหลาย",
      "he = เขาผู้ชาย, she = เขาผู้หญิง, it = มัน/สิ่งของ/องค์กรในบางบริบท",
      "we = พวกเรา, they = พวกเขา/สิ่งเหล่านั้น",
      "my = ของฉัน, your = ของคุณ, his/her = ของเขา/เธอ, our/their = ของพวกเรา/พวกเขา",
      "TOEIC ใช้คน ตำแหน่ง และบริษัทบ่อยมาก จึงต้องฝึกจับว่า they/he/she/it อ้างถึงใคร"
    ],
    examples:["John works here. He is a manager.","The company changed its policy.","Employees should bring their IDs.","We will contact you tomorrow."],
    traps:["it ไม่ได้หมายถึงสัตว์อย่างเดียว อาจแทนสิ่งของหรือเรื่องที่พูดถึง","they อาจหมายถึงพนักงานหลายคนหรือสิ่งของหลายชิ้น","your กับ you're คนละอย่าง: your = ของคุณ, you're = you are"],
    strategy:["อ่านประโยคแล้ววงคำที่เป็นคน/สิ่งของ","แทนชื่อด้วย pronoun ในหัว","ดูว่าเป็นคนเดียว หลายคน หรือสิ่งของ"]
  },
  {
    category:"Foundation 03", title:"am / is / are: Verb ตัวแรกที่ต้องแม่น", level:"พื้นฐานมาก", time:"30 นาที",
    goal:"ใช้ประโยค 'เป็น/อยู่/คือ' ได้ถูกต้อง",
    shortcut:"I → am | He/She/It → is | You/We/They → are",
    concept:"ภาษาไทยสามารถพูดว่า 'ฉันเหนื่อย' โดยไม่ใส่คำว่า 'เป็น' แต่ภาษาอังกฤษต้องมี Verb: I am tired. เรื่องนี้สำคัญมาก เพราะ be verb เป็นพื้นฐานของ Grammar หลายบท",
    rules:[
      "I am ... เช่น I am ready.",
      "He/She/It is ... เช่น She is busy. The system is ready.",
      "You/We/They are ... เช่น They are late.",
      "am/is/are + adjective ใช้บอกสภาพ เช่น happy, busy, ready",
      "am/is/are + noun ใช้บอกว่าเป็นอะไร เช่น He is a manager."
    ],
    examples:["I am tired. → ฉันเหนื่อย","She is a manager. → เธอเป็นผู้จัดการ","The employees are busy. → พนักงานกำลังยุ่ง","The meeting is at 9. → การประชุมอยู่/จัดเวลา 9 โมง"],
    traps:["I is ❌ → I am","They is ❌ → They are","He are ❌ → He is","อย่าแปล is แบบเดียวทุกประโยค ให้ดูบริบท"],
    strategy:["หาประธานก่อน","จับคู่กับ am/is/are","ดูคำหลัง be ว่าเป็น noun, adjective หรือข้อมูลสถานที่/เวลา"]
  },
  {
    category:"Foundation 04", title:"Noun / Verb / Adjective / Adverb: รู้ชนิดคำก่อนทำข้อสอบ", level:"พื้นฐาน → Part 5", time:"35 นาที",
    goal:"มองออกว่าคำหนึ่งทำหน้าที่อะไรในประโยค",
    shortcut:"Noun = คน/ของ/เรื่อง | Verb = ทำ/เป็น | Adjective = ขยายคำนาม | Adverb = ขยายการกระทำ",
    concept:"Part 5 จำนวนมากไม่ได้ถามว่ารู้คำศัพท์ไหม แต่ถามว่าช่องว่างต้องเป็นคำชนิดไหน ถ้ารู้ Part of Speech คุณสามารถตัดตัวเลือกได้แม้ไม่รู้ความหมายทั้งหมด",
    rules:[
      "Noun: manager, company, information, decision",
      "Verb: work, manage, decide, improve",
      "Adjective: good, successful, useful, careful",
      "Adverb: quickly, successfully, carefully, efficiently",
      "a/an/the มักอยู่หน้ากลุ่มคำนาม; adjective มักอยู่หน้าคำนามเพื่อขยาย",
      "Verb มักถูกขยายด้วย adverb"
    ],
    examples:["a successful company → successful = adjective, company = noun","work efficiently → efficiently = adverb","make a decision → decision = noun","They decided quickly. → decided = verb, quickly = adverb"],
    traps:["คำลงท้ายเหมือนกันไม่ได้แปลว่าเป็นชนิดคำเดียวกันเสมอ","friendly เป็น adjective แม้ลงท้าย -ly","information เป็น noun นับไม่ได้ จึงไม่เติม informations"],
    strategy:["ดูคำหน้า blank","ดูคำหลัง blank","เดาว่าต้องเป็น noun/verb/adj/adv","ตัดตัวเลือกที่ชนิดคำผิดก่อน"]
  },
  {
    category:"Foundation 05", title:"a / an / the และคำนามเอกพจน์-พหูพจน์", level:"พื้นฐาน", time:"30 นาที",
    goal:"เข้าใจคำนามที่ TOEIC ใช้บ่อยและลดความสับสนเรื่อง s",
    shortcut:"เจอคำนามหนึ่งชิ้นแบบไม่เจาะจง มักคิดถึง a/an; ถ้าเฉพาะเจาะจงมักใช้ the",
    concept:"Articles ดูเหมือนเล็ก แต่ TOEIC ใช้ใน Part 5 บ่อย และช่วยให้รู้ว่าคำถัดไปทำหน้าที่อะไร",
    rules:[
      "a ใช้หน้าคำนามเอกพจน์ที่ขึ้นต้นด้วยเสียงพยัญชนะ เช่น a manager",
      "an ใช้หน้าคำนามเอกพจน์ที่ขึ้นต้นด้วยเสียงสระ เช่น an employee",
      "the ใช้เมื่อผู้พูด/ผู้อ่านรู้ว่าหมายถึงสิ่งไหน",
      "คำนามนับได้เอกพจน์โดยทั่วไปไม่ควรอยู่เดี่ยว ๆ โดยไม่มี determiner",
      "พหูพจน์มักเติม s/es แต่มี irregular เช่น employee → employees, company → companies"
    ],
    examples:["a report","an employee","the report we discussed yesterday","three employees","a company → two companies"],
    traps:["a/an ดูที่ 'เสียง' ไม่ใช่แค่ตัวอักษร","information, advice, equipment มักใช้แบบนับไม่ได้","ไม่ใช่ทุกคำนามที่เติม s ได้แบบปกติ"],
    strategy:["ถามก่อนว่า noun นี้นับได้ไหม","ถ้านับได้และเอกพจน์ ดูว่าต้องมี a/an/the หรือไม่","ถ้าหลายชิ้น ตรวจรูปพหูพจน์"]
  },
  {
    category:"Foundation 06", title:"Present / Past / Future แบบไม่ปวดหัว", level:"พื้นฐาน → TOEIC", time:"40 นาที",
    goal:"แยกเหตุการณ์ปัจจุบัน อดีต และอนาคตจากคำสังเกต",
    shortcut:"มอง time signal ก่อน: yesterday / last / every / now / tomorrow / next",
    concept:"ไม่ต้องเริ่มจากท่อง Tense ทั้ง 12 แบบ สำหรับเป้าหมาย 650 ให้แม่นแกนหลักก่อน: Present Simple, Past Simple และ Future ด้วย will/be going to",
    rules:[
      "Present Simple → งานประจำ/ข้อเท็จจริง: I work here. She works here.",
      "Past Simple → เกิดแล้วจบแล้ว: worked, went, met",
      "Future → will + Verb 1: will work, will meet",
      "คำสังเกต: every day มัก Present; yesterday/last week มัก Past; tomorrow/next week มัก Future",
      "He/She/It ใน Present Simple มักต้องเติม s/es"
    ],
    examples:["She works every day.","She worked yesterday.","She will work tomorrow.","The meeting starts at 9 every Monday."],
    traps:["yesterday + work ❌ → worked","will + worked ❌ → will work","He work ❌ ใน Present Simple → He works","คำว่า now ไม่ได้บังคับ Present Simple เสมอ ต้องดูโครงสร้างทั้งประโยค"],
    strategy:["หา time signal","หา Subject","เลือก tense","ตรวจรูป Verb โดยเฉพาะ he/she/it"]
  },
  {
    category:"Foundation 07", title:"คำถามภาษาอังกฤษ: What / Who / When / Where / Why / How", level:"พื้นฐาน → Listening", time:"35 นาที",
    goal:"อ่านและฟังคำถามออก แม้ศัพท์ยังไม่เยอะ",
    shortcut:"จำ Question Word เป็น 'ชนิดคำตอบ' ไม่ใช่แค่คำแปล",
    concept:"Question words เป็นอาวุธสำคัญของ TOEIC โดยเฉพาะ Part 2 ถ้าจับได้ว่าคำถามต้องการข้อมูลประเภทไหน จะตัดตัวเลือกได้เร็วมาก",
    rules:[
      "Who → คน","When → เวลา/วัน","Where → สถานที่","Why → เหตุผล","What → ข้อมูล/สิ่งของ/การกระทำตามบริบท","How → วิธี/จำนวน/ระดับ; เช่น how much, how many, how often"
    ],
    examples:["Who is the new manager? → Mr. Kim.","When is the meeting? → At 10 a.m.","Where is the report? → On my desk.","Why was the meeting canceled? → Because the manager was sick.","How often do you travel? → Once a month."],
    traps:["Who ไม่ใช่สถานที่","When ไม่ใช่คน","Where ไม่ใช่เหตุผล","คำตอบที่พูดคำซ้ำกับคำถามอาจเป็น distractor"],
    strategy:["ฟังคำแรก","บอกตัวเองทันทีว่า 'ต้องการคน/เวลา/สถานที่/เหตุผล'","ตัดตัวเลือกผิดประเภท","ค่อยฟังรายละเอียด"]
  },
  {
    category:"Foundation 08", title:"Prepositions: in / on / at / to / for / from", level:"พื้นฐาน → Part 5", time:"35 นาที",
    goal:"เข้าใจคำเชื่อมสถานที่ เวลา และทิศทางที่เจอบ่อย",
    shortcut:"จำเป็นกลุ่มตามหน้าที่ ไม่ท่องแปลเดี่ยว ๆ",
    concept:"Preposition เป็นจุดที่ผู้เริ่มต้นพลาดง่าย เพราะภาษาไทยกับอังกฤษใช้ไม่เหมือนกัน ให้เริ่มจาก pattern ที่ TOEIC ใช้บ่อย",
    rules:[
      "at + จุดเวลา/จุดสถานที่: at 9 a.m., at the station",
      "on + วัน/วันที่/พื้นผิว: on Monday, on June 5, on the table",
      "in + เดือน/ปี/ช่วงเวลา/พื้นที่: in June, in 2026, in the morning, in Bangkok",
      "to + จุดหมาย: go to the office",
      "from A to B = จาก A ไป B; for = สำหรับ/เป็นระยะเวลาในหลายบริบท"
    ],
    examples:["The meeting is at 9 a.m.","We work on Monday.","The company was founded in 1998.","She went to the office.","I have worked here for three years."],
    traps:["in Monday ❌ → on Monday","at June ❌ → in June","ใช้ to หลังทุกคำไม่ได้ ต้องดู pattern เช่น arrive at/in"],
    strategy:["จำเป็น phrase","เรียนพร้อมตัวอย่าง ไม่จำคำแปลเดี่ยว","เก็บ collocation ที่ผิดไว้ทบทวน"]
  },
  {
    category:"Foundation 09", title:"โครงสร้างประโยคปฏิเสธและคำถาม", level:"พื้นฐาน → TOEIC", time:"35 นาที",
    goal:"อ่านประโยคบอกเล่า ปฏิเสธ และคำถามได้",
    shortcut:"Present Simple ใช้ do/does; Past Simple ใช้ did; be ใช้ตัวมันเอง",
    concept:"ผู้เริ่มต้นมักสับสนว่าเมื่อไรใช้ do/does/did และเมื่อไรใช้ am/is/are การแยกสองกลุ่มนี้ทำให้ Grammar ง่ายขึ้นมาก",
    rules:[
      "Present Simple: Do you work? / Does he work?",
      "ปฏิเสธ Present Simple: do not/don't, does not/doesn't + Verb 1",
      "Past Simple: Did you work? / did not + Verb 1",
      "ถ้า main verb คือ be: Is she ready? / They are not ready.",
      "หลัง does/did ใช้ Verb 1: Does he work? ไม่ใช่ Does he works?"
    ],
    examples:["Do you work here?","Does she live in Bangkok?","He doesn't work on Sunday.","Did they attend the meeting?","She isn't available."],
    traps:["Does he works? ❌ → Does he work?","Did you went? ❌ → Did you go?","Do she...? ❌ → Does she...?"],
    strategy:["หา main verb","ถ้าเป็น be ใช้ be","ถ้าเป็น action verb ใน Present/Past ใช้ do/does/did ตาม tense","หลัง do/does/did กลับไป Verb 1"]
  },
  {
    category:"TOEIC Part 5", title:"Part 5: สูตรตัดตัวเลือก 4 ขั้น", level:"เริ่มทำข้อสอบ", time:"35–40 นาที",
    goal:"เปลี่ยนความรู้พื้นฐานให้เป็นวิธีทำข้อสอบจริง",
    shortcut:"Type → Structure → Meaning → Check",
    concept:"Part 5 ไม่ควรแปลทั้งประโยคทุกข้อ เริ่มจากดูว่าข้อนั้นถามชนิดคำ, Grammar, Vocabulary หรือ Collocation แล้วใช้วิธีเฉพาะ",
    rules:[
      "Step 1: ดูตัวเลือก ถ้ารากศัพท์เดียวกันต่างรูป → มักเป็น Word Form",
      "Step 2: ดูคำก่อน/หลัง blank เพื่อหา structure",
      "Step 3: ถ้ายังเหลือหลายตัวเลือก ค่อยดูความหมาย",
      "Step 4: อ่านทั้งประโยคอีกครั้งเพื่อเช็กความสมเหตุสมผล"
    ],
    examples:["The new system is highly ___. → effective (be + adjective)","The company will ___ the system. → improve (will + V.1)","She completed the task ___. → successfully (ขยาย completed)"],
    traps:["เริ่มแปลทุกคำตั้งแต่ต้นทำให้เสียเวลา","เลือกคำที่ความหมายดีแต่ชนิดคำผิด","ไม่ตรวจ subject กับ verb"],
    strategy:["ตั้งเป้า 15–25 วินาทีต่อข้อเมื่อพื้นฐานเริ่มแน่น","ฝึกแยกชนิดข้อ","ทำ Error Log ว่าผิดเพราะอะไร"]
  },
  {
    category:"TOEIC Part 2", title:"Part 2 Listening: ฟังคำถาม ไม่ฟังทุกคำ", level:"เริ่ม Listening", time:"30–35 นาที",
    goal:"ใช้ Question Word และชนิดคำตอบเพื่อกำจัด distractor",
    shortcut:"Question Word → Predict → Listen → Eliminate",
    concept:"Part 2 เป็นจุดที่ฝึกแล้วเห็นพัฒนาการได้เร็ว เพราะคำถามสั้นและมี pattern ชัด",
    rules:[
      "When/Where/Who/Why/How → บอกประเภทคำตอบ",
      "Yes/No questions ไม่จำเป็นต้องตอบ Yes/No เสมอ",
      "คำตอบที่พูดคำเดียวกับคำถามอาจถูกออกแบบมาเป็น distractor",
      "คำตอบอ้อมยังถูกได้ ถ้ามีความสัมพันธ์กับคำถาม"
    ],
    examples:["When is the meeting? → At 3 p.m.","Where should I put these files? → On the manager's desk.","Didn't John call you? → No, I haven't heard from him."],
    traps:["เลือกเพราะได้ยินคำซ้ำ","ไม่ฟังรูปปฏิเสธ เช่น didn't","คิดว่าคำถาม Where ต้องตอบชื่อสถานที่สั้น ๆ เสมอ"],
    strategy:["อ่าน/ฟังคำแรก","ทายประเภทคำตอบ","ฟังตัวเลือก","ตัด distractor","ถ้าพลาดให้ปล่อยข้อแล้วไปต่อ"]
  },
  {
    category:"TOEIC Part 3", title:"Part 3 Listening: Who + Problem + Next Action", level:"Intermediate", time:"35–40 นาที",
    goal:"ฟังบทสนทนาโดยไม่ต้องแปลทุกประโยค",
    shortcut:"จำ 3 ช่อง: ใคร / เรื่องอะไร / ต่อไปทำอะไร",
    concept:"Part 3 ยาวกว่า Part 2 จึงต้องเปลี่ยนจากการฟังทีละคำเป็นการจับภาพรวมและ evidence ที่คำถามต้องการ",
    rules:[
      "อ่านคำถามและตัวเลือกก่อนเสียงเริ่มเมื่อเวลาพอ",
      "จับ speaker, purpose, problem, next action",
      "ระวังข้อมูลที่เปลี่ยนภายหลัง เช่น เดิมจะประชุมวันจันทร์แต่เลื่อนไปวันอังคาร",
      "ไม่รู้ศัพท์หนึ่งคำไม่ใช่เหตุผลให้หยุดฟัง"
    ],
    examples:["What is the problem? → A delivery is late.","What will the woman do next? → Contact the supplier.","Why is the man calling? → To change an appointment."],
    traps:["จำคำพูดแรกแล้วไม่ฟังการแก้ไข","พยายามแปลทุกคำ","หลุดจากบทสนทนาเพราะศัพท์หนึ่งคำ"],
    strategy:["อ่านคำถามก่อน","จด keyword สั้น ๆ","ฟังเพื่อหาหลักฐาน","ทำเครื่องหมาย mental note","ตรวจคำตอบทันที"]
  },
  {
    category:"TOEIC Part 7", title:"Part 7 Reading: อ่านเร็วด้วย Evidence", level:"Intermediate", time:"40 นาที",
    goal:"เพิ่ม Reading speed โดยไม่สุ่มคำตอบ",
    shortcut:"Question → Keyword → Evidence → Paraphrase → Answer",
    concept:"Part 7 ต้องบริหารเวลา การอ่านแบบนักแปลทุกคำจะช้าเกินไป ให้ใช้คำถามเป็นแผนที่และอ่านเฉพาะส่วนที่จำเป็น",
    rules:[
      "อ่านคำถามก่อน passage ในคำถามส่วนใหญ่",
      "หา keyword ที่เฉพาะ เช่น ชื่อ วันที่ จำนวน ตำแหน่ง",
      "คำตอบอาจ paraphrase ไม่ใช้คำเดียวกับ passage",
      "NOT/EXCEPT ต้องเช็กทุกตัวเลือกกับหลักฐาน",
      "Inference ต้องอิงจากข้อมูลที่มี ไม่ใช่ความรู้ส่วนตัว"
    ],
    examples:["When will the event take place? → หา date/time","Why did the customer contact the company? → หา purpose","What is NOT mentioned? → ตรวจทุก option"],
    traps:["เลือกคำตอบเพราะมีคำเหมือน passage","อ่านทุกประโยคช้าเท่ากัน","ตอบจากความรู้ทั่วไปแทนหลักฐาน"],
    strategy:["เริ่มจากคำถาม","ขีด keyword ในใจ","หา evidence","อ่านบริเวณรอบ evidence","ตอบแล้วไปข้อถัดไป"]
  }
];

export default function Lessons() {
  const [active,setActive]=useState(0);
  const lesson=lessons[active];
  return <main className="page lessons-page">
    <header className="topbar">
      <div className="brand"><div className="logo">T</div><div><strong>TOEIC AI Coach</strong><span>คอร์สจาก 0 → 650</span></div></div>
      <a className="profile" href="/">Dashboard</a>
    </header>

    <section className="lesson-hero">
      <div><p className="eyebrow">ZERO → TOEIC 650</p>
        <h1>ปูพื้นฐานจากศูนย์<br/><span>แล้วค่อยไปข้อสอบจริง</span></h1>
        <p className="subtitle">ไม่ถือว่าคุณรู้อังกฤษมาก่อน บทเรียนจะพาไล่ตั้งแต่โครงสร้างประโยค คำศัพท์พื้นฐาน Grammar สำคัญ ไปจนถึงเทคนิค TOEIC</p>
      </div>
      <div className="shortcut-card"><div>🚀</div><strong>เส้นทางแนะนำ</strong><p>พื้นฐาน 01–09 → Part 5 → Part 2 → Part 3 → Part 7</p></div>
    </section>

    <div className="lesson-layout">
      <aside className="lesson-list">{lessons.map((l,i)=><button key={l.title} className={i===active?"lesson-nav active":"lesson-nav"} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span><div><b>{l.title}</b><small>{l.category} · {l.time}</small></div></button>)}</aside>
      <section className="lesson-content">
        <div className="lesson-meta"><span>{lesson.category}</span><span>{lesson.time}</span><span>{lesson.level}</span></div>
        <h2>{lesson.title}</h2>
        <p className="lesson-goal"><b>🎯 เป้าหมาย:</b> {lesson.goal}</p>
        <div className="shortcut"><b>⚡ ทางลัดที่ต้องจำ</b><p>{lesson.shortcut}</p></div>
        <div className="lesson-section"><h3>1. ปูพื้นความเข้าใจ</h3><p>{lesson.concept}</p></div>
        <div className="lesson-section"><h3>2. หลักที่ต้องจำ</h3><div className="lesson-points">{lesson.rules.map((p,i)=><div key={p}><span>{i+1}</span><p>{p}</p></div>)}</div></div>
        <div className="lesson-section"><h3>3. ตัวอย่างที่ต้องเห็นภาพ</h3><div className="examples">{lesson.examples.map((x,i)=><div className="example" key={i}><b>ตัวอย่าง {i+1}</b><p>{x}</p></div>)}</div></div>
        <div className="lesson-section"><h3>4. จุดที่คนเริ่มต้นพลาด</h3><div className="trap-list">{lesson.traps.map((x,i)=><div key={x}><b>⚠ {i+1}</b><p>{x}</p></div>)}</div></div>
        <div className="lesson-section"><h3>5. วิธีใช้ในห้องสอบ</h3><ol className="strategy">{lesson.strategy.map(x=><li key={x}>{x}</li>)}</ol></div>
        <div className="lesson-actions"><a className="primary link-button" href="/practice">ไปทำโจทย์ →</a><button className="secondary" onClick={()=>setActive(Math.min(active+1,lessons.length-1))}>{active===lessons.length-1?"จบบทเรียน":"บทถัดไป →"}</button></div>
      </section>
    </div>

    <section className="card method"><p className="eyebrow">LEARNING SYSTEM</p><h2>เรียนแบบคนพื้นฐาน 0</h2><div className="method-grid"><div><b>01 · Learn</b><span>เข้าใจภาษาไทยก่อน</span></div><div><b>02 · Pattern</b><span>จำรูปแบบที่ใช้บ่อย</span></div><div><b>03 · Practice</b><span>ทำโจทย์ทันที</span></div><div><b>04 · Analyze</b><span>แก้เฉพาะจุดที่ผิด</span></div></div></section>
  </main>;
}
