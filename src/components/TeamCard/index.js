// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({each}) => {
  const {id, name, teamImageUrl} = each
  return (
    <Link to={`/team-matches/${id}`} className="teamCard-link">
      <li className="teamCard-li">
        <img src={teamImageUrl} alt={name} className="teamCard-img" />
        <h1 className="teamCard-h1">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
