import axios from 'axios';

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: 'http://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
  // return axios.get(config.baseUrl + 'news/1/json');  백틱으로 아래처럼 정리
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  // return axios.get(config.baseUrl + 'news/1/json');  백틱으로 아래처럼 정리
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  // return axios.get(config.baseUrl + 'news/1/json');  백틱으로 아래처럼 정리
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList };
