import os
import requests
from pathlib import Path
host = "https://api.auditbase.com/"

def test_v1_ai_scan():
    api_key = os.environ.get('AUDITBASE_API_KEY')
    if not api_key:
        raise(Exception("API_KEY not found.  Please set the API_KEY environment variable."))
    
    webhook_url = os.environ.get('AUDITBASE_WEBHOOK_URL', '')

    
    route = "v1/ai-scan/upload"
    url = host + route
    file1 = Path('contracts/solidity/example_1.sol').read_text()
    file2 = Path('contracts/solidity/example_2.sol').read_text()
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }
    print(file1)
    payload = {
      "params": {
          "name": "ai scan1",
          "files": {"file1.sol": file1, "files2.sol": file2},
          "webhook_url": webhook_url,
          "scan_type": "solidity",
      }
    }
    
    print("url:", url)
    response = requests.post(url, json=payload, headers=headers)
    print("response:", response.json())



if __name__ == "__main__":
    test_v1_ai_scan()