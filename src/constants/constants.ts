const C = {
  theme: {
    inputBaseClassName:
      'shadow shadow-sky-500 w-72 border border-1 border-solid border-transparent outline-1 outline-transparent hover:outline-sky-500 rounded-md hover:border-sky-500 p-2 transition-colors duration-250 focus:outline-sky-500'
  },
  h1Endpoints: {
    getPrograms:
      'https://api.hackerone.com/v1/hackers/programs?page[number]={page}&page[size]=100',
    fetchScope:
      'https://api.hackerone.com/v1/hackers/programs/{handle}/structured_scopes'
  }
} as const

export default C
