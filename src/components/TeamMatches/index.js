// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true, bgcolor: ''}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({
      teamDetails: formattedData,
      isLoading: false,
      bgcolor: `bg-${id}`,
    })
  }

  render() {
    const {teamDetails, isLoading, bgcolor} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    return (
      <div className={bgcolor}>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className="teamMatches-bg">
            <img
              src={teamBannerUrl}
              alt={latestMatchDetails.id}
              className="teamMatches-banner-img"
            />
            <div className="latestMatchDetails-cont">
              <p className="latestMatchDetails-para">Latest Matches</p>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.id}
              />
            </div>
            <ul className="teamMatches-ul-cont">
              {recentMatches.map(each => (
                <MatchCard each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
