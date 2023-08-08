'use client';
import React from "react";

export function SearchBar() {
	const submitAction = () => {

	}
	return(
    <div>
      <div id="navbar-search-autocomplete" className="form-outline">
        <input type="search" id="form-search" className="form-control" />
        <label className="form-label" htmlFor="form-search">Search</label>
      </div>
      <button type="button" className="btn btn-primary">
        <i className="fas fa-search"></i>
      </button>
    </div>
    
	)
}