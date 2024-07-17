const db = require('./dbConnection')

const addCandidate = async (firstName, lastName, phoneNumber, email, timeInterval, linkedInURL, GitHubURL, comment) => {
  const [rows, fields] = await db.execute('SELECT * FROM `job_candidates` WHERE `email` = ?', [email])

  if (rows.length > 0) {
    return await db.execute(
      'UPDATE `job_candidates` SET first_name = ?, last_name = ?, phone_number = ?, linkedin_profile_URL = ?, github_profile_URL = ?, comment = ?, start_time = ?, end_time = ? WHERE email = ?',
      [firstName, lastName, phoneNumber, linkedInURL, GitHubURL, comment, timeInterval[0], timeInterval[1], email]
    )
  } else {
    return await db.execute(
      'INSERT INTO `job_candidates` (`candidate_id`, `first_name`, `last_name`, `phone_number`, `email`, `start_time`, `end_time`, `linkedin_profile_URL`, `github_profile_URL`, `comment`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, phoneNumber, email, timeInterval[0], timeInterval[1], linkedInURL, GitHubURL, comment]
    )
  }

}

module.exports = { addCandidate }