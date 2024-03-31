// Write your code here
import './index.css'

const MatchCard = ({each}) => {
  const updatedDetail = {
    competingTeamLogo: each.competing_team_logo,
    result: each.result,
    competingTeam: each.competing_team,
    matchStatus: each.match_status,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = updatedDetail

  const matchCardStatus = matchStatus === 'Win' ? 'green-color' : 'red-color'

  return (
    <li className="matchCard-li">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="matchCard-img"
      />
      <h1 className="matchCard-h1">{competingTeam}</h1>
      <p className="matchCard-result">{result}</p>
      <p className={matchCardStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
