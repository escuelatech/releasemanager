import React from 'react';

function ViewRelease({onHide}) {
    return (
        <div>
            <div className="card releaseForm">
                <h4>Release Info</h4>
                <div className="card-body">
                    <h5>Application Name: <span>Escuela Tech</span></h5>
                    <h5>Release Name: <span>Something</span></h5>
                    <h5>Release Version: <span>1.0.0</span></h5>
                    <h5>Release Owner: <span>Shyam Ramath</span></h5>
                    <h5>Dev Lead: <span>Shyam Ramath</span></h5>
                    <h5>Test Lead: <span>John Doe</span></h5>
                    <h5>Project Manager: <span>Jane Doe</span></h5>
                    <br />
                    <div class="btns">
                        <button class="btn prevBtn" onClick={onHide}>Cancel</button>            
                        <button class="btn btn-primary nextBtn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewRelease;