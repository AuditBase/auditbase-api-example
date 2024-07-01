import os
import requests

HOST = "https://api.auditbase.com/"

def get_scan(scan_id):
    api_key = os.environ.get('AUDITBASE_API_KEY')
    if not api_key:
        raise(Exception("API_KEY not found.  Please set the API_KEY environment variable."))
    
    webhook_url = os.environ.get('AUDITBASE_WEBHOOK_URL', '')

    print('webhook_url:', webhook_url)
    route = 'v1/scans/'
    url = HOST + route  + scan_id
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}',
    }


    response = requests.get(url, headers=headers)
    results_report = response.json()

    print("response: ", results_report)
    print("num issues:", len(results_report))




if __name__ == "__main__":
    scan_id = '<scanid you want to get>'
    get_scan(scan_id)


