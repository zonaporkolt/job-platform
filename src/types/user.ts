export type UserType = 'employer' | 'applicant'

export interface User {
  id: string
  username: string
  type: UserType
}
