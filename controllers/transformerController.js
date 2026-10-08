const { getAllTransformers } = require("../models/transformerModel");

async function getTransformers(req, res) {
  const all = await getAllTransformers();
  console.table(all);
  res.json({ total: all.data.length, data: all });
}

module.exports = { getTransformers };
