'use client'

import CountUp from "react-countup"

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div>  
      <CountUp
      decimal="."
      prefix="$"
      decimals={2}
      end={amount} />
    </div>
  )
}

export default AnimatedCounter
