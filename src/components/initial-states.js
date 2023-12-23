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
