import React from "react";
const Searchbar = () => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s8 offset -s4">
                    <form action="" onSubmit="">
                        <div className="input-field">
                            <i class="material-icons prefix">book</i>
                            <input placeholder="What do you want to read?" type="text" onChange="" />
                            <i class="material-icons prefix">search</i>
                        </div>
                    </form>
                </section>
            </div>
        </div>

    )
}

export default Searchbar;


