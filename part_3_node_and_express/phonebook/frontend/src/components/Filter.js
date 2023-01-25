import React from "react"

const Filter = ({ onChange }) => (
  <form>
    filter shown with
    <input type="text" onChange={onChange} />
  </form>
)

export default Filter