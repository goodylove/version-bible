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
  plans: {
    random: planCardProps[]
    Love: planCardProps[]
    Anxiety: planCardProps[]
    Kids: planCardProps[]
    Hope: planCardProps[]
    Fear: planCardProps[]
    Depressions: planCardProps[]
    Prayer: planCardProps[]
    Work: planCardProps[]
  }
}

export type PlanCardTwoProps = {
  item: {
    img: string
    link?: string
    id: number
  }
  isClick?: boolean
}
