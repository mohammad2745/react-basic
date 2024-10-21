import { Username } from "./Username"

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