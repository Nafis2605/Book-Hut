import React from "react"

const Pagination = (props) => {
    const pageLinks = []
    for (let i = 1; i <= props.totalPages; i++) {
        let isActive;
        if (props.currentPage == i) {
            isActive = "active"
        } else {
            isActive = ""
        }

        let classes = "wave-effect " + isActive

        pageLinks.push(<button
            className={classes}
            key={i}
            style={
                {
                    fontSize: 15,
                    padding: 12,
                    margin: 12,
                    alignItems: "center"
                }
            }
            onClick={
                () => {
                    props.nextPage(i)
                }
            }

        >
            {i}
        </button >)

    }

    return (
        <div className="container">
            <div className="row">
                <div >
                    {pageLinks}
                </div>
            </div>

        </div>
    )
}

export default Pagination; 