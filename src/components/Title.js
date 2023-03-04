const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2 data-testid="section-title">
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
export default Title
