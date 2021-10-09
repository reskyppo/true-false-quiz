import { useSelector } from "react-redux"

const Result = () => {
const score = useSelector(state => state.scores.score)
  return (
    <div>
      {score}
    </div>
  )
}

export default Result
