const getAddress = (token) => {
  const app = Application.currentApplication()
  app.includeStandardAdditions = true;
  try {
  result = app.doShellScript(`curl -X POST  -H "Authorization: Bearer ${token}" https://quack.duckduckgo.com/api/email/addresses`)
  return result
} catch (e) {return `Can't get address: ${e}`}
  }

function run(argv) {
  let response = getAddress(argv[0])
  try {
    response = JSON.parse(response)
    return response.error
      ? `Duck says: ${response.error}`
      : response.address + '@duck.com'
  } catch (e) {return response}
}