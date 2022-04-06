import * as React from 'react';
import './internal.scss';
export function MissionStatement() {
  //   const missionArray = [
  //     {
  //       id: 1,
  //       title: 'MISSION',
  //       text: `The Brearley School challenges girls of adventurous intellect and diverse backgrounds to think critically and creatively and prepares them for principled engagement in the world.

  // Guided by a dedicated community of adults, students develop a command of many disciplines, a love of learning and a resilient and generous spirit. The bond among students and with their teachers is rooted in a passionate exchange of ideas and an appreciation for the unique and lively contributions of each individual.

  // A Brearley education unfolds over a lifetime. The School instills in its alumnae the confidence to pursue their ambitions and the wisdom to live balanced and purposeful lives.

  // Adopted by the Board of Trustees, June 2016`,
  //     },
  //     {
  //       id: 2,
  //       title: 'DIVERSITY, EQUITY AND INCLUSION',
  //       text: `The Brearley School believes that diversity of thought, practice and identity are essential elements in preparing students for principled engagement in the world. We believe in the importance of establishing and strengthening the structures and practices necessary to achieve equitable representation and participation in our school. We are committed to putting these beliefs into action and are therefore engaged in continuous study, self-reflection and dialogue in order to improve and adapt as we learn.

  //       We embrace the opportunities and challenges of learning and working in a diverse environment characterized by respect and consideration for the needs of others. In partnership with faculty, staff, students, families and alumnae, we are endeavoring to instill and sustain shared values that promote a welcoming, inclusive and affirming community.`,
  //     },
  //     {
  //       id: 3,
  //       title: 'ANTIRACISM',
  //       text: `The Brearley School condemns racism in the strongest possible terms and is committed to building an antiracist community. This work requires active introspection, self-awareness and the determination to make conscious and consistently equitable choices on a daily basis. We expect teachers, staff members, students and parents to participate in antiracist training and to pursue meaningful change through deliberate and measurable actions. These actions include identifying and eliminating policies, practices and beliefs that uphold racial inequality in our community`,
  //     },
  //   ];
  return (
    <div className="mission-wrapper ">
      <div className=" header bold font-32"> Our Premises at a glance</div>
      <div className="media-group">
        <iframe
          src="https://drive.google.com/file/d/1kKomIeCRRVP_y2aTWWMV0VMjG0WOXmGn/preview"
          width="640"
          height="480"
          allow="autoplay"
          title="boys School"
        />
        <iframe
          src="https://drive.google.com/file/d/1zeAPCCWIxRT5hv--IKsvgMa5iGaAV8Jv/preview"
          width="640"
          height="480"
          allow="autoplay"
          title="girls School"
        />
      </div>
      {/* {missionArray.map((i) => (
        <div className="mission mgt-15 " id={i.id}>
          <div className="title mgb-10 bold font-16 ">{i.title}</div>
          <div className="text font-14">{i.text}</div>
        </div>
      ))} */}
    </div>
  );
}
