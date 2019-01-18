function processDirections(response) {
  // Define parameters
  const route = response.routes[0].legs[0];
  const distance = route.distance.text;
  const duration = route.duration.text;
  const origin = route.start_address;
  const destination = route.end_address;
  const steps = route.steps;

  // Set main details direction
  setDirectionDetails(distance, duration, origin, destination);

  // set Instructions
  setInstructions(steps);

}

function setInstructions(steps) {

  // Construct list
  let instructionList = '';
  steps.forEach((step, index) => {
    var listDetails = `
        <li class="list-group-item">
          <div class="instruction-container">
            <div class="instruction-index">${index + 1}</div>
            <div class="instruction-details">
              <div class="instruction-text">${step.instructions}</div>
              <div class="instruction-info">${step.distance.text}&nbsp;-&nbsp;${step.duration.text}</div>
            </div>
          </div>
        </li>`;

    // Add to total list
    instructionList += listDetails;
  });

  // Construct total html elements
  let mainInstruction =
    `<div class="card">
        <ul class="list-group list-group-flush">
          ${instructionList}
        </ul>
      </div>`;

  // Set html to element
  $('#direction-instruction-list').html(mainInstruction);
}

function setDirectionDetails(distance, duration, origin, destination) {
  let directionDetails =
    `<div class="card">
      <div class="card-body">
        <h5 class="card-title" style="display:inline-block;">${distance}</h5>
        <h6 class="card-subtitle mb-2 text-muted" style="display:inline-block;">&nbsp;${duration} ${$('input[name=travelMode]:checked')[0].value.toLowerCase()}</h6>
        <p class="card-text"><strong>Origin</strong><br>${origin}<br><br><strong>Destination</strong><br>${destination}</p>
        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="restart()">Restart</button>
      </div>
    </div>`;

  // Set html
  $('#direction-details').html(directionDetails);
}

export { processDirections };
