export type planCardProps = {
  img: string
  id: number
  text: string
  link: string
  name: string
  days: string[]
}
export type NavCardProps = {
  docRef: React.RefObject<HTMLDivElement>
}

export type ReadPlanProps = {
  Random: planCardProps[]
  Love: planCardProps[]
  Anxiety: planCardProps[]
  Kids: planCardProps[]
  Hope: planCardProps[]
  Fear: planCardProps[]
  Depressions: planCardProps[]
  Prayer: planCardProps[]
  Work: planCardProps[]
}
