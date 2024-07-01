# Auditbase API Client Examples
An Auditbase API key is necessary and can be obtained
at [Auditbase](https://www.auditbase.com).
The AUDITBASE_API_KEY environmental variable must be set.
The AUDITBASE_WEBHOOK_URL environmental variable can be set
if desired to receive a post request at the URL specified
in AUDITBASE_WEBHOOK_URL with scan results after the scan is finished.

## Javascript Examples
First run ```npm install```
### Place Scan
```node examples/js/placeAiScan.js```

### View Scan
In the scan file replace scan_id with the scan_id of the 
file you wish to view.  Then run 
```node examples/js/getScan.js```


## Python Examples
### Place Scan
run ```python examples/python/place_ai_scan.py```

### View Scan
In the scan file replace scan_id with the scan_id of the 
file you wish to view.  Then run
run ```python examples/python/get_scan.py```



