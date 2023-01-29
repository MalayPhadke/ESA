import React from 'react'
import "./App.css"


function Events() {
  const data = [
    {
      "id": "1",
      "event": "The Guidance Forum,",
      "date": "31st August 2021,",
      "desc": "Guidance session for freshers was organised regarding the selection of HSSE and minor courses,",
      "Usage": "Introduction to different courses,",
      "students": "63"
    },
    {
      "id": "2",
      "event": "Teacher’s Day Celebration,",
      "date": "4th September 2021,",
      "desc": "An appreciation mail was sent to all the professors in the department and an event comprising of fun games and recreation was organized for the department faculties.,",
      "Usage": "Moral responsibility and appreciation,",
      "students": "NA"
    },
    {
      "id": "3",
      "event": "Alumni Talk 1.0",
      "date": "25th September 2021",
      "desc": "4 alumni from different domain gave an insight to the students about the different aspects which needs to taken care of before appearing for placement interviews",
      "Usage": "Clarity on the placement opportunities presented for students of Electronics",
      "students": "60"
    },
    {
      "id": "4",
      "event": "Workshop on Electronics Hardware",
      "date": "1st October 2021",
      "desc": "A Workshop on Electronics hardware, a foundation hands-on session to understand the components and its application",
      "Usage": "Introduction to Electronics Devices subject for Semester 3",
      "students": "30"
    },
    {
      "id": "5",
      "event": "LTSpice Workshop",
      "date": "8th October 2021",
      "desc": "A Workshop on LTspice, an important analog electronic circuit simulator software",
      "Usage": "Introduction to simulation software to electronics engineering",
      "students": "30"
    },
    {
      "id": "6",
      "event": "Webinar on VLSI",
      "date": "19th October 2021",
      "desc": "An informative workshop on VLSI by Prof Surendra Singh Rathore",
      "Usage": "Introduction to VLSI",
      "students": "78"
    },
    {
      "id": "7",
      "event": "Alumni Talk 2.0",
      "date": "13th November 2021",
      "desc": "3 Alumni from differents domains explained the process of applying for Masters both in India and abroad. And explained the benefits of opting for masters",
      "Usage": "An insight on the different options available for Masters",
      "students": "45"
    },
    {
      "id": "8",
      "event": "Techno Roast Battle",
      "date": "28th November 2021",
      "desc": "Techno Roast Battle is a technical debate and rebuttal competition in which all the teams participating got complimentary topics allotted one day prior to the competition, for example, 5g vs 4g as they had to research on this topic. The teams then had an oxford-style debate wherein they had to roast their opponent in the form of direct statements and talk about the benefits of their topic and demerits of the opponents’ topic.",
      "Usage": "A technical debate competition which included the electronics perspective.",
      "students": "16 teams of 1-2 participants."
    },
    {
      "id": "9",
      "event": "The Guidance Forum 2.0(Mini Project Guidance)",
      "date": "22nd January 2022",
      "desc": "The Guidance Forum 2.0 organised by ESA was regarding the mini project that was to be done in the span of 6 months in the sem IV. It was a lucrative session wherein all the seniors discussed about the hacks from the topic selection to how to go about with the project. It gave us great insights about the approach and the execution of the project.",
      "Usage": "A guidance session where the seniors mentored and gave tips about the mini project in semester 4",
      "students": "55 participants"
    },
    {
      "id": "10",
      "event": "I.C.E. Cup",
      "date": "12th February 2022,       13th February 2022",
      "desc": "The I.C.E. cup was organised in collaboration with ITSA also called ACSES. It was a two day line up which included sports such as Cricket, Football, Volleyball. Everyone brought a lot of enthusiasm.",
      "Usage": "The flagship event of ESA revamped with immense participation by all year students",
      "students": "Over 100 particpants"
    }
   ]
  return (
    <div className="events">
      {/* <div className="close-container">
          <div class="leftright"></div>
          <div class="rightleft"></div>
      </div> */}

    <table>
      <tr>
        <th>Sr. No.</th>
        <th>Event</th>
        <th>Date</th>
        <th>Description</th>
        <th>Usage</th>
        <th>students</th>
      </tr>
      {data.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.id}</td>
            <td>{val.event}</td>
            <td>{val.date}</td>
            <td>{val.desc}</td>
            <td>{val.Usage}</td>
            <td>{val.students}</td>
          </tr>
        )
      })}
    </table>
  </div>
  )
}

export default Events