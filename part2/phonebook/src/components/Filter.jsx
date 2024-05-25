/* eslint-disable react/prop-types */
const Filter = ({value, onChange}) => (
  <div>
    Filter list <input
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Filter