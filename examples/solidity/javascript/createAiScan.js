const axios = require('axios')
const fs = require('fs')

const host = "https://api.auditbase.com/"

async function test_v1_ai_scan(){
    const api_key = process.env.AUDITBASE_API_KEY
    if  (!api_key) {
        raise(Exception("API_KEY not found.  Please set the API_KEY environment variable."))
    }
    const webhook_url = process.env.AUDITBASE_WEBHOOK_URL

    const route = "v1/ai-scan/upload"
    url = host + route
    const file1 = fs.readFileSync('contracts/solidity/example_1.sol', 'utf8')
    const file2 = fs.readFileSync('contracts/solidity/example_2.sol', 'utf8')
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
    }

    const payload = {
      "params": {
          name: "ai scan1",
          files: {"file1.sol": file1, "files2.sol": file2},
          webhook_url: webhook_url,
          scan_type: "solidity",
      }
    }
    
    const response = await axios.post(url, payload, {headers: headers})
    console.log("response:", response.data)
}



test_v1_ai_scan()