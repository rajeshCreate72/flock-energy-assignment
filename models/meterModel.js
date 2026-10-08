const portal = require("../portal/portalClient");

// Cached meters data
let cachedMeters = null;

async function getAllMeters() {
  if (!cachedMeters) {
    cachedMeters = await portal.fetchMetersDataFromPortal(); // HTTP call to the portal
    console.log(cachedMeters);
  }
  return cachedMeters;
}

function filterMeters(meters, { status, make, phase }) {
  return (
    meters &&
    meters.filter(
      (m) =>
        (!status || m.installStatus === status) &&
        (!make || m.make === make) &&
        (!phase || m.phaseType === phase),
    )
  );
}

module.exports = { getAllMeters, filterMeters };
