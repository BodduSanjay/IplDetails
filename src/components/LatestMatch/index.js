// Write your code here
import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const updatedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedData

  return (
    <div className="LatestMatch-bg-cont">
      <div className="LatestMatch-img-details-cont">
        <div className="LatestMatch-details-cont">
          <h1 className="latestMatchDetails-heading">{competingTeam}</h1>
          <p className="LatestMatch-date-para">{date}</p>
          <p className="LatestMatch-content-para">{venue}</p>
          <p className="LatestMatch-content-para">{result}</p>
        </div>
        <div className="LatestMatch-img-cont">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="LatestMatch-img"
          />
        </div>
      </div>
      <div className="LatestMatch-other-details-cont">
        <p className="LatestMatch-content-para">
          First Innings
          <br />
          {firstInnings}
        </p>
        <p className="LatestMatch-content-para">
          Second Innings
          <br />
          {secondInnings}
        </p>
        <p className="LatestMatch-content-para">
          Man Of The Match
          <br />
          {manOfTheMatch}
        </p>
        <p className="LatestMatch-content-para">
          Umpires
          <br />
          {umpires}
        </p>
      </div>
    </div>
  )
}
export default LatestMatch
