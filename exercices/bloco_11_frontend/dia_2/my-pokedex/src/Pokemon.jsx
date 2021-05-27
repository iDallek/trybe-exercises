import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { _, name, type, averageWeight, image } = this.props.info;
    return (
      <div className="box">
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} />
      </div>
    )
  }
}

export default Pokemon;