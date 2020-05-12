export const BASE_URL = 'http://47.103.11.131/final-server'
export const BASE_IMG_URL = 'http://www.musicdo.cn'

export const MUSICAL_INSTRUMENT_TYPE = [
  {
    id: 0,
    type: 'all',
    name: 'all'
  },
  {
    id: 1,
    type: 'piano',
    name: 'piano'
  },
  {
    id: 2,
    type: 'eletric',
    name: 'eletric'
  },
  {
    id: 3,
    type: 'guitar',
    name: 'guitar'
  },
  {
    id: 4,
    type: 'pine',
    name: 'pine'
  },
  {
    id: 5,
    type: 'violin',
    name: 'violin'
  },
  {
    id: 6,
    type: 'drump',
    name: 'drump'
  },
  {
    id: 7,
    type: 'folk',
    name: 'folk'
  },
  {
    id: 8,
    type: 'present',
    name: 'present'
  }
]

export const INSTRUMENT_PRICE_TYPE = [
  {
    id: 1,
    value: '价格不限',
    range: [0, 1000000000]
  },
  {
    id: 2,
    value: '1千以下',
    range: [0, 1000]
  },
  {
    id: 3,
    value: '1千~5千',
    range: [1000, 5000]
  },
  {
    id: 4,
    value: '5千~1万',
    range: [5000, 10000]
  },
  {
    id: 5,
    value: '1万~3万',
    range: [10000, 30000]
  },
  {
    id: 6,
    value: '3万~5万',
    range: [30000, 50000]
  },
  {
    id: 7,
    value: '5万~10万',
    range: [50000, 100000]
  },
  {
    id: 8,
    value: '10万以上',
    range: [100000, 100000000]
  }
]
