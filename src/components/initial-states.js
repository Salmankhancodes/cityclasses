import { auth } from '../firebase-setup/firebase'
export const mentorFormFields = {
  personalDetails: {
    name: '',
    email: '',
    dob: '',
    phone: 0,
    residentialAddress: '',
    summary: '',
    coachingName: '',
    modeOfTeaching: '',
    YoE: 0,
    coachingAddress: '',
  },
  classesDetails: [
    {
      subjectName: '',
      grade: 0,
      fees: null,
      demoLink: '',
    },
  ],
}

export const dummyData = [
  {
    personalDetails: {
      name: 'Alice Adams',
      email: 'alice@example.com',
      dob: '1992-03-20',
      phone: 1234567891,
      residentialAddress: '789 Elm St, City, Country',
      summary: 'Passionate about helping students excel in their studies.',
      coachingName: 'Adams Academy',
      modeOfTeaching: 'Home Tutor',
      YoE: 6,
      coachingAddress: '456 Oak Ave, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'all-subjects',
        grade: 10,
        fees: 40,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Bob Brown',
      email: 'bob@example.com',
      dob: '1988-05-10',
      phone: 9876543210,
      residentialAddress: '456 Pine St, City, Country',
      summary: 'Experienced teacher dedicated to student success.',
      coachingName: 'Brown Learning Center',
      modeOfTeaching: 'Coaching Class',
      YoE: 9,
      coachingAddress: '123 Maple Ave, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'english',
        grade: 8,
        fees: 50,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Charlie Clark',
      email: 'charlie@example.com',
      dob: '1995-09-15',
      phone: 1231231234,
      residentialAddress: '789 Maple Ave, City, Country',
      summary: 'Dynamic educator with a focus on interactive learning.',
      coachingName: 'Clark Academy',
      modeOfTeaching: 'Table Batch',
      YoE: 4,
      coachingAddress: '456 Elm St, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'mathematics',
        grade: 11,
        fees: 60,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'David Davis',
      email: 'david@example.com',
      dob: '1990-08-25',
      phone: 4567891230,
      residentialAddress: '123 Oak Ave, City, Country',
      summary: 'Committed to making learning enjoyable and effective.',
      coachingName: 'Davis Tutoring Services',
      modeOfTeaching: 'Home Tutor',
      YoE: 7,
      coachingAddress: '789 Pine St, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'science',
        grade: 9,
        fees: 45,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Emily Evans',
      email: 'emily@example.com',
      dob: '1993-04-18',
      phone: 9876543211,
      residentialAddress: '456 Elm St, City, Country',
      summary: 'Dedicated to fostering a love for learning in students.',
      coachingName: 'Evans Education Center',
      modeOfTeaching: 'Table Batch',
      YoE: 5,
      coachingAddress: '123 Maple Ave, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'social-science',
        grade: 7,
        fees: 55,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Frank Fisher',
      email: 'frank@example.com',
      dob: '1987-11-30',
      phone: 1237894560,
      residentialAddress: '789 Pine St, City, Country',
      summary: 'Passionate about helping students reach their full potential.',
      coachingName: 'Fisher Academy',
      modeOfTeaching: 'Coaching Class',
      YoE: 10,
      coachingAddress: '456 Oak Ave, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'computers',
        grade: 12,
        fees: 70,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Grace Green',
      email: 'grace@example.com',
      dob: '1991-06-12',
      phone: 3216549870,
      residentialAddress: '123 Maple Ave, City, Country',
      summary: 'Innovative teaching methods to engage and inspire students.',
      coachingName: 'Green Learning Hub',
      modeOfTeaching: 'Home Tutor',
      YoE: 8,
      coachingAddress: '789 Elm St, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'physics',
        grade: 10,
        fees: 65,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Hannah Hill',
      email: 'hannah@example.com',
      dob: '1989-02-07',
      phone: 4563217890,
      residentialAddress: '456 Oak Ave, City, Country',
      summary:
        'Empowering students to become critical thinkers and problem solvers.',
      coachingName: 'Hill Educational Institute',
      modeOfTeaching: 'Table Batch',
      YoE: 11,
      coachingAddress: '123 Pine St, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'chemistry',
        grade: 11,
        fees: 60,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Ian Irwin',
      email: 'ian@example.com',
      dob: '1994-01-23',
      phone: 7893216540,
      residentialAddress: '789 Pine St, City, Country',
      summary: 'Creating a supportive learning environment for every student.',
      coachingName: 'Irwin Coaching Center',
      modeOfTeaching: 'Coaching Class',
      YoE: 9,
      coachingAddress: '456 Elm St, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'biology',
        grade: 12,
        fees: 75,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Jack Johnson',
      email: 'jack@example.com',
      dob: '1993-07-04',
      phone: 9871236540,
      residentialAddress: '123 Pine St, City, Country',
      summary:
        'Fostering a love for learning through engaging educational experiences.',
      coachingName: 'Johnson Learning Center',
      modeOfTeaching: 'Home Tutor',
      YoE: 8,
      coachingAddress: '789 Oak Ave, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'biotechnology',
        grade: 9,
        fees: 55,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
  {
    personalDetails: {
      name: 'Kelly King',
      email: 'kelly@example.com',
      dob: '1990-12-15',
      phone: 3219876540,
      residentialAddress: '456 Maple Ave, City, Country',
      summary: 'Committed to helping students achieve their academic goals.',
      coachingName: 'King Academy',
      modeOfTeaching: 'Table Batch',
      YoE: 7,
      coachingAddress: '123 Elm St, City, Country',
    },
    classesDetails: [
      {
        subjectName: 'economics',
        grade: 10,
        fees: 60,
        demoLink: 'https://example.com/demo',
      },
    ],
  },
]
