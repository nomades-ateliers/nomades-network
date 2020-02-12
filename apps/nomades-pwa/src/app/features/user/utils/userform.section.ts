
export const getSectionsEditable = (actions: { trainings: Function; skills: Function; }) =>  [
  {
    key: 'desc',
    value: false,
    title: 'Description',
    isString: true
  },
  {
    key: 'job',
    value: false,
    title: 'Métier | Profession',
    isString: true
  },
  {
    key: 'skills',
    value: false,
    title: 'Compétences',
    isArray: true,
    action: actions.skills
  },
  {
    key: 'contact',
    value: false,
    title: 'Contact:'
  },
  {
    key: 'trainings',
    value: false,
    title: 'Formation(s) Nomades',
    isArray: true,
    action: actions.trainings
  }
];