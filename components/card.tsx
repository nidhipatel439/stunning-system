import React from "react";
import Image from "next/image";

const Card = (props: { imageAlt: string, bookTitle: string, bookDescription: string, image: string, bookLink: string }) => {
  return (
    <div className="card mb-3 w-75 mx-auto">
      <div className="row g-0">
        <div className="col-sm-4" style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Image src={props.image} alt={props.imageAlt} height="200" width="200" />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{props.bookTitle}</h5>
            <p className="card-text">{props.bookDescription}</p>
            <a href={props.bookLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-warning card-link" >Amazon Link
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card