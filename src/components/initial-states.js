import { auth } from '../firebase-setup/firebase'
export const mentorFormFields = {
  personalDetails: {
    name: '',
    email: '',
    dob: '',
    phone: 0,
    residentialAddress: '',
    summary: '',
  },
  classesDetails: {
    coachingName: '',
    modeOfTeaching: '',
    YoE: 0,
    coachingAddress: '',
    allClassesInfo: [
      {
        subjectName: '',
        class: '',
        fees: 0,
        demoLink: '',
      },
    ],
  },
}

export const dummyData = [
  {
    personalDetails: {
      name: 'user1',
      email: '',
      dob: '',
      phone: 0,
      residentialAddress: '',
      summary: '',
    },
    classesDetails: {
      coachingName: '',
      modeOfTeaching: '',
      YoE: 0,
      coachingAddress: '',
      allClassesInfo: [
        {
          subjectName: 'economics',
          class: '12',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'mathematics',
          class: '12',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'economics',
          class: '11',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'english',
          class: '10',
          fees: 0,
          demoLink: '',
        },
      ],
    },
  },
  {
    personalDetails: {
      name: 'user2',
      email: '',
      dob: '',
      phone: 0,
      residentialAddress: '',
      summary: '',
    },
    classesDetails: {
      coachingName: '',
      modeOfTeaching: '',
      YoE: 0,
      coachingAddress: '',
      allClassesInfo: [
        {
          subjectName: 'physics',
          class: '10',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'physics',
          class: '11',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'english',
          class: '10',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'economics',
          class: '12',
          fees: 0,
          demoLink: '',
        },
      ],
    },
  },
  {
    personalDetails: {
      name: 'user3',
      email: '',
      dob: '',
      phone: 0,
      residentialAddress: '',
      summary: '',
    },
    classesDetails: {
      coachingName: '',
      modeOfTeaching: '',
      YoE: 0,
      coachingAddress: '',
      allClassesInfo: [
        {
          subjectName: 'mathematics',
          class: '7',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'physics',
          class: '11',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'chemistry',
          class: '10',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'biology',
          class: '12',
          fees: 0,
          demoLink: '',
        },
      ],
    },
  },
  {
    personalDetails: {
      name: 'user4',
      email: '',
      dob: '',
      phone: 0,
      residentialAddress: '',
      summary: '',
    },
    classesDetails: {
      coachingName: '',
      modeOfTeaching: '',
      YoE: 0,
      coachingAddress: '',
      allClassesInfo: [
        {
          subjectName: 'physics',
          class: '10',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'physics',
          class: '7',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'hindi',
          class: '9',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'computers',
          class: '7',
          fees: 0,
          demoLink: '',
        },
      ],
    },
  },
  {
    personalDetails: {
      name: 'user5',
      email: '',
      dob: '',
      phone: 0,
      residentialAddress: '',
      summary: '',
    },
    classesDetails: {
      coachingName: '',
      modeOfTeaching: '',
      YoE: 0,
      coachingAddress: '',
      allClassesInfo: [
        {
          subjectName: 'computers',
          class: '11',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'computers',
          class: '7',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'english',
          class: '2',
          fees: 0,
          demoLink: '',
        },
        {
          subjectName: 'social-science',
          class: '5',
          fees: 0,
          demoLink: '',
        },
      ],
    },
  },
]
