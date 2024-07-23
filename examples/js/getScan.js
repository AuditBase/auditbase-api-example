const axios = require('axios')
const fs = require('fs')

const HOST = "https://api.auditbase.com/";
const scan_id = "Your scan ID here";
async function get_scan(scan_id) {
  api_key =  process.env.AUDITBASE_API_KEY;
  if (!api_key) {
    throw Error(
      "API_KEY not found.  Please set the API_KEY environment variable."
    );
  }
  webhook_url = process.env.AUDITBASE_WEBHOOK_URL || "";

  console.log("webhook_url:", webhook_url);
  route = "v1/scans/";
  url = HOST + route + scan_id;
  config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };

  axios.get(url, config);
  response = await axios.get(url, config);
  results_report = response.data;

  console.log("response: ", results_report);
  console.log("num issues:", results_report?.length);
}

async function get_scan_pdf(scan_id) {
    api_key =  process.env.AUDITBASE_API_KEY;
    if (!api_key) {
      throw Error(
        "API_KEY not found.  Please set the API_KEY environment variable."
      );
    }
    webhook_url = process.env.AUDITBASE_WEBHOOK_URL || "";
  
    console.log("webhook_url:", webhook_url);
    route = "v1/scans/";
    url = HOST + route + scan_id+"?format=pdf";
    config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api_key}`,
      },
      responseType: 'arraybuffer'
    };
  
    axios.get(url, config);
    response = await axios.get(url, config);
    const outputPath = "scan_report222a.pdf";
    fs.writeFileSync(outputPath, response.data);
    //results_report = response.data;

  
    //console.log("response: ", results_report);
    //console.log("num issues:", results_report?.length);
  }

//get_scan(scan_id);
get_scan_pdf(scan_id);
