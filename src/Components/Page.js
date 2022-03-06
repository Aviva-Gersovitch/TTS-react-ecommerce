import React, { Component } from "react";
import {Favorites} from "./Favorites";


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Favorites />

        {/* <div className="search-bar">
          <form className="mb-3">
            <label>Search</label>
            <input type="search" placeholder="Search for an item" />
            </form>
        </div>
        <Favorites 
        name="Spiralizer" 
        img ="image.jpg"     //Not currently working
        price="$25" 
        description="A healthier alternative to pasta, make noodles out of your favorite
        veggies. Not noodles, but zoodles (zucchini noodles). What fun!" 
    key= "1" /> */ }
      </div>
    );
  }
}

export default Page;
