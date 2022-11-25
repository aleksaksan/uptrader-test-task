export type Project = {
  id: number,
  name: string,
  // tasks?: Task[], todo
}

export const ProjectListMock: Project[] = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
]
