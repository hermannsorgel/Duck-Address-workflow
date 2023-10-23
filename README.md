# Duck Address Workflow
Alfred workflow that generates Private Addresses with the DuckDuckGo API:

[Download workflow](google.com)
# Usage
Workflows uses DuckDuckGo API. Provide API token to make it work:
1. Follow the DuckDuckGo instructions to setup your Duck Address.
2. On Autofill tab on the DuckDuckGo email protection page open your web browser's developer tools.
3. Click the Generate Private Duck Address button and view the Network tab on your developer tools window.
4. Select the "Addresses" call for the API POST request. The item will look like this: authorization: Bearer <API token>.
5. In workflow settings add token to 'Arg and Vars' object:

# Known issues
In case of overuse DuckDuckGo may block token for about 24h. In this case API returns same Private Address every time.