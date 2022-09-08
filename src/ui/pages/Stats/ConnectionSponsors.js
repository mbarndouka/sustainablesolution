import React from "react";


// import css files
import "./ConnectionSponsor.css";

// import components
import SearchConnections from "./SearchConnections";

function ConnectionSponsors() {
    return (
        <div className="ConnectionSponsorsContainer">
            <div className="ConnectionSponsorsTitle">
                <h1>Connected sponsors <span>(1)</span></h1>
            </div>
            <div className="ConnectionSponsorsBackground">
                {/*tabs component*/}
                <div className="ConnectionSponsorsNav">
                <ul className=" nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-main-tab" data-bs-toggle="pill" data-bs-target="#pills-main" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Main Tab</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-archive-tab" data-bs-toggle="pill" data-bs-target="#pills-archive" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Archived</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
 <SearchConnections />
  <div className="tab-pane fade show active" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab">
  <table className="table">
  <thead className="thead-primary" id="connectionTableHead">
    <tr>
      <th scope="col">
        {/*checkbox*/}
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  {/* <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label> */}
</div>
      </th>
      <th scope="col">Name Of School</th>
      <th scope="col">Status</th>
      <th scope="col">Country</th>
      <th scope="col">School Type</th>
    </tr>
  </thead>
  <tbody id="tableConnectionsBody">
    <tr>
      <th scope="row">
      <div className="textandtableP form-check">
  <input className="form-check-input" type="checkbox" value="" id=""/>
  {/* <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label> */}
</div>
      </th>
      <td className="tableFirstColumn">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg" alt="school"/>
        <p className="schoolName">Kigali Junior Academy</p>
      </td>
      <td>
        <p className="tableStatus">Active</p>
      </td>
      <td>
        <p className="textandtableP">Rwanda</p>
      </td>
      <td>
        <p className="textandtableP">Primary School</p>
      </td>
    </tr>

    <tr>
      <th scope="row">
      <div className="textandtableP form-check">
  <input className="form-check-input" type="checkbox" value="" id=""/>
  {/* <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label> */}
</div>
      </th>
      <td className="tableFirstColumn">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg" alt="school"/>
        <p className="schoolName">Kigali Junior Academy</p>
      </td>
      <td>
        <p className="tableStatus">Active</p>
      </td>
      <td>
        <p className="textandtableP">Rwanda</p>
      </td>
      <td>
        <p className="textandtableP">Primary School</p>
      </td>
    </tr>


    <tr>
      <th scope="row">
      <div className="textandtableP form-check">
  <input className="form-check-input" type="checkbox" value="" id=""/>
  {/* <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label> */}
</div>
      </th>
      <td className="tableFirstColumn">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg" alt="school"/>
        <p className="schoolName">Kigali Junior Academy</p>
      </td>
      <td>
        <p className="tableStatus">Active</p>
      </td>
      <td>
        <p className="textandtableP">Rwanda</p>
      </td>
      <td>
        <p className="textandtableP">Primary School</p>
      </td>
    </tr>


    <tr>
      <th scope="row">
      <div className="textandtableP form-check">
  <input className="form-check-input" type="checkbox" value="" id=""/>
  {/* <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label> */}
</div>
      </th>
      <td className="tableFirstColumn">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg" alt="school"/>
        <p className="schoolName">Kigali Junior Academy</p>
      </td>
      <td>
        <p className="tableStatus">Active</p>
      </td>
      <td>
        <p className="textandtableP">Rwanda</p>
      </td>
      <td>
        <p className="textandtableP">Primary School</p>
      </td>
    </tr>

    <tr>
      <th scope="row">
      <div className="textandtableP form-check">
  <input className="form-check-input" type="checkbox" value="" id=""/>
  {/* <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label> */}
</div>
      </th>
      <td className="tableFirstColumn">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg" alt="school"/>
        <p className="schoolName">Kigali Junior Academy</p>
      </td>
      <td>
        <p className="tableStatus">Active</p>
      </td>
      <td>
        <p className="textandtableP">Rwanda</p>
      </td>
      <td>
        <p className="textandtableP">Primary School</p>
      </td>
    </tr>
  </tbody>
</table>
<nav id="paginationId" aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#1">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#2">1</a></li>
    <li class="page-item"><a class="page-link" href="#3">2</a></li>
    <li class="page-item"><a class="page-link" href="#4">3</a></li>
    <li class="page-item"><a class="page-link" href="#5tb">Next</a></li>
  </ul>
</nav>
  </div>
  <div className="tab-pane fade" id="pills-archive" role="tabpanel" aria-labelledby="pills-archive-tab">
    
  </div>
</div>
                </div>
            </div>
        </div>
    );
}

export default ConnectionSponsors;
