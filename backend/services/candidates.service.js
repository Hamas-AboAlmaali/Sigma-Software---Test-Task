const candidateModel = require('../model/candidates')

const candidateValidation = (firstName, lastName, email, comment) => {
  if (firstName.length == 0) {
    throw new Error('First Name is required!')
  }
  if (lastName.length == 0) {
    throw new Error('Last Name is required!')
  }
  if (email.length == 0) {
    throw new Error('Email is required!')
  }
  if (comment.length == 0) {
    throw new Error('Free Comment is required!')
  }
}

const addCandidate = async (firstName, lastName, phoneNumber, email, timeInterval, linkedInURL, GitHubURL, comment) => {
  candidateValidation(firstName, lastName, email, comment)
  return await candidateModel.addCandidate(firstName, lastName, phoneNumber, email, timeInterval, linkedInURL, GitHubURL, comment)
}

module.exports = { addCandidate }