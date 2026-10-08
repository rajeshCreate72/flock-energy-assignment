const portal = require("../portal/portalClient");

// Cached transformers data
let cachedTransformers = null;

async function getAllTransformers() {
  if (!cachedTransformers) {
    cachedTransformers = await portal.fetchTransformersFromPortal(); // one real HTTP call to the portal
  }
  return cachedTransformers;
}

module.exports = { getAllTransformers };
