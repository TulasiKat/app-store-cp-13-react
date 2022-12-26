// Write your code here
import './index.css'

const TabItem = props => {
  const {details, cat, tabChangedMain} = props
  const {displayText, tabId} = details

  const tabChanged = () => {
    tabChangedMain(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={cat === tabId ? 'selected-tab' : 'button'}
        onClick={tabChanged}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
