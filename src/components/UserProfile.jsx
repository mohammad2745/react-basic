import { Username } from "./Username"
import PropTypes from "prop-types"

export function UserProfile() {
  return (
    <div id="user-profile">
      <Username username="jon"></Username>
      <div>
        <span>Email:</span>
        <span>user@mail.com</span>
      </div>
    </div>
  )
}

UserProfile.prototype = {
  username: PropTypes.string.isRequired 
}