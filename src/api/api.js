import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.pagar.me/core/v5/',
    timeout: 1000,
    headers: {               
        'Authorization': 'Basic ' + Buffer.from("sk_test_*:").toString('base64'),
        'Content-Type': 'application/json'              
      },
  });