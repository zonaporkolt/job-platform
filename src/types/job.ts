export interface Job {
  id: string
  title: string
  description: string
  tags: string[]
  created: number
  salary: {
    amount: number
    currency: string
  }
}
