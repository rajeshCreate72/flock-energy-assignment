const { getAllMeters, filterMeters } = require("../models/meterModel");

async function getMeters(_, res) {
  const all = await getAllMeters();
  res.json({ total: all.length, data: all });
}

async function getFilterMeters(req, res) {
  const all = await getAllMeters();
  const { status, make, phase } = req.query;
  const result = await filterMeters(all, { status, make, phase });
  res.json({ total: result.length, data: result });
}
module.exports = { getMeters, getFilterMeters };
