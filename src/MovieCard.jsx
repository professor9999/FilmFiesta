import React from "react"

const Moviecard = ({tempMovie1} ) => {
    return(
        <div className="container">
            <div className="movie">
                <div>
                </div>
                <div>
                    <img src={tempMovie1.Poster !== 'N/A' ? tempMovie1.Poster : 'https://via.placeholder.com/400'} alt={tempMovie1.Title}/>
                </div>

                <div>
                    <span>{tempMovie1.Type}</span>
                    <h3>{tempMovie1.Title} ({tempMovie1.Year})</h3>
                </div>
            </div>
        </div>
    );
}

export default Moviecard;
