/* eslint-disable react/prop-types */


const Card = ({data}) => {
  return (
    <div>
        <figure>
             <img src={data.url} alt={data.title} />
        </figure>
        <p>
            <span>{data.title}</span>
            <span>{data.explanation}</span>
        </p>
    </div>
  )
}

export { Card };