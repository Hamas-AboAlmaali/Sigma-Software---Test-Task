const candidateService = require('../services/candidates.service')

const addCandidate = async (req, res, next) => {
  const { firstName, lastName, phoneNumber, email, linkedInURL, GitHubURL, comment, timeInterval } = req.body
  try {
    await candidateService.addCandidate(firstName, lastName, phoneNumber, email, timeInterval, linkedInURL, GitHubURL, comment)
    res.send('Candidate is added/updated successfully!')
  } catch (e) {
    res.status(400).json({
      errorMessage: e.message,
  });
  }
}

module.exports = { addCandidate }