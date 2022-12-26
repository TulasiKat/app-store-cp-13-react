// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="appItem">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
// const appsList = [
//   {
//     appId: 0,
//     appName: 'Facebook',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
//     category: 'SOCIAL',
//   },
